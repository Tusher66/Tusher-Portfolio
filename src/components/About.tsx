import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';
import {
  SiSpringboot,
  SiVuedotjs,
  SiAngular,
  SiMysql,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiRedis,
} from 'react-icons/si';

interface CircularProgressProps {
  percentage: number;
  label: string;
  icon?: React.ReactNode;
  inView: boolean;
  delay?: number;
}

function CircularProgress({
  percentage,
  label,
  icon,
  inView,
  delay = 0,
}: CircularProgressProps) {
  const radius = 34;
  const stroke = 4.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = inView
    ? circumference - (percentage / 100) * circumference
    : circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="#2b2b2b"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <motion.circle
            stroke="var(--accent-color)"
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

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon ? (
            <span className="text-base sm:text-lg text-neutral-300 group-hover:text-accent transition-colors">
              {icon}
            </span>
          ) : (
            <span className="font-bold text-[10px] text-neutral-200">
              {percentage}%
            </span>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-base font-bold text-accent mt-1 font-display leading-none">
        {percentage}%
      </p>
      <p className="text-neutral-300 font-semibold text-[10px] sm:text-[11px] mt-0.5 text-center uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const personalInfoLeft = [
    { label: 'First Name', value: 'Ismail Hossain' },
    { label: 'Last Name', value: 'Tusher' },
    { label: 'Age', value: '27 Years' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'Freelance', value: 'Available', highlight: true },
  ];

  const personalInfoRight = [
    { label: 'Address', value: 'Dhaka, Bangladesh' },
    { label: 'Phone', value: '+880 1754 343120', isLink: true, href: 'tel:+8801754343120' },
    { label: 'Email', value: 'tusher66@gmail.com', isLink: true, href: 'mailto:tusher66@gmail.com' },
    { label: 'WhatsApp', value: '+880 1754-343120', isLink: true, href: 'https://wa.me/8801754343120' },
    { label: 'Languages', value: 'English, Bengali' },
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '27+', label: 'Completed Projects' },
    { number: '31+', label: 'Happy Clients' },
    { number: '1+', label: 'Published Paper' },
  ];

  const skillsData = [
    { label: 'Spring Boot', percentage: 95, icon: <SiSpringboot className="text-emerald-400" /> },
    { label: 'Vue.js', percentage: 92, icon: <SiVuedotjs className="text-emerald-500" /> },
    { label: 'Angular', percentage: 85, icon: <SiAngular className="text-red-500" /> },
    { label: 'MySQL / Oracle', percentage: 90, icon: <SiMysql className="text-sky-400" /> },
    { label: 'Docker & CI/CD', percentage: 80, icon: <SiDocker className="text-blue-400" /> },
    { label: 'PostgreSQL', percentage: 88, icon: <SiPostgresql className="text-indigo-400" /> },
    { label: 'TypeScript', percentage: 85, icon: <SiTypescript className="text-blue-500" /> },
    { label: 'Redis Cache', percentage: 78, icon: <SiRedis className="text-red-400" /> },
  ];

  return (
    <section
      id="about"
      className="horizontal-section-panel bg-[#111111]"
    >
      <div ref={ref} className="max-w-6xl w-full mx-auto my-auto flex flex-col justify-center">
        {/* Salimov Signature Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">RESUME</span>
          <h2 className="salimov-heading">
            ABOUT <span className="text-accent">ME</span>
          </h2>
        </div>

        {/* 2-Column Info & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6">
          {/* Left Column: Personal Information Data List */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3">
              Personal Infos
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-4">
              {/* Column 1 */}
              <div className="space-y-1.5">
                {personalInfoLeft.map((info) => (
                  <div key={info.label} className="text-xs">
                    <span className="text-neutral-400 font-medium">{info.label} : </span>
                    <span
                      className={`font-semibold ${
                        info.highlight ? 'text-emerald-400' : 'text-white'
                      }`}
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-1.5">
                {personalInfoRight.map((info) => (
                  <div key={info.label} className="text-xs truncate">
                    <span className="text-neutral-400 font-medium">{info.label} : </span>
                    {info.isLink ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-white hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-white">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Salimov "DOWNLOAD CV" button with circular icon */}
            <a
              href="/Ismail_Hossain_Tusher_CV.pdf"
              download="Ismail_Hossain_Tusher_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="salimov-btn"
            >
              <span>DOWNLOAD CV</span>
              <span className="salimov-btn-icon">
                <FaDownload className="text-xs" />
              </span>
            </a>
          </motion.div>

          {/* Right Column: 4 Salimov Stat Boxes (2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-2 gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="salimov-stat-box flex flex-col justify-between"
              >
                <div className="salimov-stat-number">{stat.number}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-4 h-0.5 bg-accent shrink-0" />
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-sm mx-auto h-px bg-white/10 mb-5" />

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 justify-center">
            {skillsData.map((skill, index) => (
              <CircularProgress
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                icon={skill.icon}
                inView={inView}
                delay={index * 0.05}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
