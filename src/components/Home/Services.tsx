import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Wrench, Calculator } from 'lucide-react';
import { AnimatedServiceCard } from '../AnimatedServiceCard';
import { useTheme } from '../../contexts/ThemeContext';

const services = [
  {
    title: 'Structural Steel Detailing',
    description: 'GA drawings, shop drawings, fabrication documents, CNC files, bolt & weld lists with QC-backed accuracy.',
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/3-4254478.png?format=webp',
    icon: FileText,
    features: ['GA & Shop Drawings', 'CNC Files', 'Bolt & Weld Lists', 'QC-Backed Accuracy'],
    link: '/services/structural-steel-detailing',
  },
  {
    title: 'Structural Steel Design',
    description: 'Code-based steel design including load calculations, member sizing, and stability engineering using licensed software.',
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/5-4254478.png?format=webp',
    icon: Wrench,
    features: ['Load Calculations', 'Member Sizing', 'Stability Engineering', 'Licensed Software'],
    link: '/services/steel-design',
  },
  {
    title: 'Connection Design',
    description: 'Bolted & welded connection design, base plates, moment/shear connections, and code-compliant reports.',
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/4-4254478.png?format=webp',
    icon: CheckCircle2,
    features: ['Bolted Connections', 'Welded Connections', 'Base Plates', 'Code-Compliant Reports'],
    link: '/services/connection-design',
  },
  {
    title: 'Estimation & Material Take-Off',
    description: 'Accurate quantity extraction, MTO sheets, steel weight calculations, and cost estimation for all project sizes.',
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/1-4254477.png?format=webp',
    icon: Calculator,
    features: ['Quantity Extraction', 'MTO Sheets', 'Weight Calculations', 'Cost Estimation'],
    link: '/services/steel-fabrication',
  },
];

export default function Services() {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleServices((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-service-item]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} relative overflow-hidden transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            What We Offer
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            Our Services
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto mb-6 transition-colors duration-300`}>
            Comprehensive structural steel solutions from concept to fabrication
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto"></div>
        </div>

        <div className="space-y-24">
          {services.map((service, idx) => {
            const isVisible = visibleServices.includes(idx);
            const isEven = idx % 2 === 0; // Alternate: even = image left, odd = image right
            const Icon = service.icon;

            return (
              <div
                key={idx}
                data-service-item
                data-index={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image - Left for even, Right for odd */}
                <div
                  className={`relative ${
                    !isEven ? 'lg:col-start-2' : ''
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`relative ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-xl overflow-hidden shadow-lg transition-colors duration-300`}>
                    <img
                      src={service.image}
                      alt={`${service.title} - structural steel detailing service`}
                      loading="lazy"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                </div>

                {/* Content - Right for even, Left for odd */}
                <div
                  className={`${
                    !isEven ? 'lg:col-start-1 lg:row-start-1' : ''
                  } transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                >
                  <AnimatedServiceCard index={idx}>
                    <div className="max-w-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red/20 transition-colors duration-300">
                          <Icon size={24} className="text-brand-red group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
                          Service {idx + 1}
                        </span>
                      </div>
                      
                      <h3 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 leading-tight group-hover:text-brand-red transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      
                      <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 text-lg ${!isLight ? 'group-hover:text-white/90' : ''} transition-colors duration-300`}>
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center gap-2 group-hover/item:translate-x-1 transition-transform duration-300">
                            <CheckCircle2 size={18} className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className={`${isLight ? 'text-gray-900' : 'text-white'} text-sm font-medium transition-colors duration-300`}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={service.link} className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red/90 hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/50" data-testid={`link-service-${idx}`}>
                        Know More
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </AnimatedServiceCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
