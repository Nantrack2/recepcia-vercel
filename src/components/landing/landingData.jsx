import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3, DatabaseZap, Headphones, Mail, MessageCircle, Phone, Target } from 'lucide-react';

export const LOGO_SRC = '/logo-recepcia.png';
export const RECEPTION_IMAGE = 'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png';
export const DETAIL_IMAGE = 'https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/2ecc67a6b_generated_0e00bcdf.png';

export const navItems = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' }
];

export const challengeCards = [
  { icon: <Clock3 aria-hidden="true" />, title: 'Leads sin responder', text: 'Cada minuto cuenta. Perder una consulta puede convertirse en una reserva perdida.' },
  { icon: <DatabaseZap aria-hidden="true" />, title: 'Procesos manuales', text: 'La carga de trabajo repetitiva reduce la eficiencia del equipo de recepción.' },
  { icon: <Target aria-hidden="true" />, title: 'Falta de seguimiento', text: 'Las oportunidades que no se siguen a tiempo difícilmente se convierten.' },
  { icon: <CalendarDays aria-hidden="true" />, title: 'No-shows', text: 'La falta de confirmaciones y recordatorios afecta la ocupación real.' }
];

export const solutionCards = [
  { icon: <Headphones aria-hidden="true" />, title: 'Agente de Voz IA en Recepción', text: 'Una recepcionista virtual con voz natural atiende llamadas y consultas de huéspedes las 24 horas, los 7 días de la semana.', tag: 'Voz natural 24/7' },
  { icon: <DatabaseZap aria-hidden="true" />, title: 'Base de Datos Inteligente', text: 'Gestiona automáticamente reservas, preferencias del huésped e historial de contacto con acceso inmediato.', tag: 'Acceso instantáneo' },
  { icon: <CheckCircle2 aria-hidden="true" />, title: 'Check-in y Check-out Automatizado', text: 'Procesos de entrada y salida más ágiles, con validación de datos y mejor organización interna.', tag: 'Menos esperas' },
  { icon: <MessageCircle aria-hidden="true" />, title: 'Atención al Cliente Omnicanal', text: 'Un único sistema responde por teléfono, WhatsApp, email y chat web con coherencia y tono personalizado.', tag: 'Todos los canales' }
];

export const processSteps = [
  { number: '01', title: 'Consultoría gratuita', text: 'Entendemos tus necesidades específicas y los desafíos reales de tu recepción.' },
  { number: '02', title: 'Implementación IA', text: 'Configuramos una primera capa de automatización útil, segura y medible.' },
  { number: '03', title: 'Resultados', text: 'Medimos el impacto, revisamos oportunidades y priorizamos las siguientes mejoras.' }
];

export const testimonials = [
  { quote: 'Hemos aumentado nuestras conversiones en un 40%. RecepcIA es una inversión que vale la pena.', name: 'María Rodríguez', role: 'Directora, Hotel Boutique Las Palmas', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80' },
  { quote: 'Ahorro 15 horas a la semana gracias a la automatización. Recomiendo RecepcIA sin dudarlo.', name: 'Carlos Mendoza', role: 'Propietario, Resort Vista Mar', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' }
];

export const benefits = [
  { icon: <ArrowUpRight aria-hidden="true" />, title: 'Aumento de Reservas', text: 'Captación optimizada de clientes con inteligencia artificial.' },
  { icon: <Clock3 aria-hidden="true" />, title: 'Menos Trabajo Manual', text: 'Automatización que libera tiempo para tareas de mayor valor.' },
  { icon: <Headphones aria-hidden="true" />, title: 'Mejora en la Comunicación', text: 'Respuestas disponibles 24/7 sin saturar al equipo humano.' },
  { icon: <Target aria-hidden="true" />, title: 'Seguimiento Efectivo', text: 'Leads registrados y preparados para una gestión comercial ordenada.' }
];

export const faqs = [
  { q: '¿Cuánto tiempo lleva implementar estas soluciones?', a: 'La primera capa puede prepararse de forma progresiva. Empezamos por captación, respuesta inicial y seguimiento antes de automatizar procesos más complejos.' },
  { q: '¿Qué tipo de soporte recibiré después de la implementación?', a: 'Tendrás acompañamiento para revisar resultados, ajustar mensajes y priorizar mejoras con impacto real.' },
  { q: '¿Se puede personalizar la herramienta según mis necesidades?', a: 'Sí. RecepcIA se adapta al tipo de alojamiento, tono de comunicación, horarios y procesos internos.' },
  { q: '¿Cómo se integrará con mi sistema actual?', a: 'Primero analizamos tu operativa actual. Después conectamos solo lo necesario, evitando cambios bruscos o riesgos innecesarios.' },
  { q: '¿Qué resultados puedo esperar a corto plazo?', a: 'Menos leads perdidos, mejor respuesta inicial, más seguimiento y una recepción menos saturada.' }
];

export const contactInfo = [
  { icon: <Mail aria-hidden="true" />, label: 'Email', value: 'info@pimeia.es', href: 'mailto:info@pimeia.es' },
  { icon: <Phone aria-hidden="true" />, label: 'Teléfono 24/7', value: '936 943 575', href: 'tel:+34936943575' },
  { icon: <MessageCircle aria-hidden="true" />, label: 'WhatsApp', value: '609 785 645', href: 'https://wa.me/34609785645' },
  { icon: <Clock3 aria-hidden="true" />, label: 'Disponibilidad', value: 'Atención inteligente 24/7', href: null }
];
