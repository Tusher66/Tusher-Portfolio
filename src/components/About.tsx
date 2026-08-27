import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';
import {
  SiSpringboot,
  SiVuedotjs,
  SiAngular,
  SiMysql,
  SiDocker,
} from 'react-icons/si';
import myPic from '../assets/Images/myPic.jpg';

interface CircularProgressProps {
  percentage: number;
  label: string;
  badgeText?: string;
  icon?: React.ReactNode;
  inView: boolean;
  delay?: number;
  textColor?: string;
}

function CircularProgress({
  percentage,
  label,
  badgeText,
  icon,
  inView,
  delay = 0,
  textColor = 'text-orange-accent',
}: CircularProgressProps) {
  const radius = 48;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = inView
    ? circumference - (percentage / 100) * circumference
    : circumference;

  return (
    <div className="flex flex-col items-center group">
      {/* SVG Ring Container matching Figma design */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          {/* Background Track Circle */}
          <circle
            stroke="#262626"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Animated Orange Progress Arc */}
          <motion.circle
            stroke="#FD5C02"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.4, delay, ease: 'easeOut' }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Center Badge / Icon matching Figma */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-xl bg-[#1d1d1d] border border-neutral-700/70 flex items-center justify-center shadow-inner group-hover:border-orange-accent/50 transition-colors">
            {icon ? (
              <span className="text-xl">{icon}</span>
            ) : (
              <span className={`font-bold text-sm font-sans ${textColor}`}>
                {badgeText}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Percentage Text in Orange matching Figma */}
      <p className="text-2xl font-extrabold text-orange-accent mt-3 tracking-tight">
        {percentage}%
      </p>

      {/* Tool Name */}
      <p className="text-neutral-300 font-medium text-sm mt-1 text-center">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillsData = [
    {
      label: 'Java Spring Boot',
      percentage: 100,
      icon: <SiSpringboot className="text-emerald-400" />,
    },
    {
      label: 'Vue.js',
      percentage: 100,
      icon: <SiVuedotjs className="text-emerald-500" />,
    },
    {
      label: 'Angular',
      percentage: 85,
      icon: <SiAngular className="text-red-500" />,
    },
    {
      label: 'MySQL',
      percentage: 90,
      icon: <SiMysql className="text-sky-400" />,
    },
    {
      label: 'Docker & DevOps',
      percentage: 80,
      icon: <SiDocker className="text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#141414] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            About Me
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Full-Stack Software Engineer & Backend Specialist
          </p>
        </motion.div>

        {/* 2-Column Content Grid matching Figma */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Portrait shape matching Figma */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/25 via-[#222222] to-[#161616] p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#161616] border border-neutral-800 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={myPic}
                    alt="Md. Ismail Hossain Tusher"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                  <div className="absolute bottom-6 bg-[#222222]/90 border border-orange-500/40 text-orange-accent text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio narrative matching Figma & Download CV */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms, scalable microservices, and reliable solutions. Their canvas is an IDE, where lines of code dance in intricate patterns, breathing life into enterprise software systems.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              With 3+ years of professional full-stack software engineering experience, I specialize in architecting scalable backend systems with Java Spring Boot, engineering reactive frontends with Vue.js & Angular, and building robust database architectures with MySQL, PostgreSQL, and Oracle SQL.
            </p>

            {/* Download CV button matching Figma */}
            <a
              href="mailto:tusher66@gmail.com?subject=CV%20Request%20-%20Md.%20Ismail%20Hossain%20Tusher"
              className="btn-orange-glow px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2.5 cursor-pointer inline-flex"
            >
              <FaDownload className="text-sm" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Circular Skills Percentage Gauges matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-12 border-t border-neutral-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 justify-center">
            {skillsData.map((skill, index) => (
              <CircularProgress
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                badgeText={skill.badgeText}
                icon={skill.icon}
                textColor={skill.textColor}
                inView={inView}
                delay={index * 0.12}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
