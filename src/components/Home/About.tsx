import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const stats = [
  { value: '21+', label: 'Years of Experience' },
  { value: '4000+', label: 'Projects Completed' },
  { value: '15+', label: 'Countries Served' },
];

const coreServices = [
  'Structural Steel Design',
  'Connection Engineering',
  '3D Modeling & BIM',
  'Steel Detailing',
  'Fabrication Support',
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} relative overflow-hidden transition-colors duration-300`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(221, 17, 17, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(221, 17, 17, 0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Stats */}
          <div className="lg:col-span-5">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-red rounded-2xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.0FMtTEaiI9pcH9J3PGQ-eQHaHa?cb=ucfimg2&ucfimg=1&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Caliber Tech Solutions structural steel engineering team" 
                loading="lazy"
                className="relative w-full rounded-2xl shadow-2xl"
              />
              {/* Stats Overlay */}
              <div className={`absolute -bottom-8 -right-8 w-48 ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-brand-red'} p-4 rounded-xl shadow-lg border-2 transition-colors duration-300`}>
                {stats.map(stat => (
                  <div key={stat.label} className="text-center mb-2 last:mb-0">
                    <p className="text-3xl font-bold text-brand-red">{stat.value}</p>
                    <p className={`text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
              <span className="text-brand-red font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mt-2 mb-6 transition-colors duration-300`}>
                Pioneering Structural Steel Solutions Globally
              </h2>
              <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                Caliber Tech is a premier structural steel engineering and detailing company. We partner with EPC contractors, fabricators, and construction firms to deliver innovative solutions for complex projects across the globe.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {coreServices.map(service => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-brand-red" />
                    <span className={`${isLight ? 'text-gray-900' : 'text-white'} font-medium transition-colors duration-300`}>{service}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="group inline-flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105" data-testid="link-about-us">
                Learn More About Us
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
