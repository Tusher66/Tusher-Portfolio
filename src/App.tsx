import { useState, useEffect, useRef } from 'react';
import NavigationDock from './components/NavigationDock';
import ColorSwitcher from './components/ColorSwitcher';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Wheel translation to Horizontal Scroll on desktop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth >= 1024) {
        // If user is wheeling vertically, translate to horizontal scroll
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY * 1.5,
            behavior: 'auto',
          });
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Track Active Section based on Horizontal or Vertical Scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = ['home', 'about', 'education', 'portfolio', 'contact'];

    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const scrollPos = container.scrollLeft + container.clientWidth / 2;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && scrollPos >= el.offsetLeft) {
            setActiveSection(sections[i]);
            break;
          }
        }
      } else {
        const scrollPos = window.scrollY + 250;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && scrollPos >= el.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-accent selection:text-white overflow-hidden">
      <ScrollProgress />
      <ColorSwitcher />
      <NavigationDock activeSection={activeSection} />

      {/* Main Horizontal Layout Container matching Salimov */}
      <div
        id="horizontal-container"
        ref={containerRef}
        className="horizontal-layout-container"
      >
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>

      <WhatsAppButton />
    </div>
  );
}
