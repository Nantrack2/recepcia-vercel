import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
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
