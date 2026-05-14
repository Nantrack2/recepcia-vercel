import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { navItems } from './landingData.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="RecepcIA inicio" onClick={closeMenu}>
          <Logo />
          <span>
            Recepc<span>IA</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contacto">
          Agendar Demo
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contacto" onClick={closeMenu}>
            Agendar demo gratuita
          </a>
        </nav>
      )}
    </header>
  );
}
