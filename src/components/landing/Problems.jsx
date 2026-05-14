import { challengeCards } from './landingData.jsx';

export default function Problems() {
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
