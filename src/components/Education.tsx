import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBriefcase,
  FaGraduationCap,
  FaFilePdf,
  FaExternalLinkAlt,
  FaScroll,
} from 'react-icons/fa';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const experiences = [
    {
      period: 'Nov 2022 – Present',
      role: 'Software Engineer',
      company: 'Computer Network Systems (CNS) Limited',
      bullets: [
        'Designed and maintained scalable backend systems using Java Spring Boot.',
        'Built and optimized RESTful APIs with focus on performance, security, and reliability.',
        'Developed dynamic, responsive interfaces using Vue.js, Nuxt.js, and Angular.',
        'Led frontend development teams as Team Lead on 6+ client projects.',
      ],
    },
    {
      period: 'Mar 2022 – Oct 2022',
      role: 'Junior Frontend Developer',
      company: 'Jobdesk',
      bullets: [
        'Developed responsive Angular interfaces for a Swiss recruitment and staffing platform.',
        'Integrated Angular frontend components with REST APIs and backend services.',
        'Built reusable TypeScript/Angular components with responsive design architecture.',
      ],
    }
  ];

  const educations = [
    {
      period: '2016 – 2020',
      degree: 'B.Sc. in Information & Communication Engineering',
      institution: 'BAUET (Qadirabad Cantonment, Natore)',
      result: 'CGPA: 3.54 / 4.00',
      bullets: [
        'Algorithms, data communication, and antenna design systems.',
        'Thesis on “Meander Line Omni-directional Loop Antenna Design for Biomedical Applications”.',
      ],
    },
    {
      period: '2012 – 2014',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt. Shahid BulBul College, Pabna',
      result: 'GPA: 4.70 / 5.00',
      bullets: [
        'Science curriculum: Math, Physics, Chemistry, Biology.',
      ],
    },
    {
      period: '2011 – 2012',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'TSC, Pabna',
      result: 'GPA: 5.00 / 5.00 (A+)',
      bullets: [
        'Top board result in Science & Higher Mathematics.',
      ],
    },
  ];

  const publication = {
    title: 'Design of a Meander Line Omni-directional Loop Antenna for Biomedical Applications',
    journal: 'BAUET JOURNAL',
    volume: 'Vol. 02, Iss. 02, pp. 104–116',
    date: 'July 2020',
    authors: 'I H Tusher, M Samad',
    thesisTitle: 'A Meander Line Omni-directional Loop Antenna Design for Biomedical Application',
    institution: 'Bangladesh Army University of Engineering & Technology (BAUET)',
    pdfUrl: 'https://journal.bauet.ac.bd/wp-content/uploads/2020/11/22_Article-9.pdf',
    tags: [
      'Biomedical Telemetry',
      'Antenna Design',
      'BAUET Journal',
      'Peer-Reviewed',
    ],
  };

  return (
    <section
      id="education"
      className="horizontal-section-panel bg-[#111111]"
    >
      <div ref={ref} className="max-w-7xl w-full mx-auto my-auto flex flex-col justify-center">
        {/* Salimov Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">EXPERIENCE</span>
          <h2 className="salimov-heading">
            EXPERIENCE & <span className="text-accent">EDUCATION</span>
          </h2>
        </div>

        {/* 3-Column Screen-Fitted Grid: [Research Spotlight] | [Experience] | [Education] */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Column 1: Featured Research & Thesis Spotlight Box (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="salimov-card p-4 sm:p-5 border border-white/10 flex flex-col justify-between h-full bg-gradient-to-br from-[#1e1e1e] to-[#161616]">
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                      <FaScroll className="text-sm" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent block">
                        Featured Publication
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase">
                        Journal & Thesis
                      </h4>
                    </div>
                  </div>

                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-wider hover:opacity-90 inline-flex items-center gap-1 shrink-0"
                  >
                    <FaFilePdf /> PDF
                  </a>
                </div>

                {/* Article Details */}
                <div className="space-y-2 mb-3">
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-white hover:text-accent transition-colors leading-snug line-clamp-2 block group"
                  >
                    “{publication.title}”
                    <FaExternalLinkAlt className="text-[9px] text-accent inline ml-1.5 opacity-70" />
                  </a>

                  <div className="bg-[#242424] p-2.5 rounded-lg text-[11px]">
                    <span className="text-neutral-400 block text-[10px]">Authors & Venue</span>
                    <p className="text-neutral-200 font-medium">
                      {publication.authors} • <span className="text-accent">{publication.journal}</span> ({publication.date})
                    </p>
                  </div>

                  <div className="bg-[#1f1f1f] border border-white/5 p-2.5 rounded-lg text-[11px]">
                    <span className="text-[10px] font-bold text-accent uppercase block">
                      Undergraduate Thesis
                    </span>
                    <p className="text-neutral-300 font-medium line-clamp-2">
                      “{publication.thesisTitle}”
                    </p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">
                      Dept. of ICE, {publication.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-medium bg-[#242424] text-neutral-300 px-2 py-0.5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Experience Timeline (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="salimov-card p-4 sm:p-5 border border-white/10 flex flex-col justify-between h-full bg-[#1c1c1c]">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                  <FaBriefcase className="text-accent text-xs" />
                  <span>Experience</span>
                </h3>

                <div className="space-y-1">
                  {experiences.map((exp, i) => (
                    <div key={i} className="salimov-timeline-item">
                      <div className="salimov-timeline-icon">
                        <FaBriefcase />
                      </div>
                      <span className="salimov-timeline-badge">{exp.period}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                        {exp.role}{' '}
                        <span className="text-[10px] text-accent font-semibold lowercase">
                          — {exp.company}
                        </span>
                      </h4>
                      <ul className="space-y-0.5 text-[11px] text-neutral-300 mt-1">
                        {exp.bullets.slice(0, 2).map((b, bi) => (
                          <li key={bi} className="flex items-start gap-1.5 leading-tight">
                            <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Education Timeline (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="salimov-card p-4 sm:p-5 border border-white/10 flex flex-col justify-between h-full bg-[#1c1c1c]">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                  <FaGraduationCap className="text-accent text-sm" />
                  <span>Education</span>
                </h3>

                <div className="space-y-1">
                  {educations.map((edu, i) => (
                    <div key={i} className="salimov-timeline-item">
                      <div className="salimov-timeline-icon">
                        <FaGraduationCap />
                      </div>
                      <span className="salimov-timeline-badge">{edu.period}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-[10px] text-accent font-semibold">
                        {edu.institution}
                      </p>
                      <p className="text-[10px] text-emerald-400 font-semibold mb-1">
                        {edu.result}
                      </p>
                      <ul className="space-y-0.5 text-[11px] text-neutral-300">
                        {edu.bullets.slice(0, 1).map((b, bi) => (
                          <li key={bi} className="flex items-start gap-1.5 leading-tight">
                            <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
