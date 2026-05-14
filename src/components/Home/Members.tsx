import { useEffect, useState } from 'react';
import { Award, Shield, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Members() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('members-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const memberships = [
    { name: 'AISC Member', desc: 'American Institute of Steel Construction' },
    { name: 'NISD Member', desc: 'National Institute of Steel Detailing' },
    { name: 'Certified Professional', desc: 'Quality Assured Engineering' },
  ];

  return (
    <section id="members-section" className={`py-12 sm:py-16 md:py-20 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-brand-red font-medium text-xs uppercase tracking-wider mb-3 block">
              Memberships & Certifications
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} leading-tight mb-6 transition-colors duration-300`}>
              Trusted Industry Partners
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              We are proud members of leading industry organizations, demonstrating our commitment to excellence and quality standards.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Industry Recognition
                </h3>
                <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                  As certified members of prestigious industry organizations, we adhere to the highest standards in structural steel engineering and detailing. Our memberships reflect our dedication to professional excellence and continuous improvement.
                </p>
              </div>

              {/* Memberships List */}
              <div className="space-y-4">
                {memberships.map((member, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 size={20} className="text-brand-red flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-1 transition-colors duration-300`}>{member.name}</h4>
                      <p className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className={`pt-6 border-t ${isLight ? 'border-gray-300' : 'border-dark-border'} transition-colors duration-300`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-brand-red" />
                    <span className={`text-sm ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>Quality Standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-brand-red" />
                    <span className={`text-sm ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>Industry Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Certification Images */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className={`relative ${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-lg p-6 shadow-lg border transition-colors duration-300`}>
                  <img
                    src="https://www.poligon.com/hubfs/AISC_Classic.jpg"
                    alt="AISC Certification - American Institute of Steel Construction"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className={`relative ${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-lg p-6 shadow-lg border transition-colors duration-300`}>
                  <img
                    src="https://tse1.mm.bing.net/th/id/OIP.6E_YXOVFi-Rz8YbIXANp2AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="NISD Certification - National Institute of Steel Detailing"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

