'use client';
import React, { useState, useEffect, useCallback } from 'react';

const LogoMarquee = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const handleKeyPress = useCallback((e) => {
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) setIsVertical(true);
    if (['ArrowLeft', 'ArrowRight'].includes(e.key)) setIsVertical(false);
  }, []);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="relative my-16">
      <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl font-bold text-center py-12">Skills</h2>
      <style jsx global>{`
        @keyframes scroll-x {
          from { transform: translateX(var(--scroll-start)); }
          to { transform: translateX(var(--scroll-end)); }
        }

        @keyframes scroll-y {
          from { transform: translateY(var(--scroll-start)); }
          to { transform: translateY(var(--scroll-end)); }
        }

        .marquee {
          --duration: 60s;
          --gap: clamp(1rem, 2vw, 2rem);
          --scroll-start: 0;
          --scroll-end: calc(-100% - var(--gap));
          
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: var(--gap);
          mask-image: linear-gradient(
            var(--mask-direction, to right),
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .marquee__group {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%;
          animation: scroll-x var(--duration) linear infinite;
        }

        .marquee__group:hover,
        .marquee__group:focus {
          animation-play-state: paused;
        }

        .marquee--vertical {
          --mask-direction: to bottom;
        }

        .marquee--vertical,
        .marquee--vertical .marquee__group {
          flex-direction: column;
        }

        .marquee--vertical .marquee__group {
          animation-name: scroll-y;
        }

        .marquee--reverse .marquee__group {
          animation-direction: reverse;
          animation-delay: calc(var(--duration) / -2);
        }
      `}</style>

      <button 
        className="fixed top-4 left-4 z-10 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        onClick={() => setIsVertical(!isVertical)}
        aria-label={`Switch to ${isVertical ? 'horizontal' : 'vertical'} scroll`}
      >
        <svg 
          className={`w-6 h-6 transition-transform ${isVertical ? 'rotate-90' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7h12m-12 5h12m-12 5h12M4 7l-1 1 1 1m-1 3l1 1-1 1m-1 3l1 1-1 1" 
          />
        </svg>
      </button>

      <div 
        className={`wrapper ${isVertical ? 'h-screen flex-row' : 'w-full flex-col'} flex gap-8 m-auto max-w-screen-xl p-4`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`marquee ${isVertical ? 'marquee--vertical' : ''}`}>
          <div className="marquee__group">
            <LogoGroup />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <LogoGroup />
          </div>
        </div>

        <div className={`marquee marquee--reverse ${isVertical ? 'marquee--vertical' : ''}`}>
          <div className="marquee__group">
            <LogoGroup reverse />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <LogoGroup reverse />
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoGroup = ({ reverse }) => {
  const logos = [
    { id: 'react', label: 'React', path: '/0.png' },
    { id: 'tailwind', label: 'Tailwind CSS', path: '/2.png' },
    { id: 'html5', label: 'HTML5', path: '/1.png' },
    { id: 'Next', label: 'Next', path: '/3.png' },
    { id: 'mongodb', label: 'MongoDB', path: '/4.svg' },
    { id: 'dj', label: 'dj', path: '/5.svg' },
    { id: 'mySQL', label: 'mySQL', path: '/6.svg' },
    { id: 'python', label: 'python', path: '/7.svg' },
    { id: 'jupyter', label: 'jupyter', path: '/8.svg' },
    { id: 'vscode', label: 'VScode', path: '/9.svg' }
  ];
  
  const orderedLogos = reverse ? [...logos].reverse() : logos;

  return orderedLogos.map(({ id, label, path }) => (
    <div 
      key={id}
      className="w-24 h-24 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
    >
      <img 
        src={path}
        alt={label}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  ));
};

export default LogoMarquee;