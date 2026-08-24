import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm font-mono">
                IT
              </div>
              <span className="font-bold text-white text-lg">
                Ismail<span className="gradient-text">Tusher</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Software Engineer specializing in Java Spring Boot and VueJS. 
              Building scalable, industry-standard applications.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
                { icon: <FaEnvelope />, href: 'mailto:tusher66@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  className="text-gray-500 hover:text-indigo-400 text-sm transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:tusher66@gmail.com"
                className="block text-gray-500 hover:text-indigo-400 text-sm transition-colors"
              >
                📧 tusher66@gmail.com
              </a>
              <a
                href="tel:+8801754343120"
                className="block text-gray-500 hover:text-green-400 text-sm transition-colors"
              >
                📱 +880 1754-343120
              </a>
              <p className="text-gray-500 text-sm">
                📍 Nmapara, Khilkhet, Dhaka
              </p>
              <p className="text-gray-500 text-sm">
                🇧🇩 Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Md. Ismail Hossain Tusher. Made with
            <FaHeart className="text-red-500 text-xs" />
            in Dhaka, Bangladesh
          </p>
          <p className="text-gray-700 text-xs font-mono">
            Built with React + Vite + Tailwind CSS
          </p>

          {/* Back to Top */}
          <Link to="hero" smooth={true} duration={600}>
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
