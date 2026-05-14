import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Shield, FileCheck, Ruler, Settings, CheckCircle2, Layers, Monitor, Target } from 'lucide-react';

const qaItems = [
  {
    icon: Shield,
    title: 'AISC & OSHA Compliance',
    description: 'All deliverables comply with AISC standards, OSHA regulations, and applicable building codes',
  },
  {
    icon: FileCheck,
    title: 'Multi-Level QC Checks',
    description: 'Rigorous 3-tier quality control process — self-check, peer review, and senior engineer approval',
  },
  {
    icon: Ruler,
    title: 'Dimensional Accuracy',
    description: 'Precision detailing with tight tolerances verified through automated clash detection tools',
  },
  {
    icon: Settings,
    title: 'Licensed Software Stack',
    description: 'Tekla Structures, SDS/2, AutoCAD, and Advance Steel — fully licensed and always up to date',
  },
  {
    icon: Monitor,
    title: 'BIM LOD 300–400 Deliverables',
    description: 'Highly detailed 3D models suitable for fabrication, erection sequencing, and coordination',
  },
  {
    icon: Layers,
    title: 'CNC/DXF/KISS File Outputs',
    description: 'Machine-ready files exported directly from models for seamless fabrication workflows',
  },
  {
    icon: Target,
    title: 'RFI & Revision Tracking',
    description: 'Systematic RFI management and revision control with full audit trail documentation',
  },
  {
    icon: CheckCircle2,
    title: 'On-Time Delivery Guarantee',
    description: 'Dedicated project scheduling with milestone tracking to ensure deadline adherence',
  },
];

export default function QATechnical() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const el = document.getElementById('qa-technical');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="qa-technical" className={`py-12 sm:py-16 md:py-20 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            Standards & Excellence
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            QA & Technical Requirements
          </h2>
          <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto mb-6 transition-colors duration-300`}>
            Every project is backed by stringent quality assurance protocols and industry-leading technical standards
          </p>
          <div className="w-24 h-1 bg-brand-red rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qaItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-xl border transition-all duration-700 ${
                  isLight
                    ? 'bg-gray-50 border-gray-200 hover:bg-white hover:border-brand-red hover:shadow-xl'
                    : 'bg-dark-bg-card border-dark-border hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/5'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
                data-testid={`qa-item-${idx}`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className={`text-base font-bold mb-2 ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors duration-300`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
