import { ArrowRight } from 'lucide-react';
import { RECEPTION_IMAGE } from './landingData.jsx';

export default function Hero() {
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
