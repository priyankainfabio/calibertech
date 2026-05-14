import { useRef, useEffect, ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AnimatedServiceCardProps {
  children: ReactNode;
  index: number;
  primaryColor?: string;
  accentColor?: string;
}

export function AnimatedServiceCard({
  children,
  index,
  primaryColor = '#DD1111',
  accentColor = '#ff3333',
}: AnimatedServiceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // 3D Tilt Effect - Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 30; // Less sensitive for service cards
      const rotateY = (centerX - x) / 30;

      if (card.matches(':hover')) {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      }
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="group relative">
      {/* Glow Border Effect */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, ${primaryColor}, ${accentColor}, ${primaryColor})`
        }}
      ></div>
      
      {/* Main Content Card */}
      <div 
        ref={cardRef}
        className={`relative ${isLight ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary'} backdrop-blur-xl rounded-xl p-6 transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(221,17,17,0.3)]`}
        style={{
          transformStyle: 'preserve-3d',
        }}
        onMouseLeave={() => {
          if (cardRef.current) {
            cardRef.current.style.transform = '';
          }
        }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl">
          <div 
            className="absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(to bottom right, ${primaryColor}15, transparent, ${accentColor}15)`
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Shine Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
      </div>
    </div>
  );
}
