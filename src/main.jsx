import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bot, BrainCircuit, CalendarCheck, CheckCircle2, Clock3, DatabaseZap, Headphones, Hotel, Mail, MessageSquare, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import './styles.css';

const navItems = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' }
];

const problems = [
  'Llamadas sin responder cuando recepción está saturada.',
  'Preguntas repetitivas que consumen tiempo del equipo.',
  'Reservas potenciales que se pierden fuera del horario laboral.',
  'Información dispersa entre recepción, email, teléfono y WhatsApp.'
];

const solutions = [
  {
    icon: <Headphones aria-hidden="true" />,
    title: 'Agente de voz IA',
    text: 'Atiende llamadas frecuentes, recoge datos y deriva los casos importantes al equipo humano.'
  },
  {
    icon: <DatabaseZap aria-hidden="true" />,
    title: 'Base de datos inteligente',
    text: 'Centraliza solicitudes, contactos, preferencias y próximos pasos para evitar pérdidas de información.'
  },
  {
    icon: <Clock3 aria-hidden="true" />,
    title: 'Atención 24/7',
    text: 'Tu hotel puede responder incluso cuando la recepción no está disponible.'
  },
  {
    icon: <CalendarCheck aria-hidden="true" />,
    title: 'Seguimiento comercial',
    text: 'Cada lead queda registrado para que puedas contactar, cualificar y cerrar oportunidades.'
  }
];

const processSteps = [
  'Analizamos tus puntos de fricción en recepción.',
  'Diseñamos el flujo de atención y captación de datos.',
  'Conectamos el formulario y la base de datos segura.',
  'Medimos resultados y priorizamos automatizaciones de mayor impacto.'
];

const faqs = [
  {
    q: '¿RecepcIA sustituye al personal de recepción?',
    a: 'No. Está pensada para reducir tareas repetitivas, mejorar la respuesta inicial y liberar tiempo del equipo humano.'
  },
  {
    q: '¿Se puede adaptar a un hotel pequeño?',
    a: 'Sí. La primera versión puede empezar solo con captación de leads, consultas frecuentes y seguimiento manual.'
  },
  {
    q: '¿Los datos quedan protegidos?',
    a: 'La arquitectura propuesta guarda los leads en Supabase mediante backend seguro, sin exponer claves privadas en el navegador.'
  }
];

function Logo() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <img src="/logo-recepcia.svg" alt="" />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="RecepcIA inicio">
        <Logo />
        <span>Recepc<span>IA</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contacto">Agendar demo</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-content">
        <div className="eyebrow"><Sparkles size={16} /> Automatización hotelera con IA</div>
        <h1>¿Pierdes clientes por falta de automatización?</h1>
        <p className="hero-subtitle">Automatiza tu recepción con agentes de voz IA, bases de datos inteligentes y atención al cliente 24/7, sin intervención humana.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#contacto">Agendar demo gratuita <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#soluciones">Conocer soluciones</a>
        </div>
        <div className="trust-row" aria-label="Ventajas principales">
          <span><CheckCircle2 size={16} /> Captación de leads</span>
          <span><CheckCircle2 size={16} /> Sin claves privadas en frontend</span>
          <span><CheckCircle2 size={16} /> Preparado para Vercel</span>
        </div>
      </div>
      <div className="hero-card" aria-label="Resumen de RecepcIA">
        <div className="hero-card-top">
          <div className="pulse-dot" />
          <span>Recepción asistida</span>
        </div>
        <div className="agent-circle"><Bot size={54} /></div>
        <h2>Tu primera capa de atención inteligente</h2>
        <p>Recoge solicitudes, clasifica oportunidades y avisa al equipo cuando hay un nuevo lead cualificado.</p>
        <div className="metric-grid">
          <div><strong>24/7</strong><span>disponibilidad</span></div>
          <div><strong>IA</strong><span>voz y datos</span></div>
          <div><strong>CRM</strong><span>seguimiento</span></div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problemas" className="section-shell content-section">
      <div className="section-heading">
        <span className="section-kicker">Problemas habituales</span>
        <h2>La recepción pierde oportunidades cuando todo depende de disponibilidad humana.</h2>
      </div>
      <div className="problem-list">
        {problems.map((problem) => (
          <article key={problem} className="problem-card">
            <ShieldCheck aria-hidden="true" />
            <p>{problem}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="soluciones" className="section-shell content-section">
      <div className="section-heading centered">
        <span className="section-kicker">Soluciones</span>
        <h2>Una capa de IA para mejorar respuesta, registro y seguimiento.</h2>
      </div>
      <div className="solution-grid">
        {solutions.map((solution) => (
          <article key={solution.title} className="solution-card">
            <div className="solution-icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section-shell content-section split-section">
      <div>
        <span className="section-kicker">Proceso</span>
        <h2>Empezamos pequeño, medimos y escalamos con control.</h2>
        <p className="muted-text">La prioridad es capturar oportunidades sin romper procesos actuales ni comprometer datos sensibles.</p>
      </div>
      <div className="steps">
        {processSteps.map((step, index) => (
          <div className="step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="section-shell content-section testimonial-section">
      <div className="testimonial-card">
        <Hotel size={38} />
        <blockquote>“La automatización de recepción no empieza sustituyendo personas. Empieza evitando llamadas perdidas, datos duplicados y oportunidades sin seguimiento.”</blockquote>
        <p>RecepcIA · vertical hotelera de PimeIA</p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-shell content-section">
      <div className="section-heading centered">
        <span className="section-kicker">FAQ</span>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    message: '',
    website: '',
    consent: false
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submitLead = async (event) => {
    event.preventDefault();
    if (status.state === 'loading') return;

    if (!formData.consent) {
      setStatus({ state: 'error', message: 'Debes aceptar el tratamiento de datos para enviar la solicitud.' });
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
          website: formData.website,
          consent: formData.consent,
          page_url: window.location.href
        })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta directamente.');
      }

      setStatus({ state: 'success', message: 'Solicitud recibida. Te contactaremos para preparar la demo.' });
      setFormData({ name: '', phone: '', email: '', business_name: '', message: '', website: '', consent: false });
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'No hemos podido enviar la solicitud. Inténtalo de nuevo.' });
    }
  };

  return (
    <section id="contacto" className="section-shell contact-section">
      <div className="contact-copy">
        <span className="section-kicker">Demo gratuita</span>
        <h2>Cuéntanos qué parte de tu recepción quieres automatizar.</h2>
        <p>Recibirás una respuesta para revisar tu caso y priorizar una primera automatización segura.</p>
        <div className="contact-methods">
          <a href="mailto:info@pimeia.es"><Mail size={18} /> info@pimeia.es</a>
          <a href="tel:+34609785645"><Phone size={18} /> 609 785 645</a>
          <span><MessageSquare size={18} /> RecepcIA · hoteles</span>
        </div>
      </div>
      <form className="lead-form" onSubmit={submitLead} noValidate>
        <input className="honeypot" type="text" name="website" value={formData.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <label>
          Nombre *
          <input name="name" value={formData.name} onChange={updateField} required placeholder="Tu nombre" />
        </label>
        <label>
          Teléfono
          <input name="phone" value={formData.phone} onChange={updateField} placeholder="+34 600 000 000" />
        </label>
        <label>
          Email *
          <input name="email" type="email" value={formData.email} onChange={updateField} required placeholder="tu@email.com" />
        </label>
        <label>
          Nombre del negocio
          <input name="business_name" value={formData.business_name} onChange={updateField} placeholder="Hotel, hostal o alojamiento" />
        </label>
        <label className="full-width">
          Mensaje
          <textarea name="message" value={formData.message} onChange={updateField} rows="4" placeholder="Explícanos qué quieres automatizar en recepción" />
        </label>
        <label className="checkbox full-width">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={updateField} />
          <span>Acepto que PimeIA trate estos datos para contactar conmigo sobre mi solicitud.</span>
        </label>
        {status.message && <div className={`form-status ${status.state}`}>{status.message}</div>}
        <button className="primary-button full-width" type="submit" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? 'Enviando...' : 'Quiero automatizar mi negocio'} <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <footer className="site-footer">
        <div className="brand footer-brand"><Logo /><span>Recepc<span>IA</span></span></div>
        <p>RecepcIA es una landing vertical de PimeIA para automatización hotelera con IA.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
