import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Timer, Headphones, Target, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento de Reservas",
    description: "Captación de clientes optimizada con inteligencia artificial."
  },
  {
    icon: Timer,
    title: "Menos Trabajo Manual",
    description: "Automatización que te libera tiempo para lo que realmente importa."
  },
  {
    icon: Headphones,
    title: "Mejora en la Comunicación",
    description: "Respuestas 24/7 a potenciales huéspedes sin intervención humana."
  },
  {
    icon: Target,
    title: "Seguimiento Efectivo",
    description: "Conversión de leads asegurada con seguimiento inteligente."
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Beneficios
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            ¿Qué lograrás con RecepcIA?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{benefit.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body group"
            >
              Comenzar ahora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}