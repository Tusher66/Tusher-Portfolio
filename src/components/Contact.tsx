import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'tusher66@gmail.com',
    href: 'mailto:tusher66@gmail.com',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10 border-indigo-500/30',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+880 1754-343120',
    href: 'tel:+8801754343120',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10 border-green-500/30',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Nmapara, Khilkhet, Dhaka, BD',
    href: 'https://maps.google.com/?q=Khilkhet,Dhaka',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10 border-red-500/30',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Tusher66',
    href: 'https://github.com/Tusher66',
    color: 'text-gray-300',
    bgColor: 'bg-gray-500/10 border-gray-500/30',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'ismail-hossain-tusher',
    href: 'https://www.linkedin.com/in/ismail-hossain-tusher',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/30',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080810]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" style={{ filter: 'blur(80px)' }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" style={{ filter: 'blur(80px)' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            06. Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability Card */}
            <div className="glass-card border border-green-500/20 p-5 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-green-300 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-gray-500 text-sm">
                I'm currently open to full-time roles and freelance projects. 
                Response time is typically within 24 hours.
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${item.bgColor} transition-all hover:shadow-lg`}
              >
                <div className={`text-xl ${item.color} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                  <div className="text-gray-200 text-sm font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border">
              <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <FaCheckCircle className="text-6xl text-green-400 mb-4" />
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2 font-medium">
                          Your Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2 font-medium">
                          Email Address <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2 font-medium">
                        Subject <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Job Opportunity / Project Collaboration / General Inquiry"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2 font-medium">
                        Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project, requirements, or just say hello..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
