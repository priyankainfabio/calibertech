import { Target, Eye, Zap, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const element = document.getElementById('mission-vision');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Shield, title: 'Quality', desc: 'Uncompromised standards' },
    { icon: Zap, title: 'Innovation', desc: 'Cutting-edge solutions' },
    { icon: TrendingUp, title: 'Excellence', desc: 'Continuous improvement' },
  ];

  return (
    <section id="mission-vision" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 ${isLight ? 'bg-gray-100' : 'bg-dark-bg-secondary'} overflow-hidden transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Foundation
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            Mission, Vision & Values
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto mb-6 transition-colors duration-300`}>
            The principles that guide our commitment to excellence and innovation
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto"></div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`relative h-full ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden group-hover:-translate-y-2`}>
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Target size={24} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors duration-300`}>
                      Our Mission
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed text-base mb-6 transition-colors duration-300`}>
                  Deliver <strong className={`${isLight ? 'text-gray-900' : 'text-white'} font-semibold transition-colors duration-300`}>precision-driven</strong> structural steel engineering solutions with accuracy, speed, and uncompromised quality to every project, regardless of scale or complexity.
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-brand-red/20 mb-6 group-hover:w-full group-hover:bg-brand-red/40 transition-all duration-300"></div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`relative h-full ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden group-hover:-translate-y-2`}>
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Eye size={24} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors duration-300`}>
                      Our Vision
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed text-base mb-6 transition-colors duration-300`}>
                  To be the <strong className={`${isLight ? 'text-gray-900' : 'text-white'} font-semibold transition-colors duration-300`}>global benchmark</strong> for technology-led structural steel design, detailing, and fabrication excellence, trusted by industry leaders worldwide.
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-brand-red/20 mb-6 group-hover:w-full group-hover:bg-brand-red/40 transition-all duration-300"></div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} text-center mb-12 transition-colors duration-300`}>Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`group text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
                >
                  <div className="relative inline-block mb-5">
                    <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 mx-auto">
                      <Icon size={32} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h4 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 group-hover:text-brand-red transition-colors duration-300`}>
                    {value.title}
                  </h4>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
