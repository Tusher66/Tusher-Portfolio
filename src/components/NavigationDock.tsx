import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
} from 'react-icons/fa';

interface NavigationDockProps {
  activeSection: string;
}

export default function NavigationDock({ activeSection = 'home' }: NavigationDockProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'education', label: 'Resume', icon: <FaGraduationCap /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = isMobile ? -20 : -40;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Right-Docked Vertical Navigation (Salimov Signature) */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="relative flex items-center justify-end group">
              {/* Expanding Label Tooltip */}
              <div className="absolute right-14 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-x-3 group-hover:translate-x-0">
                <span className="bg-accent text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
                  {item.label}
                </span>
              </div>

              {/* Circular Dock Button */}
              <button
                onClick={() => scrollTo(item.id)}
                aria-label={item.label}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 shadow-xl cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white scale-110 shadow-lg'
                    : 'bg-[#2b2b2b] text-neutral-300 hover:bg-accent hover:text-white hover:scale-105'
                }`}
              >
                {item.icon}
              </button>
            </div>
          );
        })}
      </nav>

      {/* Mobile / Tablet Bottom Dock Bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-full shadow-2xl gap-3 sm:gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer ${
                isActive
                  ? 'bg-accent text-white scale-110 shadow-md'
                  : 'bg-[#2b2b2b] text-neutral-400 hover:text-white'
              }`}
            >
              {item.icon}
            </button>
          );
        })}
      </nav>
    </>
  );
}
