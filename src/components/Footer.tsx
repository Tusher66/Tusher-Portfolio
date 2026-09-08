import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'education' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/8801754343120', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#0c0c0c] text-white pt-14 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="mb-6 cursor-pointer bg-transparent border-0 p-0 text-left"
          aria-label="Back to home"
        >
          <Logo />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-neutral-400 hover:text-accent text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Social Circular Icon Buttons */}
        <div className="flex items-center gap-3 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-md"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Direct Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-400 text-xs sm:text-sm mb-8">
          <a
            href="mailto:tusher66@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FaEnvelope className="text-accent text-sm" />
            <span>tusher66@gmail.com</span>
          </a>

          <a
            href="https://wa.me/8801754343120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <FaWhatsapp className="text-emerald-400 text-base" />
            <span>WhatsApp (+880 1754-343120)</span>
          </a>

          <a
            href="tel:+8801754343120"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FaPhoneAlt className="text-accent text-xs" />
            <span>+880 1754 343120</span>
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-neutral-400 gap-4">
          <p>
            © {new Date().getFullYear()} <span className="text-accent font-semibold">Md. Ismail Hossain Tusher</span> — Full-Stack Software Engineer
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}
