import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured multi-vendor e-commerce platform with product management, order tracking, payment gateway integration (SSLCommerz/bKash), and admin dashboard built with Spring Boot microservices.',
    tech: ['Java', 'Spring Boot', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500/30',
    icon: '🛒',
    tags: ['Backend', 'Frontend', 'Microservices'],
    featured: true,
  },
  {
    title: 'Hospital Management System',
    description:
      'Comprehensive hospital management solution featuring patient registration, appointment scheduling, doctor management, prescription tracking, and billing module with role-based access control.',
    tech: ['Java', 'Spring Boot', 'Nuxt.js', 'PostgreSQL', 'JWT', 'Spring Security'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    icon: '🏥',
    tags: ['Full-Stack', 'Healthcare', 'Security'],
    featured: true,
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'WebSocket-powered real-time messaging app with private/group chats, file sharing, read receipts, online status indicators, and push notification support.',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'Vue.js', 'MongoDB', 'Redis'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500/30',
    icon: '💬',
    tags: ['Real-Time', 'WebSocket', 'Chat'],
    featured: true,
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Trello-like project management tool with drag-and-drop boards, task assignments, deadline tracking, team collaboration features, and comprehensive analytics dashboard.',
    tech: ['Vue.js', 'Nuxt.js', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-500/30',
    icon: '📋',
    tags: ['Productivity', 'Dashboard', 'Collaboration'],
    featured: false,
  },
  {
    title: 'Inventory Management System',
    description:
      'Enterprise inventory tracking system with barcode scanning support, automated stock alerts, purchase order management, supplier database, and detailed reporting.',
    tech: ['Java', 'Spring Boot', 'Vue.js', 'MySQL', 'JasperReports'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30',
    icon: '📦',
    tags: ['Enterprise', 'Inventory', 'Reports'],
    featured: false,
  },
  {
    title: 'API Gateway & Auth Service',
    description:
      'Centralized API gateway with JWT authentication, OAuth2 integration, rate limiting, request routing to microservices, and comprehensive logging/monitoring.',
    tech: ['Java', 'Spring Cloud', 'Spring Security', 'Redis', 'Docker', 'Kubernetes'],
    github: 'https://github.com/Tusher66',
    live: null,
    color: 'from-yellow-500 to-orange-600',
    borderColor: 'border-yellow-500/30',
    icon: '🔐',
    tags: ['Microservices', 'Security', 'DevOps'],
    featured: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative bg-[#080810]">
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
            04. Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of projects I've built — from full-stack web apps to enterprise systems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`glass-card border ${project.borderColor} overflow-hidden group hover:shadow-2xl transition-all duration-300`}
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                {/* Icon & Tags */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center text-3xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400 font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </motion.a>
                  )}
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${project.color} text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm font-mono tracking-widest uppercase mb-6"
        >
          Other Notable Projects
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card border ${project.borderColor} p-5 group hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{project.icon}</span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
              <h4 className="text-white font-semibold text-base mb-2">{project.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs text-gray-500 font-mono">
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Tusher66"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-indigo-500/40 rounded-full text-indigo-300 font-semibold hover:bg-indigo-500/10 hover:border-indigo-400 transition-all"
          >
            <FaGithub className="text-xl" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
