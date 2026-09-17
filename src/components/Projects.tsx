import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

interface ProjectMetric {
  value: string;
  label: string;
}

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
  githubUrl?: string | null;
  liveUrl?: string | null;
  metrics?: ProjectMetric[];
  subsystems?: string[];
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filterTabs = [
    { name: 'All', key: 'All' },
    { name: 'Full-Stack Apps', key: 'fullstack' },
    { name: 'Enterprise ERP', key: 'erp' },
    { name: 'Backend & APIs', key: 'backend' },
    { name: 'Automated Systems', key: 'automated' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'IDRA National Web Portal & CMS',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
      client: 'IDRA, Govt. of Bangladesh (BISDP, Ministry of Finance)',
      duration: 'Enterprise Case Study',
      description:
        'A high-throughput, microservice-integrated regulatory ecosystem and enterprise CMS powering the digital presence, Elasticsearch full-text indexing, automated GitLab CI/CD pipelines, citizen grievance redressal (GRS), and distributed MinIO S3 document delivery for Bangladesh’s apex insurance authority.',
      tech: [
        'Java 17',
        'Spring Boot 3.1',
        'Nuxt 3 SSR',
        'Vue.js 3',
        'Elasticsearch 8.x',
        'MyBatis 3.0',
        'MinIO S3',
        'Redis',
        'Keycloak SSO',
        'GitLab CI/CD',
        'Docker',
        'MySQL 8.0',
      ],
      gradient: 'from-blue-600/35 via-indigo-950/50 to-black',
      githubUrl: null,
      liveUrl: 'https://idra.org.bd/',
      metrics: [
        { value: '< 15ms', label: 'Elasticsearch Query' },
        { value: '< 6 Min', label: 'CI/CD Pipeline' },
        { value: '< 120ms', label: 'Nuxt 3 SSR TTFB' },
        { value: '100K+', label: 'PDFs on MinIO S3' },
      ],
      subsystems: [
        'Public Web Portal: Nuxt 3 (SSR), Pinia, bilingual localization (@nuxtjs/i18n), FullCalendar, pdfjs-dist',
        'Admin Control Plane: Vue 3, TinyMCE, vuedraggable navigation builder, Chart.js live analytics, granular RBAC',
        'Backend Core API: Spring Boot 3.1 & Java 17, MyBatis 3.0.2 mappers, Redis cache, Keycloak SSO',
        'Citizen Grievance Redress System (GRS) with SMS OTP verification and CC-CRM sync',
      ],
    },
    {
      id: 2,
      title: 'RAISE-MIS Digital Welfare & ERP',
      category: 'Enterprise ERP',
      categoryType: 'erp',
      client: 'Wage Earners’ Welfare Board (WEWB) • World Bank',
      duration: '',
      description:
        'A nation-scale digital welfare and ERP ecosystem developed for the Wage Earners’ Welfare Board (WEWB) under the Ministry of Expatriates’ Welfare and the World Bank. Automates the complete lifecycle of returnee reintegration (RPL), merit scholarships, disability grants, JBC life insurance claims, mortal remains repatriation, and direct electronic fund disbursements across 64 district offices and international missions.',
      tech: [
        'Spring Boot 3.3',
        'Java 17 LTS',
        'Vue 3',
        'Vite',
        'Pinia',
        'TailwindCSS',
        'MS SQL Server',
        'MinIO S3',
        'JasperReports 6.20',
        'Resilience4j',
        'STOMP WebSocket',
        'Spring Security',
      ],
      gradient: 'from-cyan-600/35 via-blue-950/50 to-black',
      githubUrl: null,
      liveUrl: 'https://portal.wewb.gov.bd/',
      metrics: [
        { value: '100% Audit', label: 'Immutable State Machine' },
        { value: '< 200ms', label: 'MinIO & Vite Streaming' },
        { value: 'Millions', label: 'Migrants & Beneficiaries' },
      ],
      subsystems: [
        'Dual Modern SPAs: Citizen Self-Service Portal (Raise Public Portal) & Admin/Staff MIS Portal (Raise Back Office) built with Vue 3, Vite, Pinia, ApexCharts, and Vue-i18n bilingual localization',
        '15 Modules: 15 modular subsystems and backend services are present across the platform',
        'Configurable Multi-Tier Approval State Machine: Dynamic workflow routing (DEMO → Forwarded → Approver/PMU → EFT/BEFTN Disbursement) with immutable WorkflowHistoryLog audit tracking',
        'Bilingual Reports: MinIO S3 object storage with Apache Tika MIME inspection and JasperReports engine rendering Bengali Nikosh Unicode with dynamic QR codes',
      ],
    },
    {
      id: 3,
      title: 'Microservices Backend Architecture',
      category: 'Backend & APIs',
      categoryType: 'backend',
      client: 'Distributed Systems Architecture',
      duration: '7 Modular Services',
      description:
        'A production-oriented Spring Boot Microservices Architecture demonstrating service discovery with Netflix Eureka, centralized configuration via Spring Cloud Config Server, API Gateway routing with JWT validation filters, declarative inter-service communication with OpenFeign, Resilience4j fault tolerance, and polyglot persistence across PostgreSQL and MongoDB.',
      tech: [
        'Java 17',
        'Spring Boot',
        'Spring Cloud Gateway',
        'Netflix Eureka',
        'Spring Cloud Config',
        'Spring Cloud OpenFeign',
        'Resilience4j',
        'JWT Auth',
        'common-jwt-lib',
        'PostgreSQL',
        'MongoDB',
        'Actuator',
        'Maven',
      ],
      gradient: 'from-emerald-600/35 via-teal-950/50 to-black',
      githubUrl: 'https://github.com/Tusher66/microservice',
      liveUrl: null,
      metrics: [
        { value: '7 Services', label: 'Microservice Mesh' },
        { value: 'Polyglot DB', label: 'PostgreSQL & MongoDB' },
        { value: 'Resilience4j', label: 'Circuit Breaker & Fallback' },
        { value: 'Centralized', label: 'Eureka & Config Server' },
      ],
      subsystems: [
        'API Gateway (:8081): Single entry point providing dynamic request routing, JWT validation filtering, client load balancing (lb://), and circuit breaker fallbacks',
        'Service Registry (:8084) & Config Server (:8082): Netflix Eureka dynamic discovery and Spring Cloud Config centralized external configuration',
        'Authentication Service (:8083) & common-jwt-lib: Modular JWT token generation with a shared utility library for distributed validation and security',
        'Business Microservices: User Service (:8881, PostgreSQL) with OpenFeign declarative REST clients calling Company Service (:8882, PostgreSQL) and Rating Service (:8883, MongoDB)',
        'Fault Tolerance & Health: Resilience4j circuit breakers, retries, and rate limiting with Spring Boot Actuator monitoring',
      ],
    },
    {
      id: 4,
      title: 'Automated Vehicle Inspection System (AVIS)',
      category: 'Automated Systems',
      categoryType: 'automated',
      client: 'BRTA, Govt of Bangladesh (CNS Ltd.)',
      duration: 'Enterprise Case Study',
      description:
        'A mission-critical, enterprise multi-tier vehicle fitness certification and automated lane inspection platform engineered for the Bangladesh Road Transport Authority (BRTA) by Computer Network Systems (CNS) Ltd. Directly connects industrial Cosber IoT inspection equipment (Brake, Speedometer, Side-Slip, Emissions, Suspension, Headlights) with real-time inspector pad terminals, dual-datasource transaction routing, and the nationwide BRTA Information System (BRTA-IS/BSP) for tamper-proof digital certification.',
      tech: [
        'Spring Boot 2.7',
        'Java 8',
        'Vue.js 2',
        'Vuex',
        'Oracle 12c',
        'MS SQL Server',
        'HikariCP Dual-DB',
        'JasperReports 6.2',
        'Industrial IoT (Cosber)',
        'REST & SOAP APIs',
        'Spring Security (JWT)',
        'BootstrapVue',
        'Chart.js',
      ],
      gradient: 'from-blue-600/35 via-cyan-950/50 to-black',
      githubUrl: null,
      liveUrl: 'https://bsp.brta.gov.bd/',
      metrics: [
        { value: '100%', label: 'Automated Machine Integration' },
        { value: 'Dual DB', label: 'Oracle 12c (AVIS) + MSSQL (Cosber)' },
        { value: '< 3 Min', label: 'Full Inspection Cycle' },
        { value: '0% Fraud', label: 'Digital QR & Audit Trail' },
      ],
      subsystems: [
        'avis-ui (Frontend UI & Tablet Inspector Pad): Vue.js 2, Vuex, BootstrapVue, and Chart.js for real-time lane queueing, cashier tokening, touch-optimized visual checklists, analytics dashboards, and instant certificate issuance',
        'brta_avis_java (Core Microservice Engine): Spring Boot 2.7, Java 8, HikariCP dual-datasource routing (Oracle 12c + MSSQL), Cosber hardware telemetry, statutory pass/fail rules, and Nikosh Bengali JasperReports PDF generation',
        'brtaavisapi (National Government Gateway): Spring Boot REST gateway with JWT Auth securely linking local Vehicle Inspection Centers (VICs) with nationwide BRTA-IS central DB and BRTA Service Portal (BSP)',
        'Industrial IoT Lane Hardware Interfacing: Direct bidirectional telemetry with Cosber testing benches (Roller Brake, Side-Slip, Speedometer PLC, Smoke Opacity RS232, EUSAMA Suspension, Optical Headlight, RFID Gate Scanner)',
        'Strict Audit Trail & Tamper-Proof QR Certification: Multi-layer RBAC, supervisor sign-off, dual approval for skipped tests/overrides, automated SMS alerts, and encrypted QR verification pointing to public BRTA endpoints (bsp.brta.gov.bd/vfc)',
      ],
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
      title: 'Undercover Dark Portfolio',
      category: 'Full-Stack Apps',
      categoryType: 'fullstack',
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
    <section
      id="portfolio"
      className="horizontal-section-panel bg-[#111111]"
    >
      <div ref={ref} className="max-w-6xl w-full mx-auto my-auto flex flex-col justify-center">
        {/* Salimov Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">WORKS</span>
          <h2 className="salimov-heading">
            MY <span className="text-accent">PORTFOLIO</span>
          </h2>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-[#252525] text-neutral-300 hover:text-white hover:bg-[#2e2e2e]'
                  }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid - Responsive 4-column layout */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="salimov-card overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Visual Preview Area */}
                <div
                  className={`relative h-28 sm:h-32 bg-gradient-to-br ${project.gradient} p-3 flex flex-col justify-between border-b border-white/5 overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-bold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all">
                      <FaExternalLinkAlt className="text-[9px]" />
                    </div>
                  </div>

                  {/* Stylized Mockup Preview Box */}
                  <div className="my-auto z-10">
                    <p className="text-[10px] font-mono text-neutral-200 truncate font-semibold bg-[#181818]/90 border border-white/10 rounded-md px-2 py-1">
                      // {project.title}
                    </p>
                  </div>

                  {/* Tech Tags & Live Tag */}
                  <div className="flex items-center justify-between gap-1 z-10">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[8px] font-semibold bg-black/50 text-neutral-300 px-1.5 py-0.5 rounded border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <span className="text-[8px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase tracking-wider">
                        LIVE
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="p-2.5 sm:p-3 flex items-center justify-between bg-[#252525] text-[11px]">
                  <h3 className="font-bold text-white group-hover:text-accent transition-colors uppercase tracking-tight truncate mr-2">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-accent font-semibold whitespace-nowrap group-hover:translate-x-0.5 transition-transform">
                    VIEW →
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Salimov Detailed Project Popup Modal via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                onWheel={(e) => e.stopPropagation()}
                className="modal-overlay fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overscroll-contain"
                role="dialog"
                aria-modal="true"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                  className="modal-container bg-[#1e1e1e] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain"
                >
                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white p-2.5 text-lg cursor-pointer bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close project modal"
                  >
                    <FaTimes />
                  </button>

                  <div className="salimov-title-wrap mb-4 text-left">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-display">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Salimov Meta Table */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4 bg-[#252525] p-3 rounded-xl border border-white/5 text-xs">
                    <div>
                      <span className="text-neutral-400 block font-medium text-[11px]">Client :</span>
                      <span className="text-white font-semibold">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block font-medium text-[11px]">Type / Scope :</span>
                      <span className="text-white font-semibold">{selectedProject.duration}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block font-medium text-[11px]">Live Website :</span>
                      {selectedProject.liveUrl ? (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          {selectedProject.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      ) : selectedProject.githubUrl ? (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          GitHub Demo
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      ) : (
                        <span className="text-neutral-400 font-semibold">Enterprise / Private</span>
                      )}
                    </div>
                  </div>

                  {/* Key Performance Metrics (if available) */}
                  {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Key Performance & Engineering Metrics
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {selectedProject.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="bg-[#262626] border border-white/5 rounded-lg p-2 text-center"
                          >
                            <div className="text-xs sm:text-sm font-black text-accent font-mono">
                              {m.value}
                            </div>
                            <div className="text-[9px] text-neutral-300 font-medium leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Executive Summary
                    </p>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Subsystems / Highlights (if available) */}
                  {selectedProject.subsystems && selectedProject.subsystems.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Architecture & Subsystems
                      </p>
                      <ul className="space-y-1 text-xs text-neutral-300">
                        {selectedProject.subsystems.map((sub, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Frameworks / Tech */}
                  <div className="mb-5">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Frameworks & Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-[#2b2b2b] border border-white/10 text-neutral-200 text-xs rounded-full font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 items-center">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="salimov-btn flex-1 justify-between"
                      >
                        <span>VISIT LIVE PORTAL</span>
                        <span className="salimov-btn-icon">
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          selectedProject.liveUrl
                            ? 'salimov-btn-secondary'
                            : 'salimov-btn flex-1 justify-between'
                        }
                      >
                        {selectedProject.liveUrl ? (
                          <>
                            <FaGithub className="text-sm" />
                            <span>GITHUB</span>
                          </>
                        ) : (
                          <>
                            <span>GITHUB PREVIEW</span>
                            <span className="salimov-btn-icon">
                              <FaGithub className="text-sm" />
                            </span>
                          </>
                        )}
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className={`salimov-btn-secondary ${!selectedProject.liveUrl && !selectedProject.githubUrl
                        ? 'flex-1 justify-center'
                        : ''
                        }`}
                    >
                      CLOSE
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}

