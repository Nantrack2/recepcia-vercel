import { ArrowRight } from 'lucide-react';
import { RECEPTION_IMAGE, solutionCards } from './landingData.jsx';

export default function Solutions() {
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
