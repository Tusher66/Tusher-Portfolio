import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaQuoteLeft,
  FaFileAlt,
  FaScroll,
  FaExternalLinkAlt,
  FaFilePdf,
} from 'react-icons/fa';

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
  description:
    'Research and thesis focused on designing and simulating a compact, high-efficiency meander line omni-directional loop antenna tailored specifically for biomedical telemetry and wireless health monitoring devices.',
  tags: [
    'Biomedical Applications',
    'Antenna Design',
    'Omni-directional Loop',
    'Meander Line Structure',
    'BAUET Journal',
    'Peer-Reviewed PDF',
  ],
};

const education = [
  {
    degree: 'B.Sc. in Information and Communication Engineering',
    institution: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    location: 'Qadirabad Cantonment, Natore, Bangladesh',
    period: '2016 – 2020',
    result: 'CGPA: 3.54 / 4.00',
    grade: 'Distinction',
    icon: <FaGraduationCap className="text-2xl text-orange-accent" />,
    highlights: [
      'Specialized in software engineering, algorithms, data communication, and antenna design systems',
      'Thesis: “A Meander Line Omni-directional Loop Antenna Design for Biomedical Application”',
      'Published Journal Paper: BAUET JOURNAL, Vol. 02, Iss. 02, pp. 104-116, July 2020',
      'Active member of the University Programming Club and Robotics Society',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Government Shaheed Bulbul College',
    location: 'Pabna, Bangladesh',
    period: '2012 – 2014',
    result: 'GPA: 4.70 / 5.00',
    grade: 'A',
    icon: <FaBookOpen className="text-2xl text-orange-accent" />,
    highlights: [
      'Science group with Mathematics, Physics, Chemistry, and Biology',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'TSC',
    location: 'Pabna, Bangladesh',
    period: '2011 – 2012',
    result: 'GPA: 5.00 / 5.00',
    grade: 'A+',
    icon: <FaAward className="text-2xl text-orange-accent" />,
    highlights: [
      'Science curriculum with top distinction across all science and mathematical subjects',
      'Achieved perfect GPA 5.00.',
    ],
  },
];

const certifications = [
  { name: 'Java SE 11 Developer', issuer: 'Oracle', icon: '☕', color: 'text-orange-400' },
  { name: 'Spring Professional', issuer: 'VMware', icon: '🌱', color: 'text-emerald-400' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', icon: '☁️', color: 'text-amber-400' },
  { name: 'Docker Certified Associate', issuer: 'Docker Inc.', icon: '🐳', color: 'text-sky-400' },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="py-24 relative bg-[#141414] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Education & Research
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Academic foundation, peer-reviewed journal publication, engineering thesis, and professional credentials
          </p>
        </motion.div>

        {/* Research & Thesis Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14"
        >
          <div className="figma-card p-6 sm:p-8 lg:p-10 border border-orange-500/30 bg-gradient-to-br from-[#1c1917]/90 via-[#181818] to-[#141414] relative overflow-hidden shadow-2xl">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 border-b border-neutral-800/80 pb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#242424] border border-orange-500/40 flex items-center justify-center text-orange-accent shadow-inner">
                  <FaScroll className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-accent bg-orange-accent/10 border border-orange-500/30 px-3 py-0.5 rounded-full inline-block mb-1">
                    Published Research & Thesis
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Journal Publication & B.Sc. Thesis
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange-glow px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <FaFilePdf className="text-sm" />
                  <span>Read Paper (PDF)</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-80" />
                </a>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#222222] border border-neutral-700 text-neutral-300 flex items-center gap-1.5">
                  <FaFileAlt className="text-orange-accent text-xs" />
                  {publication.journal}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 border border-emerald-800/50 text-emerald-400">
                  {publication.date}
                </span>
              </div>
            </div>

            {/* Research details */}
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">
                  Journal Paper Title
                </p>
                <a
                  href={publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-extrabold text-neutral-100 hover:text-orange-accent transition-colors leading-snug group inline-flex items-start gap-2"
                >
                  <span>“{publication.title}”</span>
                  <FaExternalLinkAlt className="text-xs text-orange-accent opacity-70 group-hover:opacity-100 transition-opacity mt-1.5 shrink-0" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-1 text-sm">
                <div className="bg-[#1e1e1e] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-xs text-neutral-400 block mb-0.5">Authors</span>
                  <span className="text-neutral-200 font-semibold">{publication.authors}</span>
                </div>
                <div className="bg-[#1e1e1e] p-3.5 rounded-xl border border-neutral-800">
                  <span className="text-xs text-neutral-400 block mb-0.5">Publication Venue</span>
                  <span className="text-neutral-200 font-semibold">
                    {publication.journal}, {publication.volume}
                  </span>
                </div>
              </div>

              {/* Thesis Title Box */}
              <div className="bg-[#1a1815] border border-orange-500/20 p-4 rounded-xl">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-xs font-bold text-orange-accent uppercase tracking-wider">
                    Undergraduate Thesis
                  </p>
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>View Article PDF</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-neutral-200 font-medium">
                  Thesis on “{publication.thesisTitle}”
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Department of Information and Communication Engineering, {publication.institution}
                </p>
              </div>

              {/* Full Citation Box */}
              <div className="bg-[#121212] border border-neutral-800 p-4 rounded-xl flex items-start gap-3">
                <FaQuoteLeft className="text-orange-accent text-lg shrink-0 mt-0.5 opacity-80" />
                <div className="flex-1">
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">
                    Complete Citation
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                    {publication.citation}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Tags */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#222222] text-neutral-300 px-3 py-1 rounded-lg border border-neutral-700/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-orange-accent hover:text-orange-400 flex items-center gap-1.5 underline underline-offset-4 transition-colors"
              >
                <span>journal.bauet.ac.bd PDF</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline Grid */}
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              className="figma-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Icon Container */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#222222] border border-neutral-700/70 flex items-center justify-center">
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-orange-accent font-medium text-sm mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-accent/15 border border-orange-500/40 text-orange-accent">
                        {edu.result}
                      </span>
                      <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <FaAward className="text-xs" /> {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-neutral-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-orange-accent text-xs" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-orange-accent text-xs" /> {edu.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((h, hi) => {
                      const isPublication = h.includes('BAUET JOURNAL');
                      return (
                        <li key={hi} className="flex items-start gap-2.5 text-neutral-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-accent shrink-0" />
                          {isPublication ? (
                            <span>
                              {h}{' '}
                              <a
                                href={publication.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-orange-accent hover:underline font-medium text-xs ml-1"
                              >
                                [View PDF <FaExternalLinkAlt className="text-[10px]" />]
                              </a>
                            </span>
                          ) : (
                            <span>{h}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Professional Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-neutral-400 text-sm font-mono tracking-widest uppercase mb-8 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-neutral-800" />
            <FaAward className="text-orange-accent text-base" />
            <span>Certifications & Professional Training</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="figma-card p-5 text-center"
              >
                <div className="text-3xl mb-2.5">{cert.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{cert.name}</div>
                <div className={`text-xs ${cert.color} font-medium`}>{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
