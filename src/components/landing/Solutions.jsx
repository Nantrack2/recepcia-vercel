import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, MessageCircle, CalendarCheck, FileText, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: MessageCircle,
    title: "Agente de Voz IA en Recepción",
    description: "Un recepcionista virtual con voz natural atiende llamadas y consultas de huéspedes las 24 horas, los 7 días de la semana.",
    detail: "Voz natural 24/7"
  },
  {
    icon: Zap,
    title: "Base de Datos Inteligente",
    description: "Gestión automática de reservas, preferencias de huéspedes e historial de estancias con acceso instantáneo.",
    detail: "Acceso instantáneo"
  },
  {
    icon: CalendarCheck,
    title: "Check-in y Check-out Automatizado",
    description: "Proceso de entrada y salida sin esperas, gestionado por IA con validación de identidad y asignación de habitaciones.",
    detail: "0 tiempos de espera"
  },
  {
    icon: FileText,
    title: "Atención al Cliente Omnicanal",
    description: "Un único agente IA responde por teléfono, WhatsApp, email y chat web con coherencia total y tono personalizado.",
    detail: "Todos los canales"
  },
];

const kpis = [
  { value: "80%", label: "de conversión en leads", sub: "con atención instantánea" },
  { value: "15h", label: "ahorro a la semana", sub: "en procesos manuales" },
  { value: "+30%", label: "captación de clientes", sub: "con campañas automatizadas" },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Nuestras Soluciones
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight max-w-2xl">
            Automatiza tu Recepción con RecepcIA
          </h2>
        </motion.div>

        {/* Solution cards */}
        {/* Reception showcase image */}
        <div className="mb-14 rounded-2xl overflow-hidden relative h-64 lg:h-80">
          <img
            src="https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png"
            alt="Recepción de hotel de alto standing automatizada con RecepcIA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
            <p className="font-heading text-2xl text-primary-foreground italic">
              "La recepción que nunca duerme."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-background rounded-2xl p-8 lg:p-10 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 h-full">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <solution.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-lg lg:text-xl text-foreground">{solution.title}</h3>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">{solution.description}</p>
                    <span className="inline-block mt-4 text-xs font-body font-semibold text-accent tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full">
                      {solution.detail}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* KPI Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-foreground text-primary-foreground rounded-2xl p-8 lg:p-10 text-center"
            >
              <span className="font-heading text-5xl lg:text-7xl tracking-tight text-accent">
                {kpi.value}
              </span>
              <p className="font-body text-lg font-medium mt-4">{kpi.label}</p>
              <p className="font-body text-sm opacity-60 mt-1">{kpi.sub}</p>
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
              Quiero estas soluciones
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}