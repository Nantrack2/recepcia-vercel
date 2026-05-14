import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROCESS_IMAGE = "https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/03f6fcb02_generated_bf30ebd9.png";

const steps = [
  {
    number: "01",
    title: "Consultoría gratuita",
    description: "Entendemos tus necesidades específicas y los desafíos de tu hotel."
  },
  {
    number: "02",
    title: "Implementación IA",
    description: "Configuramos e implementamos la solución de IA personalizada en tu negocio."
  },
  {
    number: "03",
    title: "Resultados",
    description: "Obtén resultados medibles en tan solo pocas semanas."
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={PROCESS_IMAGE}
                alt="Detalle de lujo - pluma dorada sobre papel"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-accent" />
                El Proceso
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-12">
                Así de fácil es comenzar
              </h2>
            </motion.div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-6 group"
                >
                  <span className="font-heading text-4xl lg:text-5xl text-accent/30 group-hover:text-accent transition-colors duration-300 shrink-0">
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <a href="#contacto">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body group"
                >
                  Agendar consultoría
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}