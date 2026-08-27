import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaDocker,
  FaNetworkWired,
} from 'react-icons/fa6';

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaServer className="text-2xl" />,
      title: 'Backend Engineering',
      desc: 'Building secure, highly scalable backend systems and RESTful APIs using Java, Spring Boot, Spring Security, and Microservices.',
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Full-Stack Development',
      desc: 'Developing end-to-end web applications with seamless communication between robust backend services and modern reactive frontends.',
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: 'Frontend Architecture',
      desc: 'Engineering modular, high-performance user interfaces using Vue.js (Vue 3 / Composition API), Angular, and Tailwind CSS.',
    },
    {
      icon: <FaNetworkWired className="text-2xl" />,
      title: 'Enterprise ERP Systems',
      desc: 'Architecting complex module-based ERP platforms, accounting, HR, workflow approvals, and citizen service platforms.',
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: 'Database & Data Systems',
      desc: 'Designing robust database schemas, query optimization, data migrations, and Jasper reporting with MySQL, PostgreSQL, and Oracle.',
    },
    {
      icon: <FaDocker className="text-2xl" />,
      title: 'DevOps & System Reliability',
      desc: 'Containerizing applications with Docker, implementing CI/CD pipelines, optimizing system performance, and ensuring production uptime.',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#111111] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Specialized software engineering services delivering scalable backend architectures, reactive frontends, and enterprise solutions.
          </p>
        </motion.div>

        {/* Services Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="figma-card p-8 flex flex-col items-start group"
            >
              {/* Icon Container with Orange Accent */}
              <div className="w-14 h-14 rounded-2xl bg-[#222222] border border-neutral-700/60 group-hover:border-orange-accent/50 group-hover:bg-orange-accent/10 flex items-center justify-center text-orange-accent transition-all duration-300 mb-6 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
