import React from 'react';

export default function Footer() {
  return (
    <footer className="py-14 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-7">
          <a
            href="#"
            className="flex items-center gap-1 font-heading tracking-tight text-foreground"
            aria-label="RecepcIA inicio"
          >
            <img
              src="https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/fd0ec941b_Logo_RecepcIA_Sense_fons.png"
              alt="RecepcIA logo"
              className="h-20 w-20 md:h-22 md:w-22 lg:h-24 lg:w-24 object-contain"
            />

            <span className="text-3xl md:text-4xl leading-none -ml-2">
              <span className="text-foreground">Recepc</span>
              <span className="text-accent">IA</span>
            </span>
          </a>

          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a href="#soluciones" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Soluciones
            </a>
            <a href="#proceso" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contacto" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          <p className="font-body text-sm text-muted-foreground text-center">
            © 2026 RecepcIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}