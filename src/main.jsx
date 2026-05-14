import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  Clock3,
  Headphones,
  Database,
  CalendarCheck,
  ClipboardCheck,
  Bot,
  PhoneCall,
  Users,
  Star,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Timer,
  TrendingUp,
  CalendarDays
} from 'lucide-react';
import './styles.css';

const LOGO = '/logo-recepcia.png';

const HERO_IMAGE =
  'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png';

const PROCESS_IMAGE =
  'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/2ecc67a6b_generated_0e00bcdf.png';

const navLinks = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' }
];

const problemCards = [
  {
    icon: PhoneCall,
    title: 'Llamadas sin responder',
    text: 'Cada minuto cuenta, perder una solicitud puede convertirse en una reserva menos.'
  },
  {
    icon: ClipboardCheck,
    title: 'Procesos manuales',
    text: 'La carga de trabajo innecesaria está afectando la eficiencia del equipo.'
  },
  {
    icon: Users,
    title: 'Falta de seguimiento',
    text: 'Las oportunidades que no se siguen correctamente acaban enfriándose.'
  },
  {
    icon: CalendarDays,
    title: 'No-shows',
    text: 'La falta de confirmaciones afecta tanto al huésped como al equipo.'
  }
];

const solutionCards = [
  {
    icon: Headphones,
    title: 'Agente de Voz IA en Recepción',
    text: 'Una recepcionista virtual con voz natural atiende llamadas y consultas de huéspedes las 24 horas, los 7 días de la semana.',
    tag: 'Voz natural 24/7'
  },
  {
    icon: Database,
    title: 'Base de Datos Inteligente',
    text: 'Gestiona solicitudes, contactos, preferencias e historial de estancias con acceso inmediato.',
    tag: 'Acceso instantáneo'
  },
  {
    icon: CalendarCheck,
    title: 'Check-in y Check-out Automatizado',
    text: 'Procesos de entrada y salida sin esperas, gestionando la verificación de identidad y asignación de habitaciones.',
    tag: 'Tiempo de espera'
  },
  {
    icon: MessageCircle,
    title: 'Atención al Cliente Omnicanal',
    text: 'Un único agente IA responde por teléfono, WhatsApp, email y chat con coherencia total y tono personalizado.',
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
    text: 'Obtén resultados medibles en una semana para empezar a escalar.'
  }
];

const testimonials = [
  {
    quote:
      'Hemos aumentado nuestras conversiones en un 40%. ¡RecepcIA es una inversión que vale la pena!',
    name: 'María Rodríguez',
    role: 'Directora, Hotel Boutique Las Palmas',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80'
  },
  {
    quote:
      'Ahorro 15 horas a la semana gracias a la automatización. ¡Recomiendo RecepcIA sin dudarlo!',
    name: 'Carlos Mendoza',
    role: 'Propietario, Resort Vista Mar',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80'
  }
];

const benefitCards = [
  {
    icon: TrendingUp,
    title: 'Aumento de Reservas',
    text: 'Captación de clientes optimizada con inteligencia artificial.'
  },
  {
    icon: Timer,
    title: 'Menos Trabajo Manual',
    text: 'Automatización que libera tiempo para lo realmente importante.'
  },
  {
    icon: Headphones,
    title: 'Mejora en la Comunicación',
    text: 'Respuestas 24/7 a potenciales huéspedes sin intervención humana.'
  },
  {
    icon: ShieldCheck,
    title: 'Seguimiento Efectivo',
    text: 'Conversión de leads asegurada con seguimiento inteligente.'
  }
];

const faqs = [
  {
    question: '¿RecepcIA sustituye al personal de recepción?',
    answer:
      'No. RecepcIA actúa como una primera capa inteligente para evitar llamadas perdidas, recoger datos y derivar al equipo humano los casos que realmente necesitan atención.'
  },
  {
    question: '¿Se puede adaptar a un hotel pequeño?',
    answer:
      'Sí. La implantación puede empezar de forma sencilla, con captación de solicitudes y seguimiento básico, y escalar después según necesidades.'
  },
  {
    question: '¿Qué ocurre cuando entra una solicitud?',
    answer:
      'La solicitud se registra, se clasifica y se avisa al equipo para que pueda contactar, cualificar y cerrar más reservas.'
  },
  {
    question: '¿Los datos quedan protegidos?',
    answer:
      'La captación se prepara con consentimiento, trazabilidad y envío seguro al backend, evitando exponer claves privadas en el frontend.'
  }
];

function App() {
  return (
    <div className="site">
      <Navbar />
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
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="RecepcIA">
          <img src={LOGO} alt="RecepcIA" />
          <span>
            Recepc<span>IA</span>
          </span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contacto">
          Agendar Demo
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={closeMenu}>
            Agendar Demo
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <p className="section-kicker hero-kicker">
            <span />
            Automatización de recepciones hoteleras
          </p>

          <h1>
            ¿Pierdes clientes por
            <br />
            falta de
            <br />
            <em>automatización</em>?
          </h1>

          <p className="hero-subtitle">
            Automatiza tu recepción con agentes de voz IA, bases de datos inteligentes y
            atención al cliente 24/7, sin intervención humana.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contacto">
              Agendar demo gratuita
              <ArrowRight size={17} />
            </a>

            <a className="secondary-button" href="#soluciones">
              Conocer soluciones
            </a>
          </div>

          <div className="hero-stats">
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
    <section id="problemas" className="section section-soft">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">El desafío</p>
          <h2>¿Cuáles son los desafíos que enfrentas?</h2>
        </div>

        <div className="problem-grid">
          {problemCards.map((item) => {
            const Icon = item.icon;

            return (
              <article className="problem-card" key={item.title}>
                <div className="gold-icon dark">
                  <Icon size={18} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="center-action">
          <a className="primary-button small" href="#soluciones">
            Resolver estos problemas
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="soluciones" className="section">
      <div className="section-shell">
        <div className="section-heading left">
          <p className="section-kicker">Nuestras soluciones</p>
          <h2>
            Automatiza tu Recepción con
            <br />
            RecepcIA
          </h2>
        </div>

        <figure className="wide-image">
          <img src={HERO_IMAGE} alt="Recepción de hotel premium" />
          <figcaption>“La recepción que nunca duerme.”</figcaption>
        </figure>

        <div className="solution-grid">
          {solutionCards.map((item) => {
            const Icon = item.icon;

            return (
              <article className="solution-card" key={item.title}>
                <div className="gold-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.tag}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="metrics-grid">
          <div>
            <strong>80%</strong>
            <span>de conversión en leads</span>
            <small>con atención inmediata</small>
          </div>
          <div>
            <strong>15h</strong>
            <span>ahorro a la semana</span>
            <small>en procesos manuales</small>
          </div>
          <div>
            <strong>+30%</strong>
            <span>captación de clientes</span>
            <small>con campañas automatizadas</small>
          </div>
        </div>

        <div className="center-action">
          <a className="primary-button small" href="#contacto">
            Quiero estas soluciones
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="section section-soft">
      <div className="section-shell process-layout">
        <div className="process-image">
          <img src={PROCESS_IMAGE} alt="Llave de hotel sobre mesa" />
        </div>

        <div className="process-copy">
          <p className="section-kicker">El proceso</p>
          <h2>Así de fácil es comenzar</h2>

          <div className="process-steps">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <strong>{step.number}</strong>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="primary-button small" href="#contacto">
            Agendar consulta
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="section-shell">
        <blockquote className="quote-card">
          <Bot size={23} />
          <p>
            “La automatización de recepción no empieza sustituyendo personas.
            Empieza evitando llamadas perdidas, datos duplicados y oportunidades sin
            seguimiento.”
          </p>
          <cite>RecepcIA · vertical hotelera de PimeIA</cite>
        </blockquote>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">Testimonios</p>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars" aria-label="5 estrellas">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p>“{item.quote}”</p>

              <div className="person">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="center-action">
          <a className="primary-button" href="#contacto">
            Quiero resultados así
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section section-soft">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">Beneficios</p>
          <h2>¿Qué lograrás con RecepcIA?</h2>
        </div>

        <div className="benefit-grid">
          {benefitCards.map((item) => {
            const Icon = item.icon;

            return (
              <article className="benefit-card" key={item.title}>
                <div className="gold-icon">
                  <Icon size={18} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="center-action">
          <a className="primary-button small" href="#contacto">
            Comenzar ahora
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="section-shell faq-shell">
        <div className="section-heading centered">
          <p className="section-kicker">FAQ</p>
          <h2>Preguntas Frecuentes</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDown size={17} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="center-action">
          <a className="secondary-button" href="#contacto">
            Resolver mis dudas
            <ArrowRight size={15} />
          </a>
        </div>
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
    consent_rgpd: false,
    honeypot: ''
  });

  const [status, setStatus] = useState({
    state: 'idle',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status.state === 'loading') return;

    if (!formData.consent_rgpd) {
      setStatus({
        state: 'error',
        message: 'Debes aceptar el tratamiento de datos para enviar la solicitud.'
      });
      return;
    }

    setStatus({
      state: 'loading',
      message: 'Enviando solicitud...'
    });

    try {
      const response = await fetch('/api/recepcia-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          business_name: formData.business_name,
          message: formData.message,
          consent_rgpd: formData.consent_rgpd,
          consent: formData.consent_rgpd,
          honeypot: formData.honeypot,
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
        consent_rgpd: false,
        honeypot: ''
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message:
          error.message ||
          'No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta directamente.'
      });
    }
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="section-shell contact-layout">
        <aside className="contact-card">
          <p className="section-kicker">Demo gratuita</p>

          <h2>
            Cuéntanos qué parte de tu recepción quieres automatizar.
          </h2>

          <p>
            Recibirás una respuesta para revisar tu caso y priorizar una primera
            automatización segura, con atención y captación preparada para funcionar 24/7.
          </p>

          <div className="contact-methods">
            <a href="mailto:info@pimeia.es">
              <Mail size={18} />
              <span>
                <small>Email</small>
                info@pimeia.es
              </span>
            </a>

            <a href="tel:+34936943575">
              <Phone size={18} />
              <span>
                <small>Teléfono 24/7</small>
                936 943 575
              </span>
            </a>

            <a href="https://wa.me/34609785645" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>
                <small>WhatsApp</small>
                609 785 645
              </span>
            </a>

            <div>
              <Clock3 size={18} />
              <span>
                <small>Disponibilidad</small>
                Atención inteligente 24/7
              </span>
            </div>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="hidden-field"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-grid">
            <label>
              <span>Nombre *</span>
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </label>

            <label>
              <span>Teléfono</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 600 000 000"
              />
            </label>

            <label>
              <span>Email *</span>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
            </label>

            <label>
              <span>Nombre del negocio</span>
              <input
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Hotel, hostal o alojamiento"
              />
            </label>

            <label className="full">
              <span>Mensaje</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Explícanos qué quieres automatizar en recepción"
              />
            </label>
          </div>

          <label className="consent-row">
            <input
              type="checkbox"
              name="consent_rgpd"
              checked={formData.consent_rgpd}
              onChange={handleChange}
            />
            <span>
              Acepto que <strong>RecepcIA / PimeIA</strong> trate estos datos para
              contactar conmigo sobre mi solicitud.
            </span>
          </label>

          {status.message && (
            <div className={`form-message ${status.state}`}>
              {status.state === 'success' && <CheckCircle2 size={18} />}
              {status.state === 'error' && <AlertCircle size={18} />}
              {status.state === 'loading' && <Loader2 className="spin" size={18} />}
              <span>{status.message}</span>
            </div>
          )}

          <button
            className="primary-button form-submit"
            type="submit"
            disabled={status.state === 'loading'}
          >
            {status.state === 'loading'
              ? 'Enviando...'
              : 'Quiero automatizar mi negocio'}
            <ArrowRight size={17} />
          </button>
        </form>
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
          No dejes que la falta de tecnología limite tu crecimiento. La inteligencia
          artificial está transformando la industria hotelera.
        </p>

        <a className="gold-button" href="#contacto">
          Agendar mi demo gratuita
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <a className="footer-brand" href="#top">
          <img src={LOGO} alt="RecepcIA" />
          <span>
            Recepc<span>IA</span>
          </span>
        </a>

        <nav>
          <a href="#problemas">Problemas</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#proceso">Proceso</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <p>© 2026 RecepcIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
