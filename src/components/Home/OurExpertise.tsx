import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layers, ClipboardCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const expertise = [
  {
    icon: Layers,
    title: 'Structural Steel Detailing',
    description: 'Our professionals are zealous about working on any kind of structural steel detailing project. We have a highly skilled team comprising modelers, editors, checkers, and project leaders. As a trusted structural engineering company, we offer comprehensive detailing services with precision.',
    image: 'https://basteel-engineering.com/wp-content/uploads/2023/05/detailing-main.jpg',
    features: ['3D Modeling', 'Expert Team', 'Precision Detailing', 'Project Management'],
    link: '/services/structural-steel-detailing',
  },
  {
    icon: FileText,
    title: 'Steel Shop Drawings',
    description: 'We provide superior quality structural steel shop, miscellaneous steel shop, rebar shop, and precast shop drawings that are clear and meticulous to aid fabrication and erection processes. Our detailed drawings ensure accuracy and compliance with industry standards.',
    image: 'https://th.bing.com/th/id/OIP.YN1tpeYpZ5qzG0XC7Q28qQHaEL?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    features: ['Detailed Shop Drawings', 'Fabrication-Ready', 'Industry Standards', 'Quality Assurance'],
    link: '/services/steel-fabrication',
  },
  {
    icon: ClipboardCheck,
    title: '3D Modeling & BIM Services',
    description: 'We provide quicker, smoother, and accurate CAD conversion & construction documentation. Whether you have hand-drawn sketches, scan papers, images, or other formats, we have the platform to digitize them in CAD or 3D format with exceptional quality.',
    image: 'https://3dpointshot.com/img/service/bim-modelling.png',
    features: ['CAD Conversion', 'BIM Modeling', 'Digital Transformation', 'Quality Output'],
    link: '/services/steel-design',
  },
];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="our-expertise" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isLight ? 'bg-gray-50' : 'bg-dark-bg-secondary'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-brand-red font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Core Skills</span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mt-2 transition-colors duration-300`}>
            Areas of Expertise
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto sm:overflow-x-visible">
              {expertise.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(index)}
                  className={`w-full sm:w-auto lg:w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 whitespace-nowrap sm:whitespace-normal ${
                    activeTab === index
                      ? 'bg-brand-red text-white shadow-lg scale-105'
                      : isLight 
                        ? 'bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md border border-gray-200'
                        : 'bg-dark-bg-card text-dark-text-secondary hover:bg-dark-bg-tertiary hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 p-2 rounded-md ${activeTab === index ? 'bg-white/20' : 'bg-brand-red/10'}`}>
                      <item.icon size={20} className={`sm:w-6 sm:h-6 ${activeTab === index ? 'text-white' : 'text-brand-red'}`} />
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className={`transition-all duration-500 ${
                  activeTab === index 
                    ? 'opacity-100 block' 
                    : 'opacity-0 hidden lg:block lg:absolute lg:invisible'
                }`}
              >
                <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border transition-colors duration-300`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className={`text-2xl sm:text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 sm:mb-4 transition-colors duration-300`}>{item.title}</h3>
                      <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed transition-colors duration-300`}>{item.description}</p>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-0">
                        {item.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2 sm:gap-3">
                            <CheckCircle size={18} className={`sm:w-5 sm:h-5 text-green-500 flex-shrink-0`} />
                            <span className={`font-medium text-sm sm:text-base ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={item.link} className="group mt-6 sm:mt-8 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center" data-testid={`link-expertise-${index}`}>
                        Learn More
                        <ArrowRight size={18} className={`sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1`} />
                      </Link>
                    </div>
                    <div className="overflow-hidden rounded-lg order-1 md:order-2">
                      <img 
                        src={item.image} 
                        alt={`${item.title} - Caliber Tech steel detailing expertise`}
                        loading="lazy"
                        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
