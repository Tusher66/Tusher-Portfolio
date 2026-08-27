import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeline: '',
    email: '',
    service: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        timeline: '',
        email: '',
        service: '',
        details: '',
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#141414] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Contact me
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </motion.div>

        {/* 2-Column Form matching Figma layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column Inputs */}
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="figma-input"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="figma-input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="Timeline (e.g. 1-2 months)"
                    className="figma-input"
                  />
                </div>
              </div>

              {/* Right Column Inputs */}
              <div className="space-y-6 flex flex-col">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="figma-input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Service Of Interest"
                    className="figma-input"
                  />
                </div>

                <div className="flex-1">
                  <textarea
                    name="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Project Details..."
                    className="figma-input h-full min-h-[120px] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-orange-glow w-full sm:w-auto px-10 py-3.5 rounded-full text-base font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-950/40 border border-emerald-800/60 px-4 py-2 rounded-xl"
                >
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
