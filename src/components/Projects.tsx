import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryType: 'erp' | 'fullstack' | 'backend' | 'automated';
  description: string;
  tech: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { name: 'All', key: 'All' },
    { name: 'Enterprise ERP', key: 'erp' },
    { name: 'Full-Stack Apps', key: 'fullstack' },
    { name: 'Backend & APIs', key: 'backend' },
    { name: 'Automated Systems', key: 'automated' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'RAISE Enterprise ERP',
      category: 'Enterprise ERP',
      categoryType: 'erp',
      description:
        'A comprehensive module-based ERP platform for the Wage Earners’ Welfare Board covering payroll, accounting, HR, reintegration, and financial assistance.',
      tech: ['Java Spring Boot', 'Vue.js 3', 'Tailwind CSS', 'WebSocket'],
      gradient: 'from-amber-600/30 via-orange-950/40 to-neutral-900',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 2,
      title: 'Deeam Car Wash System',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
      description:
        'A modern booking and fleet scheduling application supporting live slot management, real-time push notifications, client chat, and payment approvals.',
      tech: ['Vue.js 3', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
      gradient: 'from-orange-700/30 via-red-950/30 to-neutral-900',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 3,
      title: 'Automated Vehicle Inspection',
      category: 'Automated Systems',
      categoryType: 'automated',
      description:
        'A high-reliability BRTA workflow system coordinating automated robotic device inspections, certificate generation, and inspection logs.',
      tech: ['Spring Boot', 'Oracle SQL', 'JasperReports', 'Angular', 'SVN'],
      gradient: 'from-blue-900/30 via-indigo-950/30 to-neutral-900',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 4,
      title: 'MV Tax Collection & Billing',
      category: 'Backend & APIs',
      categoryType: 'backend',
      description:
        'Secure tax calculation and automated billing system handling millions of driving licence and vehicle registrations across national centers.',
      tech: ['Java Spring Boot', 'PostgreSQL', 'Oracle', 'JDBC', 'Angular'],
      gradient: 'from-emerald-900/30 via-teal-950/30 to-neutral-900',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 5,
      title: 'BRTA Citizen Service Portal',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
      description:
        'National service platform supporting driving licence registration, vehicle fitness appointments, online fee payments, and Jasper reporting.',
      tech: ['Java Spring MVC', 'Oracle', 'JSP', 'JavaScript', 'JasperReports'],
      gradient: 'from-purple-900/30 via-fuchsia-950/30 to-neutral-900',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 6,
      title: 'Undercover Dark Portfolio',
      category: 'Enterprise ERP',
      categoryType: 'erp',
      description:
        'A sleek, high-contrast dark aesthetic portfolio with micro-interactions, smooth scroll, and glowing typography.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-neutral-700/40 via-neutral-900 to-black',
      liveUrl: 'https://github.com/Tusher66',
      githubUrl: 'https://github.com/Tusher66',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categoryType === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-[#111111] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Portfolio
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Selected showcase of enterprise software systems, full-stack applications, and scalable backend architectures.
          </p>
        </motion.div>

        {/* Filter Category Tabs matching Figma buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'btn-orange-glow shadow-md'
                    : 'bg-[#1c1c1c] text-neutral-300 border border-neutral-800 hover:bg-[#252525] hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </motion.div>

        {/* Project Cards Grid matching Figma layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className="figma-card overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Mockup Preview Area */}
                <div
                  className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between border-b border-neutral-800/80 overflow-hidden`}
                >
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-semibold text-orange-accent border border-orange-500/30">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-neutral-300 group-hover:text-orange-accent group-hover:bg-black/80 transition-all">
                      <FaExternalLinkAlt className="text-xs" />
                    </div>
                  </div>

                  {/* Visual mockup stylized card */}
                  <div className="relative z-10 my-auto">
                    <div className="bg-[#181818]/90 backdrop-blur-md border border-neutral-700/60 rounded-xl p-4 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <p className="text-xs font-mono text-neutral-300 truncate">
                        // {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Tech Pills */}
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium bg-black/50 text-neutral-300 px-2 py-0.5 rounded-md border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Meta matching Figma ("Name Project" & "Categories") */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#181818]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-orange-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-semibold text-orange-accent">
                      {project.category}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform text-neutral-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Detail Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] border border-neutral-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 text-lg cursor-pointer"
              >
                ✕
              </button>

              <span className="px-3 py-1 bg-orange-accent/10 border border-orange-accent/30 text-orange-accent text-xs font-semibold rounded-full inline-block mb-3">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#242424] border border-neutral-700 text-neutral-300 text-xs rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-glow flex-1 py-2.5 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <FaGithub /> GitHub Link
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-neutral-800 text-neutral-300 hover:text-white rounded-xl text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
