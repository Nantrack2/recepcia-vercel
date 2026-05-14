import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="hidden lg:block absolute top-1/2 left-[43%] -translate-x-1/2 -translate-y-1/2 w-px h-44 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 xl:gap-20 items-center">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-accent" />
              Contacto
            </span>

            <h3 className="font-heading text-3xl sm:text-4xl text-primary-foreground tracking-tight leading-tight mb-8">
              Hablemos de tu recepción
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:info@pimeia.es"
                className="group flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </span>
                <span>
                  <span className="block font-body text-sm text-primary-foreground/50">
                    Email
                  </span>
                  <span className="block font-body text-lg text-primary-foreground group-hover:text-accent transition-colors">
                    info@pimeia.es
                  </span>
                </span>
              </a>

              <a
                href="tel:+34936943575"
                className="group flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </span>
                <span>
                  <span className="block font-body text-sm text-primary-foreground/50">
                    Teléfono 24/7
                  </span>
                  <span className="block font-body text-lg text-primary-foreground group-hover:text-accent transition-colors">
                    936 943 575
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/34609785645"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </span>
                <span>
                  <span className="block font-body text-sm text-primary-foreground/50">
                    WhatsApp
                  </span>
                  <span className="block font-body text-lg text-primary-foreground group-hover:text-accent transition-colors">
                    609 785 645
                  </span>
                </span>
              </a>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-left lg:pl-8"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-tight">
              Toma el Control de tu{" "}
              <span className="italic text-accent">Futuro</span>
            </h2>

            <p className="font-body text-lg text-primary-foreground/60 mt-6 max-w-xl leading-relaxed">
              No dejes que la falta de tecnología limite tu crecimiento. La inteligencia artificial está transformando la industria hotelera.
            </p>

            <div className="mt-12">
              <a href="#contacto">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 py-7 text-lg font-body group"
                >
                  Agendar mi demo gratuita
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}