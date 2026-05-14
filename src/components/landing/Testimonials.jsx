import { ArrowRight } from 'lucide-react';
import { testimonials } from './landingData.jsx';

export default function Testimonials() {
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
              <img src={item.image} alt={item.name} />
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
