import Navbar from '../components/landing/Navbar.jsx';
import Hero from '../components/landing/Hero.jsx';
import Problems from '../components/landing/Problems.jsx';
import Solutions from '../components/landing/Solutions.jsx';
import Process from '../components/landing/Process.jsx';
import Testimonials from '../components/landing/Testimonials.jsx';
import Benefits from '../components/landing/Benefits.jsx';
import FAQ from '../components/landing/FAQ.jsx';
import ContactForm from '../components/landing/ContactForm.jsx';
import FinalCTA from '../components/landing/FinalCTA.jsx';
import Footer from '../components/landing/Footer.jsx';

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Process />
        <Testimonials />
        <Benefits />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
