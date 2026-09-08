import { useState, useEffect } from 'react';
import NavigationDock from './components/NavigationDock';
import ColorSwitcher from './components/ColorSwitcher';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'education', 'portfolio', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-accent selection:text-white relative">
      <ScrollProgress />
      <ColorSwitcher />
      <NavigationDock activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
