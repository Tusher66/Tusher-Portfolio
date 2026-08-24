import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-indigo-500 to-blue-600',
    borderColor: 'border-indigo-500/30',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 85 },
      { name: 'Hibernate / JPA', level: 85 },
      { name: 'REST API Design', level: 90 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Vue.js', level: 88 },
      { name: 'Nuxt.js', level: 82 },
      { name: 'React.js', level: 80 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🛠️',
    color: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'Redis', level: 72 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Linux', level: 78 },
    ],
  },
];

const techBadges = [
  { name: 'Java', emoji: '☕', color: 'border-orange-500/40 bg-orange-500/10 text-orange-300' },
  { name: 'Spring Boot', emoji: '🌱', color: 'border-green-500/40 bg-green-500/10 text-green-300' },
  { name: 'Vue.js', emoji: '💚', color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' },
  { name: 'React.js', emoji: '⚛️', color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300' },
  { name: 'Nuxt.js', emoji: '🔷', color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300' },
  { name: 'TypeScript', emoji: '📘', color: 'border-blue-500/40 bg-blue-500/10 text-blue-300' },
  { name: 'MySQL', emoji: '🐬', color: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-300' },
  { name: 'MongoDB', emoji: '🍃', color: 'border-green-400/40 bg-green-400/10 text-green-300' },
  { name: 'Docker', emoji: '🐳', color: 'border-sky-500/40 bg-sky-500/10 text-sky-300' },
  { name: 'Git', emoji: '🔀', color: 'border-red-500/40 bg-red-500/10 text-red-300' },
  { name: 'Linux', emoji: '🐧', color: 'border-gray-500/40 bg-gray-500/10 text-gray-300' },
  { name: 'Tailwind', emoji: '🌊', color: 'border-teal-500/40 bg-teal-500/10 text-teal-300' },
  { name: 'Redis', emoji: '🔴', color: 'border-red-400/40 bg-red-400/10 text-red-300' },
  { name: 'REST API', emoji: '🔗', color: 'border-purple-500/40 bg-purple-500/10 text-purple-300' },
  { name: 'Microservices', emoji: '🏗️', color: 'border-indigo-400/40 bg-indigo-400/10 text-indigo-300' },
  { name: 'PostgreSQL', emoji: '🐘', color: 'border-blue-400/40 bg-blue-400/10 text-blue-300' },
];

function SkillBar({ name, level, color, delay, inView }: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="py-24 relative bg-[#080810]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            02. Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Technologies and tools I've mastered over my 3+ years of professional experience
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className={`glass-card p-6 border ${cat.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} bg-opacity-20 flex items-center justify-center text-2xl`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={ci * 0.1 + si * 0.08}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-gray-400 text-sm font-mono tracking-widest uppercase mb-8">
            All Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`px-4 py-2 rounded-full border text-sm font-medium ${tech.color} cursor-default flex items-center gap-2 transition-all`}
              >
                <span>{tech.emoji}</span>
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
