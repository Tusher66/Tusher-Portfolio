import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          Subject: formData.subject || 'Portfolio Inquiry',
          Message: formData.message,
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
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setErrorMessage(
        'Unable to send message automatically. Please reach out directly at tusher66@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Tusher66', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ismail-hossain-tusher', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/8801754343120?text=Hi%20Ismail,%20I%20would%20like%20to%20connect!', label: 'WhatsApp' },
    { icon: <FaEnvelope />, href: 'mailto:tusher66@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="contact"
      className="horizontal-section-panel bg-[#111111]"
    >
      <div ref={ref} className="max-w-6xl w-full mx-auto my-auto">
        {/* Salimov Watermark Title */}
        <div className="salimov-title-wrap">
          <span className="salimov-watermark">CONTACT</span>
          <h2 className="salimov-heading">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-3">
              DON'T BE SHY !
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
              Feel free to get in touch with me. I am always open to discussing new software development projects, enterprise architectures, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-accent text-base shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    ADDRESS POINT
                  </span>
                  <span className="text-xs sm:text-sm text-white font-semibold">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-accent text-base shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    MAIL ME
                  </span>
                  <a
                    href="mailto:tusher66@gmail.com"
                    className="text-xs sm:text-sm text-white hover:text-accent font-semibold transition-colors"
                  >
                    tusher66@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-accent text-base shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    CALL / WHATSAPP
                  </span>
                  <a
                    href="https://wa.me/8801754343120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-white hover:text-accent font-semibold transition-colors"
                  >
                    +880 1754 343120
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#252525] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Salimov Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="salimov-input text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL"
                    className="salimov-input text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="YOUR SUBJECT"
                  className="salimov-input text-xs sm:text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE"
                  className="salimov-input salimov-textarea resize-none text-xs sm:text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="salimov-btn disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <span className="salimov-btn-icon">
                    <FaPaperPlane className="text-xs" />
                  </span>
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-400 text-xs font-semibold bg-emerald-950/40 border border-emerald-800/60 px-3.5 py-2 rounded-full"
                    >
                      <FaCheckCircle className="text-sm shrink-0" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-amber-400 text-xs font-semibold bg-amber-950/40 border border-amber-800/60 px-3.5 py-2 rounded-full"
                    >
                      <FaExclamationCircle className="text-sm shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
