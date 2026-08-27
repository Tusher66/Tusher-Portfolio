interface LogoProps {
  showSubtitle?: boolean;
  className?: string;
}

export default function Logo({ showSubtitle = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Monogram Icon Mark */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#242424] via-[#1a1a1a] to-[#121212] border border-neutral-700/80 group-hover:border-orange-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(253,92,2,0.4)]">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-3"
        >
          {/* Outer Geometric Frame with Orange Accent */}
          <path
            d="M9 14L14 9H26L31 14V26L26 31H14L9 26V14Z"
            stroke="#FD5C02"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          />
          {/* Stylized 'T' Symbol for Tusher */}
          <path
            d="M14 15.5H26M20 15.5V26"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Orange Accent Spark Dot */}
          <circle cx="26" cy="15.5" r="2.2" fill="#FD5C02" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center font-extrabold tracking-wider text-xl sm:text-2xl text-white leading-none">
          <span>TUSHER</span>
          <span className="text-orange-accent font-black animate-pulse">.</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-[0.16em] uppercase text-neutral-400 font-mono mt-0.5 group-hover:text-neutral-300 transition-colors">
            SOFTWARE ENGINEER
          </span>
        )}
      </div>
    </div>
  );
}
