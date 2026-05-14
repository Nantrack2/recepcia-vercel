import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  DatabaseZap,
  Headphones,
  Hotel,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  X
} from 'lucide-react';
import './styles.css';

const LOGO_SRC = '/logo-recepcia.png';

const RECEPTION_IMAGE =
  'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png';

const DETAIL_IMAGE =
  'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/2ecc67a6b_generated_0e00bcdf.png';

const navItems = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' }
];

const challengeCards = [
  {
    icon: <Clock3 aria-hidden="true" />,
    title: 'Leads sin responder',
    text: 'Cada minuto cuenta, puedes perder reservas oportunamente.'
  },
  {
    icon: <DatabaseZap aria-hidden="true" />,
    title: 'Procesos manuales',
    text: 'La carga de trabajo innecesaria está afectando tu eficiencia.'
  },
  {
    icon: <Target aria-hidden="true" />,
    title: 'Falta de seguimiento',
    text: 'Las oportunidades que no se siguen adecuadamente no convierten.'
  },
  {
    icon: <CalendarDays aria-hidden="true" />,
    title: 'No-shows',
    text: 'La falta de confirmaciones afecta tu tasa de ocupación.'
  }
];

const solutionCards = [
  {
    icon: <Headphones aria-hidden="true" />,
    title: 'Agente de Voz IA en Recepción',
    text: 'Una recepcionista virtual con voz natural atiende llamadas y consultas de huéspedes las 24 horas, los 7 días de la semana.',
    tag: 'Voz natural 24/7'
  },
  {
    icon: <DatabaseZap aria-hidden="true" />,
    title: 'Base de Datos Inteligente',
    text: 'Gestiona automáticamente reservas, preferencias del huésped e historial de estancia con acceso inmediato.',
    tag: 'Acceso instantáneo'
  },
  {
    icon: <CheckCircle2 aria-hidden="true" />,
    title: 'Check-in y Check-out Automatizado',
    text: 'Proceso de entrada y salida sin esperas, gestionado por IA con validación de identidad y asignación de habitaciones.',
    tag: 'Tiempo de espera'
  },
  {
    icon: <MessageCircle aria-hidden="true" />,
    title: 'Atención al Cliente Omnicanal',
    text: 'Un único agente IA responde por teléfono, WhatsApp, email y chat web con coherencia total y tono personalizado.',
    tag: 'Todos los canales'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultoría gratuita',
    text: 'Entendemos tus necesidades específicas y los desafíos de tu hotel.'
  },
  {
    number: '02',
    title: 'Implementación IA',
    text: 'Configuramos e implementamos la solución de IA personalizada.'
  },
  {
    number: '03',
    title: 'Resultados',
    text: 'Obtén resultados medibles en una semana para empezar.'
  }
];

const testimonials = [
  {
    quote:
      'Hemos aumentado nuestras conversiones en un 40%. ¡RecepcIA es una inversión que vale la pena!',
    name: 'María Rodríguez',
    role: 'Directora, Hotel Boutique Las Palmas'
  },
  {
    quote:
      'Ahorro 15 horas a la semana gracias a la automatización. ¡Recomiendo RecepcIA sin dudarlo!',
    name: 'Carlos Mendoza',
    role: 'Propietario, Resort Vista Mar'
  }
];

const benefits = [
  {
    icon: <ArrowUpRight aria-hidden="true" />,
    title: 'Aumento de Reservas',
    text: 'Captación de clientes optimizada con inteligencia artificial.'
  },
  {
    icon: <Clock3 aria-hidden="true" />,
    title: 'Menos Trabajo Manual',
    text: 'Automatización que te libera tiempo para lo que realmente importa.'
  },
  {
    icon: <Headphones aria-hidden="true" />,
    title: 'Mejora en la Comunicación',
    text: 'Respuestas 24/7 a potenciales huéspedes sin intervención humana.'
  },
  {
    icon: <Target aria-hidden="true" />,
    title: 'Seguimiento Efectivo',
    text: 'Conversión de leads asegurada con seguimiento inteligente.'
  }
];

const faqs = [
  {
    q: '¿Cuánto tiempo lleva implementar estas soluciones?',
    a: 'La primera capa puede prepararse de forma progresiva. Empezamos con captación y seguimiento antes de automatizar procesos más avanzados.'
  },
  {
    q: '¿Qué tipo de soporte recibiré después de la implementación?',
    a: 'Recibirás acompañamiento para revisar resultados, ajustar mensajes y priorizar mejoras con impacto real.'
  },
  {
    q: '¿Se puede personalizar la herramienta según mis necesidades?',
    a: 'Sí. RecepcIA se adapta al tipo de alojamiento, tono de comunicación, horarios y procesos internos.'
  },
  {
    q: '¿Cómo se integrará con mi sistema actual?',
    a: 'Primero analizamos tu sistema actual. Después conectamos solo lo necesario, evitando cambios bruscos o riesgos innecesarios.'
  },
  {
    q: '¿Qué resultados puedo esperar a corto plazo?',
    a: 'Menos leads perdidos, mejor respuesta inicial, más seguimiento y una recepción menos saturada.'
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
          Agendar Demo
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
        <img src={RECEPTION_IMAGE} alt="" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
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
              Agendar demo gratuita <ArrowRight size={17} />
            </a>
            <a className="secondary-button" href="#soluciones">
              Conocer soluciones
            </a>
          </div>

          <div className="hero-metrics" aria-label="Indicadores principales">
            <div>
              <strong>80%</strong>
              <span>conversión de leads</span>
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
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problemas" className="section-shell challenge-section">
      <div className="section-heading centered">
        <span className="section-kicker">El desafío</span>
        <h2>¿Cuáles son los desafíos que enfrentas?</h2>
      </div>

      <div className="challenge-grid">
        {challengeCards.map((card) => (
          <article className="challenge-card" key={card.title}>
            <span className="mini-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="centered-action">
        <a className="primary-button small-button" href="#soluciones">
          Resolver estos problemas
        </a>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="soluciones" className="section-shell solutions-section">
      <div className="section-heading left">
        <span className="section-kicker">Nuestras soluciones</span>
        <h2>Automatiza tu Recepción con RecepcIA</h2>
      </div>

      <figure className="wide-image">
        <img src={RECEPTION_IMAGE} alt="Recepción de hotel elegante" />
        <figcaption>“La recepción que nunca duerme.”</figcaption>
      </figure>

      <div className="solution-grid">
        {solutionCards.map((card) => (
          <article className="solution-card" key={card.title}>
            <span className="solution-icon">{card.icon}</span>
            <div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <small>{card.tag}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="dark-metrics">
        <article>
          <strong>80%</strong>
          <span>de conversión en leads</span>
          <small>con atención inmediata</small>
        </article>
        <article>
          <strong>15h</strong>
          <span>ahorro a la semana</span>
          <small>en procesos manuales</small>
        </article>
        <article>
          <strong>+30%</strong>
          <span>captación de clientes</span>
          <small>con campañas automatizadas</small>
        </article>
      </div>

      <div className="centered-action">
        <a className="primary-button small-button" href="#contacto">
          Quiero estas soluciones <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="process-band">
      <div className="section-shell process-layout">
        <div className="process-image">
          <img src={DETAIL_IMAGE} alt="Detalle elegante de hotel" />
        </div>

        <div className="process-content">
          <span className="section-kicker">El proceso</span>
          <h2>Así de fácil es comenzar</h2>

          <div className="process-steps">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="primary-button small-button" href="#contacto">
            Agendar consultoría <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="section-shell testimonials-section">
      <div className="section-heading centered">
        <span className="section-kicker">Testimonios</span>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="stars">★★★★★</div>
            <blockquote>“{item.quote}”</blockquote>
            <div className="author">
              <div className="avatar" aria-hidden="true" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="centered-action">
        <a className="primary-button small-button" href="#contacto">
          Quiero resultados así <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="benefits-band">
      <div className="section-shell benefits-section">
        <div className="section-heading centered">
          <span className="section-kicker">Beneficios</span>
          <h2>¿Qué lograrás con RecepcIA?</h2>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <span className="benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="centered-action">
          <a className="primary-button small-button" href="#contacto">
            Comenzar ahora <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-shell faq-section">
      <div className="section-heading centered">
        <span className="section-kicker">FAQ</span>
        <h2>Preguntas Frecuentes</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>
              <span>{item.q}</span>
              <ChevronDown size={16} aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      <div className="centered-action">
        <a className="secondary-button small-button" href="#contacto">
          Resolver mis dudas <ArrowRight size={15} />
        </a>
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
    <section id="contacto" className="contact-minimal-section">
      <div className="section-shell">
        <div className="section-heading centered contact-heading">
          <span className="section-kicker">Contacto</span>
          <h2>Listo para Automatizar tu Negocio</h2>
          <p>Completa el formulario y un especialista se pondrá en contacto contigo.</p>
        </div>

        <form className="minimal-form" onSubmit={submitLead} noValidate>
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

          <label className="checkbox full-width">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={updateField}
            />
            <span>
              Acepto que <strong>RecepcIA / PimeIA</strong> trate mis datos para contactar conmigo sobre mi solicitud.
              <small> Campo obligatorio</small>
            </span>
          </label>

          {status.message && <div className={`form-status ${status.state}`}>{status.message}</div>}

          <button className="primary-button full-width" type="submit" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Enviando...' : 'Quiero automatizar mi negocio'}{' '}
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="contact-inline">
          <a href="mailto:info@pimeia.es">
            <Mail size={16} /> info@pimeia.es
          </a>
          <a href="tel:+34936943575">
            <Phone size={16} /> 936 943 575
          </a>
          <a href="https://wa.me/34609785645" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp · 609 785 645
          </a>
          <span>
            <Clock3 size={16} /> Atención inteligente 24/7
          </span>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="section-shell">
        <h2>
          Toma el Control de tu <em>Futuro</em>
        </h2>
        <p>
          No dejes que la falta de tecnología limite tu crecimiento. La inteligencia artificial
          está transformando la industria hotelera.
        </p>
        <a className="gold-button" href="#contacto">
          Agendar mi demo gratuita <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <span>
          Recepc<span>IA</span>
        </span>
      </div>

      <nav>
        <a href="#problemas">Problemas</a>
        <a href="#soluciones">Soluciones</a>
        <a href="#proceso">Proceso</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <p>© 2026 RecepcIA. Todos los derechos reservados.</p>
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
        <Benefits />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
