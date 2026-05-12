import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const MAX_FIELD_LENGTH = 5000;

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function clean(value, maxLength = MAX_FIELD_LENGTH) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return clean(value).replace(/[&<>'"]/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    };
    return entities[char];
  });
}

function buildEmailHtml(lead, insertedId) {
  const rows = [
    ['Nombre', lead.name],
    ['Email', lead.email],
    ['Teléfono', lead.phone || '—'],
    ['Negocio / hotel', lead.business_name || '—'],
    ['Mensaje', lead.message || '—'],
    ['Source', lead.source],
    ['Vertical', lead.vertical],
    ['URL', lead.page_url || '—'],
    ['User Agent', lead.user_agent || '—'],
    ['ID Supabase', insertedId || '—']
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17130f;">
      <h1 style="margin:0 0 12px;">Nuevo lead de RecepcIA</h1>
      <p style="margin:0 0 20px;color:#5f554b;">Se ha recibido una nueva solicitud desde la landing RecepcIA.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="border:1px solid #e2d8c9;padding:10px;font-weight:bold;background:#fbf8f2;width:180px;">${escapeHtml(label)}</td>
            <td style="border:1px solid #e2d8c9;padding:10px;">${escapeHtml(value)}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== 'POST') {
    return json(res, 405, { success: false, error: 'Method not allowed' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return json(res, 500, { success: false, error: 'Server configuration error' });
  }

  const body = req.body || {};
  const honeypot = clean(body.website, 250);

  if (honeypot) {
    return json(res, 200, { success: true, spam_ignored: true });
  }

  const lead = {
    name: clean(body.name, 180),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 80) || null,
    business_name: clean(body.business_name, 220) || null,
    message: clean(body.message, 2500) || null,
    source: clean(process.env.RECEPCIA_SOURCE || 'recepcia', 80),
    vertical: clean(process.env.RECEPCIA_VERTICAL || 'hotels', 80),
    status: 'new',
    page_url: clean(body.page_url, 1000) || null,
    user_agent: clean(req.headers['user-agent'], 1000) || null
  };

  const consentAccepted = body.consent === true || body.consent === 'true' || body.consent === 'on';

  if (!lead.name || !lead.email) {
    return json(res, 400, { success: false, error: 'Nombre y email son obligatorios' });
  }

  if (!isValidEmail(lead.email)) {
    return json(res, 400, { success: false, error: 'Email no válido' });
  }

  if (!consentAccepted) {
    return json(res, 400, { success: false, error: 'Consentimiento obligatorio' });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const { data, error } = await supabase
    .from('recepcia_leads')
    .insert(lead)
    .select('id')
    .single();

  if (error) {
    console.error('RecepcIA Supabase insert error:', error);
    return json(res, 500, { success: false, error: 'No hemos podido guardar la solicitud' });
  }

  let emailSent = false;
  let emailError = null;

  if (process.env.RESEND_API_KEY && process.env.RECEPCIA_NOTIFY_EMAIL && process.env.RECEPCIA_FROM_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const subjectName = lead.business_name || lead.name;

      await resend.emails.send({
        from: `RecepcIA <${process.env.RECEPCIA_FROM_EMAIL}>`,
        to: [process.env.RECEPCIA_NOTIFY_EMAIL],
        replyTo: lead.email,
        subject: `Nuevo lead de RecepcIA: ${subjectName}`,
        html: buildEmailHtml(lead, data?.id)
      });

      emailSent = true;
    } catch (error) {
      emailError = 'Email notification failed';
      console.error('RecepcIA Resend email error:', error);
    }
  }

  return json(res, 200, {
    success: true,
    id: data?.id,
    email_sent: emailSent,
    email_warning: emailError
  });
}
