import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Goonj Technologies Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2023 – Present',
    type: 'Full-time',
    current: true,
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500/40',
    dotColor: 'bg-indigo-500',
    achievements: [
      'Developed and maintained scalable backend microservices using Java Spring Boot',
      'Designed and implemented RESTful APIs consumed by multiple frontend clients',
      'Built responsive, dynamic UIs with Vue.js and Nuxt.js',
      'Integrated third-party payment gateways and SMS/email notification systems',
      'Collaborated closely with product managers and UI/UX designers in Agile sprints',
      'Improved system performance by optimizing database queries and caching with Redis',
    ],
    tech: ['Java', 'Spring Boot', 'Vue.js', 'Nuxt.js', 'MySQL', 'Redis', 'Docker'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Kaz Software',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2022 – Oct 2023',
    type: 'Full-time',
    current: false,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    dotColor: 'bg-purple-500',
    achievements: [
      'Contributed to building enterprise-level web applications using Spring Boot and Vue.js',
      'Wrote unit and integration tests to ensure code quality (JUnit, Mockito)',
      'Implemented JWT-based authentication and role-based access control',
      'Participated in code reviews and helped mentor junior team members',
      'Worked with PostgreSQL and Hibernate ORM for data persistence',
      'Deployed applications to AWS EC2 and managed CI/CD pipelines',
    ],
    tech: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'JWT', 'AWS', 'JUnit'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Brain Station 23',
    location: 'Dhaka, Bangladesh',
    period: 'Oct 2021 – Feb 2022',
    type: 'Internship',
    current: false,
    color: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500/30',
    dotColor: 'bg-cyan-500',
    achievements: [
      'Learned enterprise Java development with Spring Framework',
      'Assisted in building RESTful web services and database schema design',
      'Developed frontend components using HTML, CSS, JavaScript, and Vue.js',
      'Participated in daily standups and Agile ceremonies',
      'Gained hands-on experience with Git workflows and code collaboration',
    ],
    tech: ['Java', 'Spring', 'Vue.js', 'MySQL', 'Git', 'HTML/CSS'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            03. Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">History</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            My professional journey building software products across diverse companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.2 }}
                  className={`absolute left-2 sm:left-6 top-6 w-5 h-5 ${exp.dotColor} rounded-full border-4 border-[#0a0a0f] z-10 ${exp.current ? 'animate-pulse' : ''}`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6 }}
                  className={`glass-card border ${exp.borderColor} p-6 hover:shadow-xl transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-300 text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        <FaBriefcase className="text-gray-500 text-xs" />
                        <span className="text-indigo-400 font-semibold text-sm">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt /> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((ach, ai) => (
                      <motion.li
                        key={ai}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + ai * 0.05 + 0.4 }}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                        {ach}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
