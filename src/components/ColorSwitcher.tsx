import { useState, useEffect } from 'react';
import { FaCog, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export interface ThemeColor {
  name: string;
  color: string;
  hover: string;
  glow: string;
}

export const themeColors: ThemeColor[] = [
  { name: 'Yellow (Salimov Gold)', color: '#ffb400', hover: '#e6a200', glow: 'rgba(255, 180, 0, 0.35)' },
  { name: 'Vibrant Orange', color: '#fd5c02', hover: '#e04e00', glow: 'rgba(253, 92, 2, 0.35)' },
  { name: 'Emerald Green', color: '#72b626', hover: '#629e20', glow: 'rgba(114, 182, 38, 0.35)' },
  { name: 'Royal Blue', color: '#2b56f5', hover: '#1f44cc', glow: 'rgba(43, 86, 245, 0.35)' },
  { name: 'Neon Purple', color: '#da39e6', hover: '#b82ec2', glow: 'rgba(218, 57, 230, 0.35)' },
  { name: 'Crimson Red', color: '#fa5b0f', hover: '#d94b08', glow: 'rgba(250, 91, 15, 0.35)' },
];

export default function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('#ffb400');

  useEffect(() => {
    const saved = localStorage.getItem('salimov_theme_color');
    const initialColor = saved || '#ffb400';
    applyThemeColor(initialColor);
  }, []);

  const applyThemeColor = (colorHex: string) => {
    setActiveColor(colorHex);
    localStorage.setItem('salimov_theme_color', colorHex);
    const theme = themeColors.find((t) => t.color === colorHex) || themeColors[0];
    
    document.documentElement.style.setProperty('--accent-color', theme.color);
    document.documentElement.style.setProperty('--accent-hover', theme.hover);
    document.documentElement.style.setProperty('--accent-glow', theme.glow);
    document.documentElement.style.setProperty('--border-accent', `${theme.color}66`);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      {/* Floating Gear Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Color Switcher"
        className="w-11 h-11 rounded-full bg-[#252525] border border-white/15 text-white flex items-center justify-center shadow-2xl hover:border-accent transition-all cursor-pointer group"
      >
        <FaCog
          className={`text-lg text-neutral-300 group-hover:text-accent transition-transform duration-500 ${
            isOpen ? 'rotate-90 text-accent' : 'group-hover:rotate-45'
          }`}
        />
      </button>

      {/* Popout Panel on Right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-13 right-0 w-60 bg-[#1e1e1e] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-2.5 border-b border-white/10 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Theme Accent
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white text-xs cursor-pointer p-1"
              >
                <FaTimes />
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 mb-2.5">
              Choose your preferred accent color:
            </p>

            <div className="grid grid-cols-3 gap-2">
              {themeColors.map((theme) => {
                const isSelected = activeColor === theme.color;
                return (
                  <button
                    key={theme.color}
                    onClick={() => applyThemeColor(theme.color)}
                    title={theme.name}
                    style={{ backgroundColor: theme.color }}
                    className={`h-8 rounded-lg transition-all flex items-center justify-center cursor-pointer shadow-md ${
                      isSelected
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1e1e1e] scale-105'
                        : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
