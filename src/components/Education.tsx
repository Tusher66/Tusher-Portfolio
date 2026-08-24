import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMedal, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Sc. in Information and Communication Engineering',
    institution: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    location: 'Qadirabad Cantonment, Natore',
    period: '2017 – 2021',
    result: 'CGPA: 3.54 / 4.00',
    grade: 'Distinction',
    icon: '🎓',
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500/30',
    highlights: [
      'Specialized in software engineering, algorithms, and network systems',
      'Final year project: Intelligent Traffic Management System using IoT & Machine Learning',
      'Active member of the Programming Club and Robotics Society',
      'Participated in national-level programming contests',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka College',
    location: 'Dhaka, Bangladesh',
    period: '2014 – 2016',
    result: 'GPA: 5.00 / 5.00',
    grade: 'Golden A+',
    icon: '📚',
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    highlights: [
      'Science group with Mathematics, Physics, Chemistry, and Computer Science',
      'Achieved perfect GPA in all subjects',
      'Awarded merit scholarship for academic excellence',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Milestone School & College',
    location: 'Dhaka, Bangladesh',
    period: '2012 – 2014',
    result: 'GPA: 5.00 / 5.00',
    grade: 'Golden A+',
    icon: '🏫',
    color: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500/30',
    highlights: [
      'Science group with top performance across all subjects',
      'Achieved perfect GPA and board scholarship',
      'School topper in Mathematics and Science subjects',
    ],
  },
];

const certifications = [
  { name: 'Java SE 11 Developer', issuer: 'Oracle', icon: '☕', color: 'text-orange-400' },
  { name: 'Spring Professional', issuer: 'VMware', icon: '🌱', color: 'text-green-400' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', icon: '☁️', color: 'text-yellow-400' },
  { name: 'Docker Certified Associate', issuer: 'Docker Inc.', icon: '🐳', color: 'text-blue-400' },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="py-24 relative bg-[#0a0a0f]">
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
            05. Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Strong academic foundation combined with continuous learning and professional certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ x: 6 }}
              className={`glass-card border ${edu.borderColor} p-6 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} bg-opacity-20 flex items-center justify-center text-3xl`}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{edu.degree}</h3>
                      <p className="text-indigo-400 font-medium text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.result}
                      </span>
                      <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                        <FaMedal /> {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + hi * 0.05 + 0.3 }}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} flex-shrink-0`} />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-gray-400 text-sm font-mono tracking-widest uppercase mb-8 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-700" />
            <FaGraduationCap className="text-indigo-400 text-xl" />
            <span>Certifications & Training</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-700" />
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-card p-4 text-center hover:border-indigo-500/30 transition-all"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{cert.name}</div>
                <div className={`text-xs ${cert.color} font-medium`}>{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
