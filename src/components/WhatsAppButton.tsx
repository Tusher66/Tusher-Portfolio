import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/8801754343120?text=Hi%20Ismail,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!';

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip Label */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 bg-[#1e1e1e] border border-neutral-700 text-white text-xs font-semibold rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Chat on WhatsApp
      </div>

      {/* Floating Button with Ripple Glow */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+880 1754-343120)"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-shadow cursor-pointer"
      >
        {/* Pulse Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <FaWhatsapp />
      </motion.a>
    </div>
  );
}
