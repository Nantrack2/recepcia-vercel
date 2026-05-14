import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Problemas", href: "#problemas" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-24" : "h-28"
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-1 font-heading tracking-tight text-foreground"
            aria-label="RecepcIA inicio"
          >
            <img
              src="https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/fd0ec941b_Logo_RecepcIA_Sense_fons.png"
              alt="RecepcIA logo"
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-26 lg:w-26 object-contain"
            />

            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-none -ml-1">
              <span className="text-foreground font-normal">Recepc</span>
              <span className="text-accent font-normal">IA</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contacto">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm px-7 py-5 rounded-full">
                Agendar Demo
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            type="button"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-body text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}

              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground rounded-full mt-2">
                  Agendar Demo
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}