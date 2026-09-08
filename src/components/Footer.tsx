import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaWhatsapp,
} from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About me', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact me', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaBehance />, href: 'https://behance.net', label: 'Behance' },
    { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#0e0e0e] text-white pt-16 pb-12 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="mb-8 cursor-pointer bg-transparent border-0 p-0 text-left"
          aria-label="Back to home"
        >
          <Logo />
        </button>

        {/* Navigation Links matching Figma */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-neutral-300 hover:text-orange-accent text-sm sm:text-base font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Social Circular Icon Buttons matching Figma */}
        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-icon-btn"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Direct Contact Info (Email, WhatsApp & Phone) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-neutral-300 text-sm mb-10">
          <a
            href="mailto:tusher66@gmail.com"
            className="flex items-center gap-2.5 hover:text-orange-accent transition-colors"
          >
            <FaEnvelope className="text-orange-accent text-base" />
            <span>tusher66@gmail.com</span>
          </a>

          <a
            href="https://wa.me/8801754343120?text=Hi%20Ismail,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <FaWhatsapp className="text-emerald-400 text-lg" />
            <span>WhatsApp (+880 1754-343120)</span>
          </a>

          <a
            href="tel:+8801754343120"
            className="flex items-center gap-2.5 hover:text-orange-accent transition-colors"
          >
            <FaPhoneAlt className="text-orange-accent text-sm" />
            <span>+880 1754 343120</span>
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-neutral-800/80 mb-8" />

        {/* Copyright & Attribution matching Figma */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-neutral-400 gap-4">
          <p>
            © {new Date().getFullYear()} <span className="text-orange-accent font-semibold">Md. Ismail Hossain Tusher</span> — Full-Stack Software Engineer
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-accent transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}
