import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryType: 'erp' | 'fullstack' | 'backend' | 'automated';
  client: string;
  duration: string;
  description: string;
  tech: string[];
  gradient: string;
  githubUrl: string;
  liveUrl?: string;
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
      client: 'Wage Earners’ Welfare Board (WEWB)',
      duration: '8 Months',
      description:
        'A comprehensive module-based ERP platform for the Wage Earners’ Welfare Board covering payroll, accounting, HR, reintegration assistance, and multi-tier financial approvals.',
      tech: ['Java Spring Boot', 'Vue.js 3', 'Tailwind CSS', 'WebSocket', 'MySQL'],
      gradient: 'from-amber-600/30 via-neutral-900 to-black',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 2,
      title: 'Deeam Car Wash System',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
      client: 'Deeam Auto Services',
      duration: '4 Months',
      description:
        'A modern booking and fleet scheduling application supporting live slot management, real-time push notifications, client chat, and payment gateway verification.',
      tech: ['Vue.js 3', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker'],
      gradient: 'from-orange-700/30 via-neutral-900 to-black',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 3,
      title: 'Automated Vehicle Inspection',
      category: 'Automated Systems',
      categoryType: 'automated',
      client: 'BRTA Government Project',
      duration: '6 Months',
      description:
        'A high-reliability BRTA workflow system coordinating automated robotic device inspections, vehicle fitness certification, and real-time audit logging.',
      tech: ['Spring Boot', 'Oracle SQL', 'JasperReports', 'Angular', 'SVN'],
      gradient: 'from-blue-900/30 via-neutral-900 to-black',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 4,
      title: 'MV Tax Collection & Billing',
      category: 'Backend & APIs',
      categoryType: 'backend',
      client: 'National Transport Authority',
      duration: '5 Months',
      description:
        'High-security tax calculation and automated billing system handling millions of driving licence and vehicle registrations across national test centers.',
      tech: ['Java Spring Boot', 'PostgreSQL', 'Oracle', 'JDBC', 'Angular'],
      gradient: 'from-emerald-900/30 via-neutral-900 to-black',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 5,
      title: 'BRTA Citizen Service Portal',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
      client: 'BRTA Citizen Services',
      duration: '6 Months',
      description:
        'National service platform supporting driving licence registration, vehicle fitness appointments, online fee payments, and automated report generation.',
      tech: ['Java Spring MVC', 'Oracle', 'JSP', 'JavaScript', 'JasperReports'],
      gradient: 'from-purple-900/30 via-neutral-900 to-black',
      githubUrl: 'https://github.com/Tusher66',
    },
    {
      id: 6,
      title: 'Undercover Dark Portfolio',
      category: 'Enterprise ERP',
      categoryType: 'erp',
      client: 'Personal Project',
      duration: '1 Month',
      description:
        'A sleek, high-contrast dark aesthetic portfolio featuring dynamic theme color switching, smooth animations, and interactive modal dialogs.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vite'],
      gradient: 'from-neutral-700/30 via-neutral-900 to-black',
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
        {/* Salimov Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">WORKS</span>
          <h2 className="salimov-heading">
            MY <span className="text-accent">PORTFOLIO</span>
          </h2>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-[#252525] text-neutral-300 hover:text-white hover:bg-[#2e2e2e]'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className="salimov-card overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Visual Preview Area */}
                <div
                  className={`relative h-60 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between border-b border-white/5 overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-bold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all">
                      <FaExternalLinkAlt className="text-xs" />
                    </div>
                  </div>

                  {/* Stylized Mockup Preview Box */}
                  <div className="my-auto z-10">
                    <div className="bg-[#181818]/90 border border-white/10 rounded-xl p-4 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <p className="text-xs font-mono text-neutral-200 truncate font-semibold">
                        // {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 z-10">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold bg-black/50 text-neutral-300 px-2 py-0.5 rounded-md border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#252525]">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform text-neutral-300 font-semibold">
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Salimov Detailed Project Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1e1e1e] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 text-lg cursor-pointer"
              >
                <FaTimes />
              </button>

              <div className="salimov-title-wrap mb-6 text-left">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Salimov Meta Table */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-[#252525] p-4 rounded-xl border border-white/5 text-xs sm:text-sm">
                <div>
                  <span className="text-neutral-400 block font-medium">Project :</span>
                  <span className="text-white font-semibold">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-medium">Client :</span>
                  <span className="text-white font-semibold">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-medium">Duration :</span>
                  <span className="text-white font-semibold">{selectedProject.duration}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-medium">Code Base :</span>
                  <span className="text-white font-semibold">GitHub Repository</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Frameworks / Tech */}
              <div className="mb-8">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Frameworks & Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#2b2b2b] border border-white/10 text-neutral-200 text-xs rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="salimov-btn flex-1 justify-between"
                >
                  <span>GITHUB PREVIEW</span>
                  <span className="salimov-btn-icon">
                    <FaGithub className="text-sm" />
                  </span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="salimov-btn-secondary"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
