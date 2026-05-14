import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-tight">
            Toma el Control de tu{" "}
            <span className="italic text-accent">Futuro</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/60 mt-6 max-w-xl mx-auto leading-relaxed">
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
    </section>
  );
}