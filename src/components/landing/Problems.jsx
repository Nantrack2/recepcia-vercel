import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Cog, UserX, CalendarX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads sin responder",
    description: "Cada minuto cuenta, puedes perder valiosas oportunidades.",
    solution: "Respuesta automática en segundos con IA"
  },
  {
    icon: Cog,
    title: "Procesos manuales",
    description: "La carga de trabajo innecesaria está afectando tu eficiencia.",
    solution: "Automatización inteligente de tareas repetitivas"
  },
  {
    icon: UserX,
    title: "Falta de seguimiento",
    description: "Las oportunidades que no se siguen se escapan hacia la competencia.",
    solution: "Seguimiento automático personalizado"
  },
  {
    icon: CalendarX,
    title: "No-shows",
    description: "La falta de confirmaciones afecta tu tasa de ocupación.",
    solution: "Confirmaciones y recordatorios automatizados"
  },
];

export default function Problems() {
  return (
    <section id="problemas" className="py-24 lg:py-32">
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
            El Desafío
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            ¿Cuáles son los desafíos que enfrentas?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-foreground text-primary-foreground rounded-2xl p-8 transition-all duration-500 group-hover:bg-card group-hover:text-foreground group-hover:shadow-xl group-hover:shadow-accent/5 overflow-hidden">
                {/* Hover reveal overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <problem.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="font-heading text-xl mb-3">{problem.title}</h3>
                  <p className="font-body text-sm leading-relaxed opacity-70 group-hover:opacity-60">
                    {problem.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-current/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-body text-sm font-medium text-accent">
                      {problem.solution}
                    </p>
                  </div>
                </div>
              </div>
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body"
            >
              Resolver estos problemas
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}