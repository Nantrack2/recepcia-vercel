import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  DatabaseZap,
  Headphones,
  Hotel,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';
import './styles.css';

const LOGO_SRC = '/logo-recepcia.svg';

const HOTEL_IMAGE =
  'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png';

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
    text: 'Atiende consultas frecuentes, recoge datos clave y deriva al equipo humano solo los casos que lo necesitan.'
  },
  {
    icon: <DatabaseZap aria-hidden="true" />,
    title: 'Base de datos inteligente',
    text: 'Centraliza solicitudes, contactos, preferencias y próximos pasos para evitar oportunidades perdidas.'
  },
  {
    icon: <Clock3 aria-hidden="true" />,
    title: 'Atención 24/7',
    text: 'Tu hotel puede responder incluso cuando recepción está ocupada o fuera del horario habitual.'
  },
  {
    icon: <CalendarCheck aria-hidden="true" />,
    title: 'Seguimiento comercial',
    text: 'Cada lead queda registrado para que puedas contactar, cualificar y cerrar más reservas.'
  }
];

const processSteps = [
  {
    title: 'Diagnóstico inicial',
    text: 'Detectamos dónde se pierden llamadas, solicitudes y oportunidades comerciales.'
  },
  {
    title: 'Diseño del flujo',
    text: 'Definimos qué debe responder la IA, qué datos recoger y cuándo debe avisar al equipo.'
  },
  {
    title: 'Primera automatización',
    text: 'Activamos una capa segura de captación y seguimiento sin alterar tu operativa actual.'
  },
  {
    title: 'Mejora continua',
    text: 'Medimos resultados y priorizamos nuevas automatizaciones con impacto real.'
  }
];

const faqs = [
  {
    q: '¿RecepcIA sustituye al personal de recepción?',
    a: 'No. Está pensada para reducir tareas repetitivas, mejorar la respuesta inicial y liberar tiempo del equipo humano.'
  },
  {
    q: '¿Se puede adaptar a un hotel pequeño?',
    a: 'Sí. Puede empezar con captación de leads, consultas frecuentes y seguimiento manual antes de automatizar más procesos.'
  },
  {
    q: '¿Qué ocurre cuando entra una solicitud?',
    a: 'La solicitud queda registrada y recibes un aviso interno con los datos necesarios para contactar con el cliente.'
  },
  {
    q: '¿Los datos quedan protegidos?',
    a: 'Sí. El formulario envía la solicitud a través de un backend seguro y no expone claves privadas en el navegador.'
  }
];

function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src={LOGO_SRC} alt="" />
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="RecepcIA inicio" onClick={closeMenu}>
          <Logo />
          <span>
            Recepc<span>IA</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contacto">
          Agendar demo
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contacto" onClick={closeMenu}>
            Agendar demo gratuita
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={HOTEL_IMAGE} alt="" />
        <div className="hero-overlay" />
      </div>

      <div className="gold-thread" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content reveal">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            Automatización de recepciones hoteleras
          </span>

          <h1>
            ¿Pierdes clientes por falta de <em>automatización</em>?
          </h1>

          <p className="hero-subtitle">
            Automatiza tu recepción con agentes de voz IA, bases de datos inteligentes y atención
            al cliente 24/7, sin intervención humana.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contacto">
              Agendar demo gratuita <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#soluciones">
              Conocer soluciones
            </a>
          </div>

          <div className="hero-metrics" aria-label="Indicadores principales">
            <div>
              <strong>80%</strong>
              <span>mejor seguimiento</span>
            </div>
            <div>
              <strong>15h</strong>
              <span>ahorro semanal</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>atención IA</span>
            </div>
          </div>
        </div>

        <aside className="hero-card reveal delay" aria-label="Resumen de RecepcIA">
          <div className="hero-card-top">
            <span className="pulse-dot" />
            <span>Recepción asistida</span>
          </div>

          <div className="agent-circle">
            <Bot size={56} />
          </div>

          <div>
            <h2>Tu primera capa de atención inteligente</h2>
            <p>
              Recoge solicitudes, clasifica oportunidades y avisa al equipo cuando entra un nuevo
              lead cualificado.
            </p>
          </div>

          <div className="metric-grid">
            <div>
              <strong>24/7</strong>
              <span>disponibilidad</span>
            </div>
            <div>
              <strong>IA</strong>
              <span>voz y datos</span>
            </div>
            <div>
              <strong>CRM</strong>
              <span>seguimiento</span>
            </div>
          </div>
        </aside>
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
            <ShieldCheck size={24} aria-hidden="true" />
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
        <p className="muted-text">
          La prioridad es capturar oportunidades sin romper procesos actuales ni comprometer datos
          sensibles.
        </p>
      </div>

      <div className="steps">
        {processSteps.map((step, index) => (
          <article className="step" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="section-shell content-section testimonial-section">
      <article className="testimonial-card">
        <Hotel size={42} aria-hidden="true" />
        <blockquote>
          “La automatización de recepción no empieza sustituyendo personas. Empieza evitando
          llamadas perdidas, datos duplicados y oportunidades sin seguimiento.”
        </blockquote>
        <p>RecepcIA · vertical hotelera de PimeIA</p>
      </article>
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
            <summary>
              <span>{item.q}</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
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
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const submitLead = async (event) => {
    event.preventDefault();

    if (status.state === 'loading') return;

    if (!formData.consent) {
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
          website: formData.website,
          consent: formData.consent,
          page_url: window.location.href
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
        website: '',
        consent: false
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'No hemos podido enviar la solicitud. Inténtalo de nuevo.'
      });
    }
  };

  return (
    <section id="contacto" className="section-shell contact-section">
      <div className="contact-copy">
        <span className="section-kicker">Demo gratuita</span>
        <h2>Cuéntanos qué parte de tu recepción quieres automatizar.</h2>
        <p>
          Recibirás una respuesta para revisar tu caso y priorizar una primera automatización segura.
        </p>

        <div className="contact-methods">
          <a href="mailto:info@pimeia.es">
            <Mail size={18} /> info@pimeia.es
          </a>
          <a href="tel:+34609785645">
            <Phone size={18} /> 609 785 645
          </a>
          <span>
            <MessageSquare size={18} /> RecepcIA · hoteles
          </span>
        </div>
      </div>

      <form className="lead-form" onSubmit={submitLead} noValidate>
        <input
          className="honeypot"
          type="text"
          name="website"
          value={formData.website}
          onChange={updateField}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

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
            placeholder="Hotel, hostal o alojamiento"
          />
        </label>

        <label className="full-width">
          Mensaje
          <textarea
            name="message"
            value={formData.message}
            onChange={updateField}
            rows="4"
            placeholder="Explícanos qué quieres automatizar en recepción"
          />
        </label>

        <label className="checkbox full-width">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={updateField} />
          <span>Acepto que RecepcIA / PimeIA trate estos datos para contactar conmigo sobre mi solicitud.</span>
        </label>

        {status.message && <div className={`form-status ${status.state}`}>{status.message}</div>}

        <button className="primary-button full-width" type="submit" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? 'Enviando...' : 'Quiero automatizar mi negocio'} <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand footer-brand">
        <Logo />
        <span>
          Recepc<span>IA</span>
        </span>
      </div>
      <p>RecepcIA es una landing vertical de PimeIA para automatización hotelera con IA.</p>
    </footer>
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
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
