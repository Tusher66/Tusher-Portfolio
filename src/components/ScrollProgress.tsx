import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById('horizontal-container');
    if (!container) return;

    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 0) {
          setProgress(container.scrollLeft / maxScroll);
        }
      } else {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll > 0) {
          setProgress(window.scrollY / maxScroll);
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `scaleX(${progress})`,
        backgroundColor: 'var(--accent-color)',
      }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left transition-transform duration-75"
    />
  );
}
