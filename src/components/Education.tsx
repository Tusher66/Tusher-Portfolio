import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBriefcase,
  FaGraduationCap,
  FaFilePdf,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaScroll,
} from 'react-icons/fa';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const experiences = [
    {
      period: 'Nov 2023 – Present',
      role: 'Software Engineer',
      company: 'Goonj Technologies Ltd. — Dhaka, Bangladesh',
      bullets: [
        'Developed and maintained scalable backend microservices using Java Spring Boot and REST APIs.',
        'Built dynamic, responsive web interfaces with Vue.js, Vuex, and Nuxt.js.',
        'Optimized SQL database queries and caching strategies with Redis for high-throughput services.',
      ],
    },
    {
      period: 'Mar 2022 – Oct 2023',
      role: 'Junior Software Engineer',
      company: 'Kaz Software — Dhaka, Bangladesh',
      bullets: [
        'Contributed to enterprise-level web applications using Java Spring Boot, Hibernate ORM, and PostgreSQL.',
        'Implemented JWT authentication, RBAC, and unit/integration testing with JUnit and Mockito.',
        'Worked on cloud deployment workflows and CI/CD pipelines.',
      ],
    },
    {
      period: 'Oct 2021 – Feb 2022',
      role: 'Software Engineer Intern',
      company: 'Brain Station 23 — Dhaka, Bangladesh',
      bullets: [
        'Assisted in enterprise Java web service development and relational database schema modeling.',
        'Collaborated on frontend UI components using HTML, CSS, JavaScript, and Vue.js.',
      ],
    },
  ];

  const educations = [
    {
      period: '2016 – 2020',
      degree: 'B.Sc. in Information & Communication Engineering',
      institution: 'Bangladesh Army University of Engineering & Technology (BAUET)',
      result: 'CGPA: 3.54 / 4.00 (Distinction)',
      bullets: [
        'Specialized in software engineering, algorithms, data communication, and antenna design systems.',
        'Thesis: “A Meander Line Omni-directional Loop Antenna Design for Biomedical Application”.',
        'Published paper in BAUET JOURNAL, Vol. 02, Iss. 02, pp. 104-116, July 2020.',
      ],
    },
    {
      period: '2012 – 2014',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Shaheed Bulbul College — Pabna, Bangladesh',
      result: 'GPA: 4.70 / 5.00',
      bullets: [
        'Science group curriculum covering Mathematics, Physics, Chemistry, and Biology.',
      ],
    },
    {
      period: '2011 – 2012',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'TSC — Pabna, Bangladesh',
      result: 'GPA: 5.00 / 5.00 (A+)',
      bullets: [
        'Achieved perfect GPA 5.00 in Science and Higher Mathematics.',
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
    institution: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    pdfUrl: 'https://journal.bauet.ac.bd/wp-content/uploads/2020/11/22_Article-9.pdf',
    citation:
      'I H Tusher, M Samad, “Design of a Meander Line Omni-directional Loop Antenna for Biomedical Applications”, in BAUET JOURNAL, vol. 02, iss. 02, pp.104-116, July 2020.',
    tags: [
      'Biomedical Telemetry',
      'Antenna Design',
      'Omni-directional Loop',
      'BAUET Journal',
      'Peer-Reviewed PDF',
    ],
  };

  return (
    <section
      id="education"
      className="horizontal-section-panel bg-[#111111]"
    >
      <div ref={ref} className="max-w-6xl w-full mx-auto my-auto">
        {/* Salimov Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">EXPERIENCE</span>
          <h2 className="salimov-heading">
            EXPERIENCE & <span className="text-accent">EDUCATION</span>
          </h2>
        </div>

        {/* Featured Research & Thesis Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="salimov-card p-5 sm:p-7 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#1e1e1e] to-[#171717]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                  <FaScroll className="text-lg" />
                </div>
                <div>
                  <span className="salimov-timeline-badge mb-0.5">
                    Peer-Reviewed Journal & Thesis
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    Published Research & B.Sc. Thesis
                  </h3>
                </div>
              </div>

              {/* Direct PDF Button */}
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="salimov-btn"
              >
                <span>READ PAPER (PDF)</span>
                <span className="salimov-btn-icon">
                  <FaFilePdf className="text-sm" />
                </span>
              </a>
            </div>

            {/* Paper Title & Citation details */}
            <div className="space-y-3.5 mb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-0.5">
                  Journal Article Title
                </p>
                <a
                  href={publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg font-extrabold text-white hover:text-accent transition-colors leading-snug inline-flex items-start gap-2 group"
                >
                  <span>“{publication.title}”</span>
                  <FaExternalLinkAlt className="text-xs text-accent opacity-70 group-hover:opacity-100 mt-1 shrink-0" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-[#242424] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 block text-[11px] mb-0.5">Authors</span>
                  <span className="text-white font-semibold">{publication.authors}</span>
                </div>
                <div className="bg-[#242424] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 block text-[11px] mb-0.5">Venue & Issue</span>
                  <span className="text-white font-semibold">
                    {publication.journal}, {publication.volume} ({publication.date})
                  </span>
                </div>
              </div>

              {/* Thesis Info */}
              <div className="bg-[#222222] border border-white/5 p-3.5 rounded-xl">
                <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-0.5">
                  Undergraduate Thesis
                </p>
                <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                  Thesis on “{publication.thesisTitle}”
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Department of Information and Communication Engineering, {publication.institution}
                </p>
              </div>

              {/* Citation */}
              <div className="bg-[#1b1b1b] border border-white/5 p-3.5 rounded-xl flex items-start gap-2.5">
                <FaQuoteLeft className="text-accent text-sm shrink-0 mt-0.5 opacity-80" />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-0.5">
                    Citation
                  </p>
                  <p className="text-xs font-mono text-neutral-300">
                    {publication.citation}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium bg-[#222222] text-neutral-300 px-2.5 py-0.5 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dual Timelines: Experience (Left) & Education (Right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Experience</span>
            </h3>

            <div className="space-y-1">
              {experiences.map((exp, i) => (
                <div key={i} className="salimov-timeline-item">
                  <div className="salimov-timeline-icon">
                    <FaBriefcase />
                  </div>
                  <span className="salimov-timeline-badge">{exp.period}</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-0.5">
                    {exp.role}{' '}
                    <span className="text-xs text-accent font-semibold lowercase">
                      — {exp.company.split('—')[0]}
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-400 mb-2">{exp.company}</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-neutral-300">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span>Education</span>
            </h3>

            <div className="space-y-1">
              {educations.map((edu, i) => (
                <div key={i} className="salimov-timeline-item">
                  <div className="salimov-timeline-icon">
                    <FaGraduationCap />
                  </div>
                  <span className="salimov-timeline-badge">{edu.period}</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-0.5">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-accent font-semibold mb-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mb-2">
                    {edu.result}
                  </p>
                  <ul className="space-y-1 text-xs sm:text-sm text-neutral-300">
                    {edu.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
