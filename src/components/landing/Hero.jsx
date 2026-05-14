import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/2ecc67a6b_generated_0e00bcdf.png";
const RECEPTION_IMAGE = "https://media.base44.com/images/public/6a0199cf8fb5d6b97d254986/bcbf18578_generated_image.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={RECEPTION_IMAGE}
          alt="Recepción de hotel de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      {/* Golden thread decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-accent" />
              Automatización de Recepciones Hoteleras
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight tracking-tight"
          >
            ¿Pierdes clientes por falta de{" "}
            <span className="italic text-accent">automatización</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg text-muted-foreground mt-8 max-w-lg leading-relaxed"
          >
            Automatiza tu recepción con agentes de voz IA, bases de datos inteligentes y atención al cliente 24/7, sin intervención humana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body group"
              >
                Agendar demo gratuita
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#soluciones">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-body border-foreground/20 hover:bg-foreground/5"
              >
                Conocer soluciones
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center gap-8 text-sm font-body text-muted-foreground"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-heading text-foreground">80%</span>
              <span>conversión de leads</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-heading text-foreground">15h</span>
              <span>ahorro semanal</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-heading text-foreground">24/7</span>
              <span>atención IA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}