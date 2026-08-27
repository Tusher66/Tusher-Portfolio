import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'home' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact me', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'header-glass py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching Figma */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1 text-2xl sm:text-3xl font-black tracking-wider text-white hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <span className="text-white">LOG</span>
            <span className="text-orange-accent group-hover:scale-110 inline-block transition-transform">
              O
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm lg:text-base font-medium transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button matching Figma */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-orange-glow px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold tracking-wide cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-800/80 text-white hover:text-orange-accent transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#161616]/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left text-base font-medium py-2 transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'text-orange-accent font-semibold pl-2 border-l-2 border-orange-accent'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="btn-orange-glow w-full mt-3 py-3 rounded-full text-sm font-semibold text-center cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
