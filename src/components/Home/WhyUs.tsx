import { Check, Globe, Shield, Code, Zap, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const reasons = [
  {
    title: 'Global Experience with EPC & Fabricators',
    description: 'Extensive experience working with leading EPC contractors and steel fabricators worldwide',
    icon: Globe,
  },
  {
    title: 'Strong Quality Control Division',
    description: 'Dedicated QC team ensuring every deliverable meets international standards',
    icon: Shield,
  },
  {
    title: 'Licensed Engineering Software',
    description: 'Access to premium industry-standard software for accurate design and detailing',
    icon: Code,
  },
  {
    title: 'Fast, Accurate Delivery',
    description: 'Commitment to timely project delivery without compromising on accuracy',
    icon: Zap,
  },
  {
    title: 'Worldwide Project Execution Capability',
    description: 'Proven track record of successful projects across multiple continents',
    icon: MapPin,
  },
];

const bottomStats = [
  { number: 4000, suffix: '+', label: 'Projects Completed' },
  { number: 50, suffix: '+', label: 'Global Clients' },
  { number: 21, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
];

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: number]: number }>({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
        
        // Reset all counters to 0 first
        setCounters({ 0: 0, 1: 0, 2: 0, 3: 0 });
        
        // Start smooth counting animation for each stat
        bottomStats.forEach((stat, idx) => {
          const duration = 3000; // 3 seconds for smoother rolling effect
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation (ease-out-cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
            
            // Calculate current value based on progress
            const currentValue = Math.floor(stat.number * eased);
            
            setCounters((prev) => ({
              ...prev,
              [idx]: currentValue,
            }));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure final value is exactly set
              setCounters((prev) => ({
                ...prev,
                [idx]: stat.number,
              }));
            }
          };
          
          // Staggered delay for each stat to create cascading effect
          setTimeout(() => {
            requestAnimationFrame(animate);
          }, idx * 200);
        });
      } else if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const element = document.getElementById('why-us');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="why-us" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Advantages
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            Why Choose Us
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto mb-6 transition-colors duration-300`}>
            Discover what sets us apart in the structural steel engineering industry
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Card */}
                <div className={`relative h-full ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden group-hover:-translate-y-2`}>
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 flex-shrink-0 mt-1">
                        <Icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors duration-300`}>
                        {reason.title}
                      </h3>
                    </div>
                    
                    <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed text-sm mb-6 transition-colors duration-300`}>
                      {reason.description}
                    </p>
                    
                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-brand-red/20 mb-4 group-hover:w-full group-hover:bg-brand-red/40 transition-all duration-300"></div>
                    
                    {/* Check Badge */}
                    <div className="flex items-center gap-2 text-brand-red font-semibold text-sm transform group-hover:translate-x-1 transition-transform duration-300">
                      <Check size={18} className="bg-brand-red/10 rounded-full p-1 group-hover:bg-brand-red group-hover:text-white transition-all duration-300" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className={`mt-20 pt-16 border-t ${isLight ? 'border-gray-300' : 'border-dark-border'} transition-colors duration-300`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {bottomStats.map((stat, idx) => {
              // Always show counter value, starting from 0
              const displayNumber = counters[idx] || 0;
              return (
                <div
                  key={idx}
                  className={`text-center transition-all duration-700 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 group-hover:scale-110 transition-all duration-300 transform">
                    <span className="inline-block tabular-nums transition-all duration-200 ease-out">
                      {displayNumber}
                    </span>
                    <span className="inline-block">{stat.suffix}</span>
                  </div>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} font-medium text-sm transition-colors duration-300`}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
