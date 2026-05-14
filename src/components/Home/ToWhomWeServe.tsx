import { useEffect, useState } from 'react';
import { 
  Building2, 
  Wrench, 
  Users, 
  Briefcase, 
  Building, 
  Landmark,
} from 'lucide-react';
import { AnimatedCard } from '../AnimatedCard';
import { useTheme } from '../../contexts/ThemeContext';
const clients = [
  {
    icon: Building2,
    title: 'Structural Engineers',
    description: 'We provide complete solutions to Structural Engineers in their CAD and 3D modeling requirements. As a trusted structural engineering company, we understand the specific needs of structural engineers.',
  },
  {
    icon: Wrench,
    title: 'Steel Fabricators',
    description: 'We provide a helping hand to Steel Fabricators in their shop drawings and erection drawings requirement. Our structural CAD and BIM services are tailored to meet the needs of steel fabricators.',
  },
  {
    icon: Users,
    title: 'Steel Erectors',
    description: 'We offer complete solutions to Steel Erectors, including purchasing materials, managing materials, and the fabrication process. Our structural engineering outsourcing services are designed to support steel erectors in their projects.',
  },
  {
    icon: Briefcase,
    title: 'General Contractors',
    description: 'Our solutions are steady, accurate, and save time & money for General Contractors. As a trusted structural engineering company, our 2D and 3D CAD services provide value for money.',
  },
  {
    icon: Building,
    title: 'Engineering Companies',
    description: 'We work as a partner with Engineering Companies to ease their work pressure. Our structural engineering solutions match the working standards and we work hard to fulfill their requirements.',
  },
  {
    icon: Landmark,
    title: 'Constructions/Architectural Firms',
    description: 'We cater to different services to help Architectural and Construction firms meet their 2D CAD or 3D modelling requirements. As a trusted structural engineering company, we provide comprehensive support.',
  },
];

export default function ToWhomWeServe() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('to-whom-we-serve');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="to-whom-we-serve" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Clients
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            To Whom We Serve
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto mb-6 transition-colors duration-300`}>
            We provide comprehensive structural steel engineering solutions to diverse industries and professionals worldwide.
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <AnimatedCard
                  title={client.title}
                  description={client.description}
                  Icon={Icon}
                  index={idx}
                  primaryColor="#DD1111"
                  accentColor="#ff3333"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

