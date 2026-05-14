import { ArrowRight } from 'lucide-react';
import { benefits } from './landingData.jsx';

export default function Benefits() {
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
