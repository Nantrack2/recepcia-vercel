import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <span>
          Recepc<span>IA</span>
        </span>
      </div>

      <nav>
        <a href="#problemas">Problemas</a>
        <a href="#soluciones">Soluciones</a>
        <a href="#proceso">Proceso</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <p>© 2026 RecepcIA. Todos los derechos reservados.</p>
    </footer>
  );
}
