import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { contactInfo } from './landingData.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    message: '',
    honeypot: '',
    consent_rgpd: false
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const submitLead = async (event) => {
    event.preventDefault();

    if (status.state === 'loading') return;

    if (!formData.consent_rgpd) {
      setStatus({
        state: 'error',
        message: 'Debes aceptar el tratamiento de datos para enviar la solicitud.'
      });
      return;
    }

    setStatus({ state: 'loading', message: 'Enviando solicitud...' });

    try {
      const response = await fetch('/api/recepcia-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          business_name: formData.business_name,
          message: formData.message,
          website: formData.honeypot,
          honeypot: formData.honeypot,
          consent: formData.consent_rgpd,
          consent_rgpd: formData.consent_rgpd,
          page_url: window.location.href,
          user_agent: navigator.userAgent
        })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.success) {
        throw new Error(
          payload.error ||
            'No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta directamente.'
        );
      }

      setStatus({
        state: 'success',
        message: 'Solicitud recibida. Te contactaremos para preparar la demo.'
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        business_name: '',
        message: '',
        honeypot: '',
        consent_rgpd: false
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'No hemos podido enviar la solicitud. Inténtalo de nuevo.'
      });
    }
  };

  return (
    <section id="contacto" className="contact-section-wrap">
      <div className="section-shell">
        <div className="contact-layout">
          <aside className="contact-panel">
            <span className="section-kicker">Demo gratuita</span>
            <h2>Cuéntanos qué parte de tu recepción quieres automatizar.</h2>
            <p>
              Recibirás una respuesta para revisar tu caso y priorizar una primera automatización
              segura.
            </p>

            <div className="contact-methods">
              {contactInfo.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('https') ? '_blank' : undefined}
                    rel={item.href.startsWith('https') ? 'noreferrer' : undefined}
                  >
                    <span className="contact-icon">{item.icon}</span>
                    <span>
                      <small>{item.label}</small>
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div key={item.label}>
                    <span className="contact-icon">{item.icon}</span>
                    <span>
                      <small>{item.label}</small>
                      {item.value}
                    </span>
                  </div>
                )
              )}
            </div>
          </aside>

          <form className="premium-form" onSubmit={submitLead} noValidate>
            <input
              className="honeypot"
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={updateField}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form-grid">
              <label>
                Nombre *
                <input
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  required
                  placeholder="Tu nombre completo"
                />
              </label>

              <label>
                Teléfono
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  placeholder="+34 600 000 000"
                />
              </label>

              <label>
                Email *
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={updateField}
                  required
                  placeholder="tu@email.com"
                />
              </label>

              <label>
                Nombre del negocio
                <input
                  name="business_name"
                  value={formData.business_name}
                  onChange={updateField}
                  placeholder="Hotel / Resort"
                />
              </label>

              <label className="full-width">
                Mensaje
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  rows="4"
                  placeholder="Cuéntanos sobre tu hotel y qué te gustaría automatizar..."
                />
              </label>
            </div>

            <label className="checkbox">
              <input
                type="checkbox"
                name="consent_rgpd"
                checked={formData.consent_rgpd}
                onChange={updateField}
              />
              <span>
                Acepto que <strong>RecepcIA / PimeIA</strong> trate mis datos para contactar conmigo
                sobre mi solicitud. <small>Campo obligatorio</small>
              </span>
            </label>

            {status.message && <div className={`form-status ${status.state}`}>{status.message}</div>}

            <button className="primary-button form-button" type="submit" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Enviando...' : 'Quiero automatizar mi negocio'}{' '}
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
