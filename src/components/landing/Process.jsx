import { ArrowRight } from 'lucide-react';
import { DETAIL_IMAGE, processSteps } from './landingData.jsx';

export default function Process() {
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
