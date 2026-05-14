import { ArrowRight, ChevronDown } from 'lucide-react';
import { faqs } from './landingData.jsx';

export default function FAQ() {
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
