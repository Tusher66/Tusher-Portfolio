import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaDownload,
  FaPaperPlane,
} from 'react-icons/fa';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaBehance />, href: 'https://behance.net', label: 'Behance' },
    { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#111111]"
    >
      {/* Ambient background glow matching Figma */}
      <div className="hero-glow-bg" />
      <div className="hero-glow-bg-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-400 text-lg sm:text-xl font-medium mb-1 tracking-wide"
            >
              Hi I am
            </motion.p>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-200 mb-2 tracking-tight"
            >
              Md. Ismail Hossain Tusher
            </motion.h2>

            {/* Big Main Highlight Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 min-h-[60px] sm:min-h-[80px]"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-orange-accent leading-none">
                <TypeAnimation
                  sequence={[
                    'UI/UX designer',
                    2500,
                    'Full-Stack Dev',
                    2500,
                    'Software Engineer',
                    2500,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </h1>
            </motion.div>

            {/* Subtitle / Bio summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-400 text-sm sm:text-base max-w-xl mb-8 leading-relaxed"
            >
              Designing intuitive digital interfaces and engineering high-performance, scalable web systems. Passionate about building seamless user experiences with modern architecture.
            </motion.p>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3.5 sm:gap-4 mb-9 flex-wrap justify-center lg:justify-start"
            >
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
            </motion.div>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="btn-orange-glow px-8 py-3.5 rounded-full text-base font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <span>Hire Me</span>
                <FaPaperPlane className="text-xs opacity-90" />
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#1e1e1e] border border-neutral-700 hover:border-orange-accent hover:bg-[#252525] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Download CV</span>
                <FaDownload className="text-xs text-orange-accent" />
              </button>
            </motion.div>

            {/* Experience / Projects Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-neutral-800/80 w-full max-w-lg"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-orange-accent">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual / Portrait Column matching Figma layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-[300px] h-[360px] sm:w-[380px] sm:h-[460px] lg:w-[420px] lg:h-[500px]">
              {/* Background Circular Arc & Halo matching Figma */}
              <div className="absolute inset-x-4 bottom-0 top-12 bg-gradient-to-t from-[#161616] to-[#222222] rounded-t-full border border-neutral-800/80 overflow-hidden shadow-2xl">
                {/* Subtle Orange Glow Ring */}
                <div className="absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Orange Arc Behind Profile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-dashed border-orange-500/30 pointer-events-none"
              />

              {/* Portrait Visual Representation */}
              <div className="absolute inset-0 flex items-end justify-center overflow-hidden pb-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Stylized Silhouette & Avatar */}
                  <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 flex flex-col items-center justify-center">
                    <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-2 border-orange-500/40 p-2 shadow-2xl flex items-center justify-center relative group">
                      <div className="w-full h-full rounded-full bg-[#171717] flex flex-col items-center justify-center text-center overflow-hidden relative">
                        <svg
                          className="w-32 h-32 sm:w-40 sm:h-40 text-neutral-300 transform translate-y-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <div className="absolute bottom-3 bg-orange-accent/90 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md">
                          Ismail Tusher
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tool Badges matching Figma aesthetic */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 -left-4 sm:-left-6 px-3.5 py-2 bg-[#1c1c1c]/90 border border-orange-500/30 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
              >
                <span className="w-3 h-3 rounded-full bg-orange-accent animate-pulse" />
                <span className="text-xs font-semibold text-white">UI/UX & Code</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-12 -right-4 sm:-right-6 px-4 py-2.5 bg-[#1c1c1c]/90 border border-neutral-700 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 z-20"
              >
                <span className="text-orange-accent font-bold text-sm">Spring + Vue</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
