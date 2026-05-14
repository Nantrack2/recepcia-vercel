import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Problems from '../components/landing/Problems';
import Solutions from '../components/landing/Solutions';
import Process from '../components/landing/Process';
import Testimonials from '../components/landing/Testimonials';
import Benefits from '../components/landing/Benefits';
import FAQ from '../components/landing/FAQ';
import ContactForm from '../components/landing/ContactForm';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <Process />
      <Testimonials />
      <Benefits />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}