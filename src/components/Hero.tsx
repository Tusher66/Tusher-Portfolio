import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';
import myPic from '../assets/Images/myPic.jpg';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/8801754343120?text=Hi%20Ismail,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!', label: 'WhatsApp' },
    { icon: <FaEnvelope />, href: 'mailto:tusher66@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-12 bg-[#111111] overflow-hidden"
    >
      {/* Background ambient decorative slant like Salimov */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        {/* Left Column: Salimov Geometric / Polygonal Frame Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="salimov-portrait-wrapper group relative">
            <img
              src={myPic}
              alt="Md. Ismail Hossain Tusher"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Shade at bottom of portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            
            {/* Floating Tag */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">Md. Ismail Hossain Tusher</p>
                <p className="text-accent text-xs font-medium">B.Sc. ICE (BAUET) • Software Engineer</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Salimov Typography & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-neutral-400 font-bold text-sm sm:text-base uppercase tracking-widest">
              HI THERE !
            </span>
          </div>

          {/* Bold Name */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-3 font-display">
            I'M <span className="text-accent">ISMAIL TUSHER.</span>
          </h1>

          {/* Typing Role */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-200 mb-6 h-10 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Full-Stack Software Engineer',
                2200,
                'Java Spring Boot Backend Specialist',
                2200,
                'Vue.js & Angular Frontend Architect',
                2200,
                'Published Research Author (BAUET)',
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-neutral-300 font-semibold"
            />
          </div>

          {/* Bio paragraph */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            I'm a Bangladeshi-based software engineer focused on architecting scalable backend systems, resilient microservices, and modern reactive full-stack web applications. Dedicated to building performant and dependable enterprise solutions.
          </p>

          {/* Buttons & Socials Row */}
          <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
            {/* Salimov Signature "MORE ABOUT ME" button */}
            <button
              onClick={scrollToAbout}
              className="salimov-btn"
            >
              <span>MORE ABOUT ME</span>
              <span className="salimov-btn-icon">
                <FaArrowRight className="text-sm" />
              </span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
