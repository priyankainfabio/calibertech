import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Award, Target, Globe,  Building2, Shield, Zap, Heart, Eye, Server, Briefcase, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMetaTags, setCanonical, setStructuredData, getOrganizationSchema, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';

const stats = [
  { value: '21+', label: 'Years of Experience', icon: Award },
  { value: '4000+', label: 'Projects Completed', icon: Building2 },
  { value: '15+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction', icon: Heart },
];

const whyUs = [
  {
    icon: Eye,
    title: 'Exposure',
    description: 'We are proud to say that our valued clients are world renowned EPC companies, structural steel fabricators, erectors and even some steel detailing companies in Japan, UAE & other Middle East countries, Europe, Australia, North America and Canada, even South Africa.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'High end hardware, licensed software for design & detailing gives us the ability to deliver faster and more efficiently.',
  },
  {
    icon: Briefcase,
    title: 'Strategy',
    description: 'Our project managers discuss strategies in consultation with the clients for each project, ensuring tailored solutions.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Our in-house Quality Control Division ensures error-free, hi-quality design calculations and detail drawings.',
  },
  {
    icon: Heart,
    title: 'Total Customer Satisfaction',
    description: 'We believe and practice the mantra of "Total Customer Satisfaction" in every project we undertake.',
  },
  {
    icon: Zap,
    title: 'Technology-Driven',
    description: 'We leverage cutting-edge technology and licensed software to deliver innovative structural steel solutions.',
  },
  {
    icon: Target,
    title: 'Global Excellence',
    description: 'Committed to delivering high-quality Structural Steel Design and Detailing Solutions to clients across the Globe.',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    setMetaTags(
      'About Caliber Tech Solutions | Tekla Steel Detailing Experts & North America Steel Partner',
      'Caliber Tech Solutions is a leading Tekla steel detailing company with 21+ years serving North America. We provide structural steel detailing services, BIM 3D modeling, shop drawings, and fabrication-ready drawings.',
      'about caliber tech solutions, Tekla steel detailing experts, North America steel detailing partner, structural steel company, steel engineering experts'
    );
    setCanonical('/about');
    setStructuredData([
      getWebPageSchema(
        'About Caliber Tech Solutions | Tekla Steel Detailing Experts & North America Steel Partner',
        'Caliber Tech Solutions is a leading Tekla steel detailing company with 21+ years serving North America. We provide structural steel detailing services, BIM 3D modeling, shop drawings, and fabrication-ready drawings.',
        '/about'
      ),
      getOrganizationSchema(),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]),
    ]);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('about-hero');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section id="about-hero" className={`relative py-16 sm:py-20 md:py-24 lg:py-32 ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} overflow-hidden transition-colors duration-300`}>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
              Forward-Looking
              <span className="block text-brand-red mt-2">Engineering Excellence</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className={`text-xl md:text-2xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto transition-colors duration-300`}>
                Delivering high quality Structural Steel Design and Detailing Solutions to esteemed clients across the globe
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-xl group`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                      <Icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-brand-red mb-2">{stat.value}</p>
                    <p className={`text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} relative overflow-hidden transition-colors duration-300`}>
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(221, 17, 17, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(221, 17, 17, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-red rounded-2xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
                <img 
                  src="https://tse1.mm.bing.net/th/id/OIP.0FMtTEaiI9pcH9J3PGQ-eQHaHa?cb=ucfimg2&ucfimg=1&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Caliber Tech Solutions structural steel detailing team - Tekla experts serving North America" 
                  className="relative w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-brand-red font-semibold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mt-2 mb-6 transition-colors duration-300`}>
                Caliber Tech Solutions
              </h2>
              <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                Caliber Tech Solutions is a forward-looking organization geared at delivering high quality Structural Steel Design and Detailing Solutions. We are preferred outsourcing partners for Design, Connection Design, 3D Modeling and Detailing for our esteemed clients across the globe.
              </p>
              <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                In addition to structural steel design and detailing, Caliber has now added Structural steel fabrication services. With our new partnerships for providing structural steel and piping fabrication, Caliber Tech Solutions is providing Structural Steel Design, Detailing and Fabrication services to our clients across the globe.
              </p>
              <div className={`${isLight ? 'bg-brand-red/5 border-brand-red/20' : 'bg-brand-red/10 border-brand-red/30'} p-6 rounded-xl border-2 mb-6`}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`text-lg font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                      Quality Control Division
                    </h3>
                    <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                      The in-house 'Quality Control Division' ensures error-free, hi-quality design calculations and detail drawings.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${isLight ? 'bg-gradient-to-r from-brand-red/10 to-red-50 border-brand-red/30' : 'bg-gradient-to-r from-brand-red/20 to-red-900/20 border-brand-red/40'} p-6 rounded-xl border-2 mb-8`}>
                <div className="flex items-center gap-3">
                  <Star size={28} className="text-brand-red flex-shrink-0" />
                  <p className={`text-lg font-semibold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                    "Total Customer Satisfaction" - Our Mantra
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Structural Steel Design', 'Connection Design', '3D Modeling', 'Steel Detailing', 'Steel Fabrication', 'Piping Fabrication'].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-brand-red flex-shrink-0" />
                    <span className={`${isLight ? 'text-gray-900' : 'text-white'} font-medium transition-colors duration-300`}>{service}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Get In Touch
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Advantages
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Why Choose Us
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              What sets us apart in the global structural steel engineering industry
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 rounded-xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-xl group`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <Icon size={32} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                    {item.title}
                  </h3>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Foundation
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Our Core Values
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`${isLight ? 'bg-gradient-to-br from-white to-gray-50 border-gray-300' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary border-dark-border'} p-8 rounded-xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-xl group`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <Icon size={32} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 transition-colors duration-300`}>
                    {value.title}
                  </h3>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} relative overflow-hidden transition-colors duration-300`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Purpose
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Mission & Vision
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              Our commitment to excellence and global impact
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 md:p-10 rounded-2xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-2xl`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <Target size={32} className="text-brand-red" />
                </div>
                <h3 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                  Our Mission
                </h3>
              </div>
              <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
                To be a <span className="font-bold text-brand-red">Super Engineering Solutions' provider</span> to global clients who seek to adopt new technologies in outsourced engineering design and detailing.
              </p>
            </div>

            {/* Vision */}
            <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 md:p-10 rounded-2xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-2xl`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <Eye size={32} className="text-brand-red" />
                </div>
                <h3 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                  Our Vision
                </h3>
              </div>
              <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 leading-relaxed transition-colors duration-300`}>
                To be a <span className="font-bold text-brand-red">Globally-acclaimed Technology-driven Engineering Company</span> with:
              </p>
              <ul className="space-y-3">
                {[
                  'Extraordinary human resources',
                  'Prime client satisfaction in terms of quality and commitment',
                  'Studied determination to enhance the quality of life for mankind'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-red flex-shrink-0 mt-1" />
                    <span className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isLight ? 'bg-gradient-to-br from-brand-red/10 to-red-50 border-brand-red/30' : 'bg-gradient-to-br from-brand-red/20 to-red-900/20 border-brand-red/40'} p-10 md:p-12 rounded-2xl border-2`}>
            <CheckCircle2 size={48} className="text-brand-red mx-auto mb-6" />
            <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
              Our Commitment
            </h2>
            <p className={`text-xl md:text-2xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
              <span className="font-bold text-brand-red">Caliber Tech Solutions®</span> is committed to delivering high-quality Structural Steel Design and Detailing Solutions to our esteemed clients across the Globe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your structural steel project to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

