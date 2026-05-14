import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const detailingServices = [
  {
    imageUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/steel-2118770-1783029.png',
    title: 'Miscellaneous Steel',
    description: 'Our Miscellaneous steel detailing services includes assistance in providing accurate information for the set of services like rustic ornamental & miscellaneous steel, miscellaneous metalwork.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/68/68952.png',
    title: 'Stair and Handrail Detailing',
    description: 'The wide range of services includes rails for metal and concrete rails, stair stringers, ramp rails, wall rails, level handrails, stainless steel staircase railing designs, etc',
  },
  {
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/self-framing-metallic-building-1/100/building_metallic_framework_self-framing_house_metal_material-512.png',
    title: 'Joist Detailing',
    description: 'We have one of the best teams available with us in-house who are experienced and versatile in providing Joist Detailing services to its client with 100% accuracy and precision.',
  },
  {
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/precast-reinforced-concrete-elasto-font-next/16/precast-reinforced-concrete_--11-256.png',
    title: 'Precast Panel Detailing',
    description: 'We are the most trusted and reliable name in the industry when it comes to outsourcing precast panel detailing services worldwide. Our work includes precast concrete wall panel details, precast concrete facade detail, and more.',
  },
  {
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/50-construction-2/512/21_Construction_Site-1024.png',
    title: 'Pre Engineered Building',
    description: 'Our pre-engineered structural design is made with the intention of functional, aesthetic, and cost-effective. When it comes to PEB services, our range of services includes PEMB, pre-engineered steel buildings, PEB design, and more.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/8654/8654449.png',
    title: 'Steel Fabrication Detailing',
    description: 'Our Steel Fabrication Detailing process includes a variety of services like steel detailing drawings, steel detailing procedures, steel structure fabrication drawings, steel detailing fabrication drawings, and Tekla fabrication drawings.',
  },
  {
    imageUrl: 'https://icons.veryicon.com/png/o/construction-tools/supermap-gis-product-color-system-function/point-cloud-1.png',
    title: 'Point Cloud BIM Services',
    description: 'Connect with our team of experts who are trained in providing point cloud to BIM services. Our services include Construction Documentation, Architectural 3D Modeling, Revit BIM Modeling, BIM Design Development, and more.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1375/1375665.png',
    title: 'Curtain Wall Detailing',
    description: 'The only curtain wall detailing service provider is none other than us. Explore our services of Facade wall detailing services along with other such important services and get free quotes for the same at the best price.',
  },
];

export default function DetailingServices() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      // Check if already visible
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setIsVisible(true);
      }
      
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="detailing-services" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            HIGH-PERFORMANCE SERVICES FOR
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
            DETAILING SERVICES
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto leading-relaxed transition-colors duration-300`}>
            Our customized steel detailing solutions is representative of our commitment to quality and best results. The core focus here is quality drawings and designs for fabrication.
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {detailingServices.map((service, idx) => {
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
                <div className={`relative h-full ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden group-hover:-translate-y-2`}>
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Image */}
                  <div className="mb-5 flex justify-center relative">
                    <div className="w-20 h-20 bg-brand-red/10 rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300 border border-brand-red/20 p-3">
                      <img 
                        src={service.imageUrl} 
                        alt={`${service.title} - structural steel detailing service icon`}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 text-center group-hover:text-brand-red transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} text-sm leading-relaxed mb-6 text-center transition-colors duration-300`}>
                    {service.description}
                  </p>

                  <div className="flex justify-center mt-6 relative">
                    <Link to="/services" className="group/btn w-14 h-14 bg-brand-red rounded-full flex items-center justify-center hover:bg-brand-red/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl" data-testid={`link-detailing-${idx}`}>
                      <ArrowRight size={22} className="text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

