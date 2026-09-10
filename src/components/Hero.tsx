import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';
import myPicture from '../assets/Images/myPicture.png';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    const container = document.getElementById('horizontal-container');
    if (element && container) {
      if (window.innerWidth >= 1024) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: 'smooth',
        });
      } else {
        container.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      className="horizontal-section-panel bg-[#111111]"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Larger Cutout Portrait with Title Badge Below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          {/* Larger Floating Cutout Portrait */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] flex items-center justify-center z-10">
            <img
              src={myPicture}
              alt="Md. Ismail Hossain Tusher"
              className="w-full h-auto max-h-[58vh] sm:max-h-[64vh] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] filter hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Title Info Card Below Picture */}
          <div className="mt-3 w-full max-w-[320px] sm:max-w-[380px] bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between shadow-2xl z-10">
            <div>
              <p className="text-white font-bold text-sm sm:text-base leading-tight">
                Md. Ismail Hossain Tusher
              </p>
              <p className="text-accent text-xs font-semibold mt-0.5">
                B.Sc. ICE (BAUET) • Software Engineer
              </p>
            </div>
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
          </div>
        </motion.div>

        {/* Right Column: Salimov Typography & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-neutral-400 font-bold text-xs sm:text-sm uppercase tracking-widest">
              HI THERE !
            </span>
          </div>

          {/* Bold Name */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-2 font-display">
            I'M <span className="text-accent">ISMAIL HOSSAIN TUSHER.</span>
          </h1>

          {/* Typing Role */}
          <div className="text-lg sm:text-2xl font-extrabold text-neutral-200 mb-5 min-h-[36px] flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Full-Stack Software Engineer',
                2200,
                'Vue.js & Angular Frontend Architect',
                2200,
                'Java Spring Boot Backend Developer',
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
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mb-7">
            I'm a Bangladeshi-based software engineer focused on architecting scalable backend systems, resilient microservices, and modern reactive full-stack web applications. Dedicated to building performant and dependable enterprise solutions.
          </p>

          {/* Buttons & Socials Row */}
          <div className="flex flex-wrap items-center gap-5 justify-center lg:justify-start">
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
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-md"
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
