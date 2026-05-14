import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business_name: "",
    message: "",
    consent_rgpd: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg("Por favor, completa al menos tu nombre y tu email.");
      return;
    }

    if (!formData.consent_rgpd) {
      setErrorMsg("Debes aceptar el tratamiento de datos para enviar la solicitud.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business_name: formData.business_name,
      message: formData.message,

      // Campos principales
      consent_rgpd: formData.consent_rgpd,
      honeypot: formData.honeypot,

      // Compatibilidad con el backend actual de Vercel
      consent: formData.consent_rgpd,
      website: formData.honeypot,

      // Contexto técnico
      page_url: window.location.href,
      user_agent: navigator.userAgent,
    };

    try {
      const res = await fetch("/api/recepcia-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(
          data.error ||
            "No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta directamente."
        );
      }

      setIsSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        business_name: "",
        message: "",
        consent_rgpd: false,
        honeypot: "",
      });
    } catch (error) {
      setErrorMsg(
        error.message || "No hemos podido enviar la solicitud. Inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
              ¡Solicitud enviada!
            </h2>

            <p className="font-body text-muted-foreground text-lg">
              Te contactaremos pronto para preparar la demo.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 lg:py-32">
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
            Contacto
            <span className="w-8 h-px bg-accent" />
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Listo para Automatizar tu Negocio
          </h2>

          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Completa el formulario y un especialista se pondrá en contacto contigo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
          noValidate
        >
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="+34 600 000 000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground">
                Nombre del negocio
              </label>
              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 font-body text-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="Hotel / Resort"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body text-sm text-muted-foreground">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-3 font-body text-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
              placeholder="Cuéntanos sobre tu hotel y qué te gustaría automatizar..."
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent_rgpd"
              name="consent_rgpd"
              required
              checked={formData.consent_rgpd}
              onChange={handleChange}
              className="mt-1 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
            />

            <label
              htmlFor="consent_rgpd"
              className="font-body text-sm text-muted-foreground cursor-pointer leading-relaxed"
            >
              Acepto que <strong>RecepcIA / PimeIA</strong> trate mis datos para contactar conmigo sobre mi solicitud.{" "}
              <span className="text-foreground/50 text-xs">
                Campo obligatorio
              </span>
            </label>
          </div>

          {errorMsg && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-destructive">{errorMsg}</p>
            </div>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-body group disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  Quiero automatizar mi negocio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}