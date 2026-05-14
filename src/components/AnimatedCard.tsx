import { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AnimatedCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  index: number;
  // Optional custom colors
  primaryColor?: string;
  accentColor?: string;
}

export function AnimatedCard({
  title,
  description,
  Icon,
  index,
  primaryColor = '#DD1111', // brand red
  accentColor = '#ff3333', // lighter red
}: AnimatedCardProps) {
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
      const rotateX = (y - centerY) / 25; // Sensitivity: lower = more rotation
      const rotateY = (centerX - x) / 25;

      if (card.matches(':hover')) {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
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
      {/* 1. Glow Border Effect */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, ${primaryColor}80, ${accentColor}60, ${primaryColor}80)`
        }}
      ></div>
      
      {/* 2. Main Card - Theme Aware */}
      <div 
        ref={cardRef}
        className={`relative h-full ${isLight ? 'bg-white' : 'bg-dark-bg-card'} backdrop-blur-xl rounded-3xl p-8 shadow-2xl border transition-all duration-500 ease-out overflow-hidden cursor-pointer group-hover:shadow-[0_25px_70px_rgba(221,17,17,0.35)]`}
        style={{
          transformStyle: 'preserve-3d',
          borderColor: isLight ? '#E5E7EB' : `${primaryColor}20`,
        }}
        onMouseLeave={() => {
          if (cardRef.current) {
            cardRef.current.style.transform = '';
          }
        }}
      >
        {/* 3. Animated Gradient Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom right, ${primaryColor}1A, transparent, ${accentColor}1A)`
            }}
          ></div>
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            style={{ backgroundColor: `${primaryColor}1F` }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            style={{ backgroundColor: `${accentColor}14` }}
          ></div>
        </div>

        {/* 4. Icon with Glow Effects */}
        <div className="relative mb-8 mt-2">
          <div className="relative inline-block">
            {/* Glow Rings */}
            <div 
              className="absolute inset-0 rounded-2xl blur-2xl scale-125 opacity-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 animate-pulse"
              style={{ backgroundColor: `${primaryColor}4D` }}
            ></div>
            <div 
              className="absolute inset-0 rounded-xl blur-lg scale-110 opacity-40 group-hover:opacity-85 group-hover:scale-100 transition-all duration-500"
              style={{ backgroundColor: `${primaryColor}33` }}
            ></div>
            
            {/* Icon Container */}
            <div 
              className="relative w-20 h-20 rounded-2xl backdrop-blur-sm border flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700"
              style={{
                background: `linear-gradient(to bottom right, ${primaryColor}1F, ${primaryColor}0F, transparent)`,
                borderColor: `${primaryColor}20`, // Reduced from 33 (20%) to 20 (12%)
                transformStyle: 'preserve-3d',
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ boxShadow: `0 10px 30px ${primaryColor}66` }}
              ></div>
              <Icon 
                className="w-10 h-10 relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" 
                style={{ 
                  color: primaryColor,
                  filter: `drop-shadow(0 0 8px ${primaryColor}99)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 5. Content - Theme Aware */}
        <div className="relative z-10 space-y-4">
          <h3 
            className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-all duration-500 leading-tight group-hover:translate-x-1 group-hover:text-brand-red`}
          >
            {title}
          </h3>
          <p 
            className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-all duration-500 transform group-hover:translate-x-1 ${!isLight ? 'group-hover:text-white/90' : ''}`}
          >
            {description}
          </p>
        </div>

        {/* 6. Decorative Border Lines */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
          style={{
            background: `linear-gradient(to right, transparent, ${primaryColor}70, transparent)` // Reduced opacity to 70%
          }}
        ></div>
        <div 
          className="absolute left-0 top-0 bottom-0 w-1.5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"
          style={{
            background: `linear-gradient(to bottom, ${primaryColor}70, ${accentColor}50, ${primaryColor}70)` // Reduced opacity
          }}
        ></div>

        {/* 7. Corner Accents */}
        <div 
          className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full group-hover:scale-[2.5] group-hover:shadow-lg transition-all duration-500"
          style={{ 
            backgroundColor: `${primaryColor}66`,
          }}
        ></div>
        <div 
          className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full group-hover:scale-[3] group-hover:shadow-md transition-all duration-700"
          style={{ 
            backgroundColor: `${accentColor}4D`,
          }}
        ></div>

        {/* 8. Shine Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
}
