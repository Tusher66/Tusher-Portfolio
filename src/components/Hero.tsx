import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaArrowDown } from 'react-icons/fa';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] bg-grid"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob"
          style={{ filter: 'blur(80px)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob-delay"
          style={{ filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl animate-blob"
          style={{ filter: 'blur(60px)', animationDelay: '4s' }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full max-w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] sm:leading-tight mb-3 sm:mb-4 break-words"
            >
              Md. Ismail
              <br />
              <span className="gradient-text">Hossain Tusher</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-2xl text-gray-400 font-medium mb-5 sm:mb-6 min-h-[2.5rem] sm:h-10"
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Software Engineer',
                  2000,
                  'Java Spring Boot Developer',
                  2000,
                  'VueJS Frontend Specialist',
                  2000,
                  'Problem Solver & Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-300 font-mono"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8"
            >
              A seasoned full-stack engineer with <span className="text-indigo-400 font-semibold">3+ years of experience</span>,
              building scalable backend systems with Java Spring Boot and crafting elegant UIs with VueJS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <Link to="projects" smooth={true} offset={-80} duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base cursor-pointer transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} offset={-80} duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-indigo-500/40 text-indigo-300 font-semibold text-sm sm:text-base cursor-pointer hover:bg-indigo-500/10 hover:border-indigo-400 transition-all flex items-center justify-center gap-2"
                >
                  <FaDownload className="text-sm" />
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
                { icon: <FaEnvelope />, href: 'mailto:tusher66@gmail.com', label: 'Email' },
                { icon: <FaPhone />, href: 'tel:+8801754343120', label: 'Phone' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-base sm:text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
              <div className="ml-1 sm:ml-2 text-gray-600 text-xs sm:text-sm hidden sm:flex items-center gap-2">
                <div className="h-px w-8 bg-gray-700" />
                <span className="text-gray-500">Dhaka, BD</span>
              </div>
            </motion.div>
          </div>

          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative flex-shrink-0 mx-auto lg:mx-0"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
              style={{ margin: '-16px' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-purple-500/20"
              style={{ margin: '-32px' }}
            />

            {/* Profile Image Container */}
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-600/20 animate-pulse-glow" />

              {/* Avatar with initials */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-indigo-500/30 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-7xl lg:text-8xl font-black gradient-text font-mono select-none">
                    IHT
                  </div>
                  <div className="text-indigo-400/60 text-[10px] sm:text-xs font-mono mt-2 tracking-widest">
                    FULL-STACK
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-2 py-1 sm:px-3 sm:py-1.5 bg-[#1a1a2e] border border-indigo-500/40 rounded-full text-[10px] sm:text-xs font-mono text-indigo-300 shadow-lg shadow-indigo-500/20"
              >
                ☕ Spring Boot
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-4 sm:-bottom-2 sm:-left-6 px-2 py-1 sm:px-3 sm:py-1.5 bg-[#1a1a2e] border border-green-500/40 rounded-full text-[10px] sm:text-xs font-mono text-green-300 shadow-lg shadow-green-500/20"
              >
                💚 Vue.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:block absolute top-1/2 -right-8 px-3 py-1.5 bg-[#1a1a2e] border border-orange-500/40 rounded-full text-xs font-mono text-orange-300 shadow-lg shadow-orange-500/20"
              >
                ⚡ 3+ Years
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12 pb-8"
        >
          <Link to="about" smooth={true} offset={-80} duration={600}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 cursor-pointer transition-colors"
            >
              <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
              <FaArrowDown className="text-lg" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
