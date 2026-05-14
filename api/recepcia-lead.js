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

function getPublicBaseUrl(req) {
  const configuredUrl =
    clean(process.env.RECEPCIA_PUBLIC_URL || process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL, 500);

  if (configuredUrl) {
    if (configuredUrl.startsWith('http://') || configuredUrl.startsWith('https://')) {
      return configuredUrl.replace(/\/$/, '');
    }

    return `https://${configuredUrl.replace(/\/$/, '')}`;
  }

  const host = clean(req.headers['x-forwarded-host'] || req.headers.host, 500);
  const proto = clean(req.headers['x-forwarded-proto'], 20) || 'https';

  if (!host) {
    return 'https://recepcia.es';
  }

  return `${proto}://${host}`.replace(/\/$/, '');
}

function buildInternalEmailHtml(lead, insertedId) {
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

function buildLeadEmailText(lead, siteUrl) {
  const name = clean(lead.name) || 'Hola';
  const message = clean(lead.message) || 'tu solicitud';
  const year = new Date().getFullYear();

  return `Asunto: Hemos recibido tu solicitud en RecepcIA

Gracias, ${name}.
Vamos a revisar cómo automatizar tu recepción.

Hemos recibido tu solicitud en RecepcIA sobre ${message}. Revisaremos tu caso y nos pondremos en contacto contigo a la mayor brevedad posible para mostrarte nuestras soluciones.

Qué miraremos primero:
1. Si estás perdiendo reservas por responder tarde a consultas o llamadas.
2. Qué tareas de recepción se repiten cada día y podrían automatizarse sin perder trato humano.
3. Cómo mejorar la atención 24/7 en web, teléfono, WhatsApp y email con agentes IA bien configurados.
4. Qué primera automatización tendría más impacto y menor riesgo para tu hotel.

No se trata de sustituir la atención de tu equipo, sino de liberar tiempo, responder antes y evitar que las oportunidades se pierdan por falta de seguimiento.

Ver RecepcIA:
${siteUrl}/#contacto

Automatización pensada para hoteles
RecepcIA puede ayudarte a responder consultas, registrar leads, preparar seguimientos, reducir tareas manuales y ofrecer una primera atención más rápida y consistente sin saturar tu recepción.

Contacto:
info@pimeia.es · 936 943 575 · WhatsApp 609 785 645

© ${year} RecepcIA / PimeIA. Todos los derechos reservados.`;
}

function buildLeadEmailHtml(lead, siteUrl) {
  const name = escapeHtml(lead.name) || 'Hola';
  const message = escapeHtml(lead.message || 'tu solicitud');
  const year = new Date().getFullYear();
  const recepciaUrl = `${siteUrl}/#contacto`;
  const imageUrl = `${siteUrl}/recepcia-email-visual.png`;

  return `<!doctype html>
<html lang="es" dir="auto" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>RecepcIA — Solicitud recibida</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      body { margin:0; padding:0; background:#F4F0E8; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
      img { border:0; height:auto; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
      p { display:block; margin:13px 0; }
      a { text-decoration:none; }
      @media only screen and (max-width:600px) {
        .container { width:100% !important; }
        .px { padding-left:22px !important; padding-right:22px !important; }
        .hero-title { font-size:30px !important; line-height:1.14 !important; }
        .section-title { font-size:24px !important; }
        .brand-wrap { width:100% !important; }
        .brand-cell, .brand-text-cell { display:block !important; width:100% !important; text-align:center !important; }
        .brand-text-cell { padding-top:10px !important; }
        .brand-name { font-size:34px !important; }
      }
    </style>
  </head>
  <body style="word-spacing:normal;background-color:#F4F0E8;">
    <div style="background-color:#F4F0E8;padding:0;margin:0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="container" style="width:600px;max-width:600px;margin:0 auto;background:#10100F;">
        <tr>
          <td align="center" style="padding:26px 24px 12px 24px;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="brand-wrap" style="margin:0 auto;">
              <tr>
                <td class="brand-cell" valign="middle" style="padding-right:10px;">
                  <img src="https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/fd0ec941b_Logo_RecepcIA_Sense_fons.png" alt="RecepcIA" width="108" style="display:block;width:108px;max-width:108px;height:auto;" />
                </td>
                <td class="brand-text-cell" valign="middle" style="text-align:left;">
                  <span class="brand-name" style="font-family:Georgia, 'Times New Roman', serif;font-size:44px;line-height:1;color:#FFFFFF;font-weight:400;">
                    Recepc<span style="color:#C29A45;">IA</span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td class="px" align="center" style="padding:10px 42px 10px 42px;">
            <p style="margin:0 0 12px 0;color:#C29A45;font-family:Arial, Helvetica, sans-serif;font-size:12px;letter-spacing:2.4px;text-transform:uppercase;font-weight:bold;">Solicitud recibida</p>
            <h1 class="hero-title" style="margin:0;color:#FFFFFF;font-family:Georgia, 'Times New Roman', serif;font-size:38px;line-height:1.12;font-weight:400;text-align:center;">
              Gracias, ${name}.<br>Vamos a revisar cómo automatizar tu recepción.
            </h1>
            <p style="margin:22px 0 0 0;color:#D8D0C2;font-family:Arial, Helvetica, sans-serif;font-size:16px;line-height:1.65;text-align:center;">
              Hemos recibido tu solicitud en RecepcIA sobre ${message}. Revisaremos tu caso y nos pondremos en contacto contigo a la mayor brevedad posible para mostrarte nuestras soluciones.
            </p>
          </td>
        </tr>

        <tr>
          <td class="px" style="padding:28px 42px 8px 42px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1A1917;border:1px solid rgba(194,154,69,0.38);border-radius:18px;">
              <tr>
                <td style="padding:24px 24px 20px 24px;">
                  <h2 class="section-title" style="margin:0 0 14px 0;color:#FFFFFF;font-family:Georgia, 'Times New Roman', serif;font-size:26px;line-height:1.2;font-weight:400;text-align:center;">Qué miraremos primero</h2>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr><td style="padding:10px 0;color:#F3EEE4;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.5;"><span style="color:#C29A45;font-weight:bold;">01.</span> Si estás perdiendo reservas por responder tarde a consultas o llamadas.</td></tr>
                    <tr><td style="padding:10px 0;color:#F3EEE4;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.5;"><span style="color:#C29A45;font-weight:bold;">02.</span> Qué tareas de recepción se repiten cada día y podrían automatizarse sin perder trato humano.</td></tr>
                    <tr><td style="padding:10px 0;color:#F3EEE4;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.5;"><span style="color:#C29A45;font-weight:bold;">03.</span> Cómo mejorar la atención 24/7 en web, teléfono, WhatsApp y email con agentes IA bien configurados.</td></tr>
                    <tr><td style="padding:10px 0;color:#F3EEE4;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.5;"><span style="color:#C29A45;font-weight:bold;">04.</span> Qué primera automatización tendría más impacto y menor riesgo para tu hotel.</td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td class="px" align="center" style="padding:24px 42px 18px 42px;">
            <p style="margin:0;color:#D8D0C2;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.65;text-align:center;">
              No se trata de sustituir la atención de tu equipo, sino de liberar tiempo, responder antes y evitar que las oportunidades se pierdan por falta de seguimiento.
            </p>
          </td>
        </tr>

        <tr>
          <td class="px" align="center" style="padding:0 42px 24px 42px;">
            <img src="${imageUrl}" alt="RecepcIA para hoteles" width="516" style="display:block;width:100%;max-width:516px;height:auto;border-radius:20px;" />
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:12px 24px 34px 24px;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
              <tr>
                <td align="center" bgcolor="#C29A45" role="presentation" style="border:0;border-radius:999px;background:#C29A45;">
                  <a href="${recepciaUrl}" style="display:inline-block;background:#C29A45;color:#10100F;font-family:Arial, Helvetica, sans-serif;font-size:15px;font-weight:bold;line-height:1.25;margin:0;text-decoration:none;padding:15px 30px;border-radius:999px;" target="_blank">Ver RecepcIA</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td class="px" style="padding:0 42px 34px 42px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;background:#F1E6D5;border:1px solid #D8C49F;border-radius:24px;">
              <tr>
                <td align="center" bgcolor="#F1E6D5" style="background:#F1E6D5;border-radius:24px;padding:26px 26px 24px 26px;">
                  <h2 style="margin:0 0 12px 0;color:#C29A45;font-family:Georgia, 'Times New Roman', serif;font-size:26px;line-height:1.2;font-weight:400;">Automatización pensada para hoteles</h2>
                  <p style="margin:0;color:#10100F;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.65;">
                    RecepcIA puede ayudarte a responder consultas, registrar leads, preparar seguimientos, reducir tareas manuales y ofrecer una primera atención más rápida y consistente sin saturar tu recepción.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:22px 24px 8px 24px;background:#10100F;">
            <p style="margin:0 0 10px 0;color:#C29A45;font-family:Arial, Helvetica, sans-serif;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;font-weight:bold;">Contacto</p>
            <p style="margin:0;color:#FFFFFF;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:1.7;">info@pimeia.es · 936 943 575 · WhatsApp 609 785 645</p>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:14px 24px 26px 24px;background:#10100F;">
            <p style="margin:0;color:#A8A196;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:1.5;">© ${year} RecepcIA / PimeIA. Todos los derechos reservados.</p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
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
  const honeypot = clean(body.website || body.honeypot, 250);

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
    user_agent: clean(body.user_agent || req.headers['user-agent'], 1000) || null
  };

  const consentAccepted =
    body.consent === true ||
    body.consent === 'true' ||
    body.consent === 'on' ||
    body.consent_rgpd === true ||
    body.consent_rgpd === 'true' ||
    body.consent_rgpd === 'on';

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

  let internalEmailSent = false;
  let leadEmailSent = false;
  const emailWarnings = [];

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RECEPCIA_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;
  const fromName = process.env.RECEPCIA_FROM_NAME || process.env.RESEND_FROM_NAME || 'RecepcIA';
  const replyTo = process.env.RECEPCIA_REPLY_TO || process.env.RESEND_REPLY_TO || fromEmail;
  const notifyEmail = process.env.RECEPCIA_NOTIFY_EMAIL;
  const shouldSendLeadAutoreply = process.env.RECEPCIA_SEND_LEAD_AUTOREPLY !== 'false';

  if (resendApiKey && fromEmail) {
    const resend = new Resend(resendApiKey);

    if (notifyEmail) {
      try {
        const subjectName = lead.business_name || lead.name;

        await resend.emails.send({
          from: `${fromName} <${fromEmail}>`,
          to: [notifyEmail],
          replyTo: lead.email,
          subject: `Nuevo lead de RecepcIA: ${subjectName}`,
          html: buildInternalEmailHtml(lead, data?.id)
        });

        internalEmailSent = true;
      } catch (error) {
        emailWarnings.push('Internal email notification failed');
        console.error('RecepcIA internal Resend email error:', error);
      }
    }

    if (shouldSendLeadAutoreply) {
      try {
        const siteUrl = getPublicBaseUrl(req);

        await resend.emails.send({
          from: `${fromName} <${fromEmail}>`,
          to: [lead.email],
          replyTo,
          subject: 'Hemos recibido tu solicitud en RecepcIA',
          html: buildLeadEmailHtml(lead, siteUrl),
          text: buildLeadEmailText(lead, siteUrl)
        });

        leadEmailSent = true;
      } catch (error) {
        emailWarnings.push('Lead autoreply email failed');
        console.error('RecepcIA lead autoreply Resend email error:', error);
      }
    }
  } else {
    emailWarnings.push('Resend not configured');
  }

  return json(res, 200, {
    success: true,
    id: data?.id,
    email_sent: internalEmailSent,
    internal_email_sent: internalEmailSent,
    lead_email_sent: leadEmailSent,
    email_warning: emailWarnings.length ? emailWarnings.join('; ') : null
  });
}