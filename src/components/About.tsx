import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const stats = [
  { label: 'Years Experience', value: '3+', icon: '🚀' },
  { label: 'Projects Completed', value: '15+', icon: '💼' },
  { label: 'Technologies', value: '20+', icon: '⚡' },
  { label: 'CGPA', value: '3.54', icon: '🎓' },
];

const highlights = [
  { icon: <FaServer className="text-indigo-400" />, title: 'Backend', desc: 'Java Spring Boot, REST APIs, Microservices' },
  { icon: <FaCode className="text-purple-400" />, title: 'Frontend', desc: 'VueJS, React, Nuxt.js, Tailwind CSS' },
  { icon: <FaDatabase className="text-cyan-400" />, title: 'Database', desc: 'MySQL, PostgreSQL, MongoDB, Redis' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            01. About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">seasoned full-stack software engineer</span> —
                a Java Spring Boot backend wizard, a VueJS frontend coder, and a quick learner
                who can adapt to any new tech.
              </p>
              <p>
                Through my time at various significant projects with <span className="text-indigo-400 font-semibold">3+ years of experience</span>, 
                I have gained hands-on experience in industry-standard development and problem solving, 
                which I'm looking to apply and grow together with your team.
              </p>
              <p>
                My engineering background from <span className="text-purple-400 font-semibold">BAUET</span> in 
                Information and Communication Engineering has given me a strong foundation in both 
                software architecture and efficient algorithm design.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              {[
                { icon: <FaEnvelope className="text-indigo-400" />, label: 'Email', value: 'tusher66@gmail.com', href: 'mailto:tusher66@gmail.com' },
                { icon: <FaPhone className="text-green-400" />, label: 'Phone', value: '+8801754343120', href: 'tel:+8801754343120' },
                { icon: <FaMapMarkerAlt className="text-red-400" />, label: 'Location', value: 'Nmapara, Khilkhet, Dhaka', href: null },
                { icon: <FaGithub className="text-gray-300" />, label: 'GitHub', value: 'github.com/Tusher66', href: 'https://github.com/Tusher66' },
                { icon: <FaLinkedin className="text-blue-400" />, label: 'LinkedIn', value: 'ismail-hossain-tusher', href: 'https://www.linkedin.com/in/ismail-hossain-tusher' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
                >
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <span className="text-gray-500 text-sm sm:w-16">{item.label}:</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-400 transition-colors text-sm break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm break-words">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card p-5 text-center hover:border-indigo-500/30 transition-all"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="glass-card p-4 flex items-center gap-4 hover:border-indigo-500/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-4 font-mono text-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-600 text-xs ml-2">profile.json</span>
              </div>
              <pre className="text-xs leading-relaxed overflow-x-auto">
                <span className="text-gray-600">{'{'}</span>{'\n'}
                {'  '}<span className="text-indigo-300">"name"</span><span className="text-gray-600">:</span>{' '}
                <span className="text-green-300">"Ismail Hossain Tusher"</span><span className="text-gray-600">,</span>{'\n'}
                {'  '}<span className="text-indigo-300">"role"</span><span className="text-gray-600">:</span>{' '}
                <span className="text-green-300">"Full-Stack Engineer"</span><span className="text-gray-600">,</span>{'\n'}
                {'  '}<span className="text-indigo-300">"exp"</span><span className="text-gray-600">:</span>{' '}
                <span className="text-orange-300">"3+ years"</span><span className="text-gray-600">,</span>{'\n'}
                {'  '}<span className="text-indigo-300">"status"</span><span className="text-gray-600">:</span>{' '}
                <span className="text-cyan-300">"available"</span>{'\n'}
                <span className="text-gray-600">{'}'}</span>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
