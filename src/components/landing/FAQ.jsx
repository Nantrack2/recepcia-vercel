import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo lleva implementar estas soluciones?",
    answer: "La implementación típica toma entre 2 y 4 semanas, dependiendo de la complejidad de tu operación. Nuestro equipo se encarga de todo el proceso para que no tengas que preocuparte por la parte técnica."
  },
  {
    question: "¿Qué tipo de soporte recibiré después de la implementación?",
    answer: "Ofrecemos soporte continuo 24/7, con un gestor de cuenta dedicado. Incluye actualizaciones regulares, optimización del rendimiento y capacitación para tu equipo."
  },
  {
    question: "¿Se puede personalizar la herramienta según mis necesidades?",
    answer: "Absolutamente. Cada solución se adapta específicamente a las necesidades de tu hotel, desde el tono de comunicación hasta los flujos de trabajo y las integraciones con tus sistemas actuales."
  },
  {
    question: "¿Cómo se integrará con mi sistema actual?",
    answer: "Nuestra IA se integra con los principales PMS (Property Management Systems) y herramientas de gestión hotelera. Realizamos un análisis de compatibilidad durante la consultoría inicial."
  },
  {
    question: "¿Qué resultados puedo esperar a corto plazo?",
    answer: "La mayoría de nuestros clientes ven un aumento del 30-40% en la conversión de leads durante el primer mes, y una reducción significativa del trabajo manual desde la primera semana."
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            FAQ
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="font-body text-base text-foreground hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contacto">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-body border-foreground/20 hover:bg-foreground/5 group"
            >
              Resolver mis dudas
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}