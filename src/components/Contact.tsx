import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

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
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/tusher66@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          'Service of Interest': formData.service || 'General Inquiry',
          Timeline: formData.timeline || 'Not specified',
          'Project Details / Message': formData.details,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (
        response.ok &&
        (result.success === 'true' ||
          result.success === true ||
          result.message?.includes('success') ||
          response.status === 200)
      ) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          timeline: '',
          email: '',
          service: '',
          details: '',
        });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        'Unable to send automatically right now. Click below to open your email client.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallback = `mailto:tusher66@gmail.com?subject=Contact%20From%20${encodeURIComponent(
    formData.name || 'Portfolio Visitor'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.details}`
  )}`;

  const whatsappUrl =
    'https://wa.me/8801754343120?text=' +
    encodeURIComponent(
      formData.name
        ? `Hi Ismail Tusher, I am ${formData.name}. I would like to discuss: ${formData.details || 'a software engineering opportunity.'}`
        : 'Hi Ismail Tusher, I visited your portfolio and would like to connect about a software engineering project.'
    );

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

            {/* Bottom Submit & WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-orange-glow w-full sm:w-auto px-9 py-3.5 rounded-full text-base font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>

                {/* WhatsApp Chat Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:scale-105 cursor-pointer"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-950/40 border border-emerald-800/60 px-4 py-2 rounded-xl"
                  >
                    <FaCheckCircle className="text-base shrink-0" />
                    <span>Your message has been sent to tusher66@gmail.com!</span>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-amber-400 text-sm font-medium bg-amber-950/40 border border-amber-800/60 px-4 py-2 rounded-xl"
                  >
                    <div className="flex items-center gap-1.5">
                      <FaExclamationCircle className="text-base shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={mailtoFallback}
                      className="text-orange-accent underline hover:text-white font-semibold flex items-center gap-1"
                    >
                      <FaEnvelope className="text-xs" /> Send directly via Email
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
