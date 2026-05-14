import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Hemos aumentado nuestras conversiones en un 40%. ¡RecepcIA es una inversión que vale la pena!",
    name: "María Rodríguez",
    role: "Directora, Hotel Boutique Las Palmas",
    image: "https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/6a679fdab_generated_c5cbb993.png"
  },
  {
    quote: "Ahorro 15 horas a la semana gracias a la automatización. ¡Recomiendo RecepcIA sin dudarlo!",
    name: "Carlos Mendoza",
    role: "Propietario, Resort Vista Mar",
    image: "https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/a01349546_generated_f36ce7c8.png"
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden py-24 lg:py-32 bg-background"
    >
      {/* Imagen de fondo elegante, visible y suavemente difuminada */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-105 bg-center bg-cover blur-[3px] opacity-75"
          style={{ backgroundImage: "url('/testimonials-bg.png')" }}
        />

        {/* Overlay suave para mantener lectura sin borrar la imagen */}
        <div className="absolute inset-0 bg-background/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/62 via-background/20 to-background/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Testimonios
            <span className="w-8 h-px bg-accent" />
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight drop-shadow-sm">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl p-8 lg:p-10 border border-white/55 bg-white/34 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.18)] ring-1 ring-white/35"
            >
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent drop-shadow-sm" />
                ))}
              </div>

              <p className="font-body text-foreground text-lg leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/70 shadow-sm"
                />
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-foreground/75">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body group shadow-lg shadow-primary/15"
            >
              Quiero resultados así
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}