import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaMobileAlt,
  FaPalette,
  FaLaptopCode,
  FaLayerGroup,
  FaGem,
  FaVideo,
} from 'react-icons/fa';

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: 'App Design',
      desc: 'Crafting responsive, high-performance mobile and web applications with seamless user flows and state-of-the-art UI.',
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: 'UI/UX Design',
      desc: 'User-centered wireframing, design systems, and interactive prototypes that make digital products effortless to navigate.',
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: 'Website Design',
      desc: 'Modern web experiences built with clean architecture, fast loading speeds, SEO best practices, and elegant aesthetics.',
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: 'Enterprise Architecture',
      desc: 'Designing and building scalable enterprise systems, modular ERP solutions, and resilient backend microservices.',
    },
    {
      icon: <FaGem className="text-2xl" />,
      title: 'Branding & Identity',
      desc: 'Creating cohesive visual guidelines, typography pairings, color systems, and modern digital asset collections.',
    },
    {
      icon: <FaVideo className="text-2xl" />,
      title: 'Multimedia & Motion',
      desc: 'Dynamic micro-animations, motion graphics, and presentation media that bring web applications vividly to life.',
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
            Delivering end-to-end digital excellence across UI/UX design, modern full-stack development, and enterprise software engineering.
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
