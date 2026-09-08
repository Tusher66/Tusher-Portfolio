import { useState, useEffect } from 'react';
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
    const container = document.getElementById('horizontal-container');
    if (element && container) {
      if (window.innerWidth >= 1024) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: 'smooth',
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Left-Docked Vertical Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="relative flex items-center justify-start group">
              {/* Circular Dock Button */}
              <button
                onClick={() => scrollTo(item.id)}
                aria-label={item.label}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-base transition-all duration-300 shadow-xl cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white scale-110 shadow-lg'
                    : 'bg-[#252525] text-neutral-300 hover:bg-accent hover:text-white hover:scale-105'
                }`}
              >
                {item.icon}
              </button>

              {/* Expanding Label Tooltip to the Right */}
              <div className="absolute left-14 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform -translate-x-3 group-hover:translate-x-0">
                <span className="bg-accent text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Mobile / Tablet Bottom Dock Bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex lg:hidden bg-[#1e1e1e]/95 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-2xl gap-3 sm:gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer ${
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
