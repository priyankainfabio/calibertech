import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ChevronRight, Phone, Mail, X, ChevronLeft, ChevronRight as ChevronRightIcon, Grid, Layers, Ruler } from 'lucide-react';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';

const isometricImages = [
  {
    id: 11,
    src: '/images/isometric/11.jpg',
    title: 'Steel Frame Isometric View - Project 1',
    description: 'Detailed isometric view showing structural steel framing and connections',
  },
  {
    id: 12,
    src: '/images/isometric/12.jpg',
    title: 'Steel Frame Isometric View - Project 2',
    description: 'Complete isometric rendering of steel structure with member details',
  },
  {
    id: 13,
    src: '/images/isometric/13.jpg',
    title: 'Steel Frame Isometric View - Project 3',
    description: 'Isometric perspective of structural steel assembly and layout',
  },
  {
    id: 14,
    src: '/images/isometric/14.jpg',
    title: 'Steel Frame Isometric View - Project 4',
    description: 'Detailed isometric model showing steel connections and bracing',
  },
  {
    id: 15,
    src: '/images/isometric/15.jpg',
    title: 'Steel Frame Isometric View - Project 5',
    description: 'Isometric view of complete structural steel framework',
  },
  {
    id: 16,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/9-3286296.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 6',
    description: 'Isometric projection of structural steel assembly with detailed member layout',
  },
  {
    id: 17,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/3-3286296.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 7',
    description: 'Comprehensive isometric view showcasing steel framing and connection details',
  },
  {
    id: 18,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/1-3286297.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 8',
    description: 'Detailed 3D model isometric view of complete structural steel framework',
  },
  {
    id: 19,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/4-3286297.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 9',
    description: 'Isometric rendering showing steel members, bracing, and connection points',
  },
  {
    id: 20,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/10-3286297.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 10',
    description: 'Full structural isometric view with annotated member and connection details',
  },
  {
    id: 21,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/Cowell-Jaguar-Landrover-Isometri-3286297.webp?format=webp',
    title: 'Cowell Jaguar Land Rover - Isometric View',
    description: 'Isometric view of structural steel detailing for the Cowell Jaguar Land Rover facility',
  },
  {
    id: 22,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/Cowell-Auto-Audi-ISOMETRIC-3286298.webp?format=webp',
    title: 'Cowell Auto Audi - Isometric View',
    description: 'Detailed isometric model of structural steelwork for the Cowell Auto Audi project',
  },
  {
    id: 23,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/8-3286298.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 13',
    description: 'Isometric projection highlighting structural steel framing and load paths',
  },
  {
    id: 24,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/7-3286298.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 14',
    description: 'High-resolution isometric view of steel structure for fabrication coordination',
  },
  {
    id: 25,
    src: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/5-3286299.webp?format=webp',
    title: 'Structural Steel Isometric View - Project 15',
    description: 'Complete isometric model view of structural steel assembly and member schedule',
  },
];

const capabilities = [
  {
    icon: Grid,
    title: 'Isometric Projections',
    description: 'Precise isometric views of 3D models showing all structural elements from optimal angles.',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Views',
    description: 'Layered isometric drawings revealing structural connections, bracing, and member details.',
  },
  {
    icon: Eye,
    title: 'Visual Clarity',
    description: 'High-resolution isometric renders for clear communication of design intent to all stakeholders.',
  },
  {
    icon: Ruler,
    title: 'Accurate Dimensions',
    description: 'Dimensionally accurate isometric views for verification and coordination purposes.',
  },
];

export default function IsometricViews() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMetaTags(
      'Isometric Views | Steel Detailing Portfolio | Caliber Tech Solutions',
      'Explore isometric views of 3D Structures models from Caliber Tech Solutions. View detailed isometric projections of structural steel projects including commercial, industrial, and residential buildings.',
      'isometric views, 3D Structures models, steel detailing portfolio, structural steel isometric, BIM 3D steel modeling, Tekla steel detailing experts, steel frame isometric views'
    );
    setCanonical('/steel-detailing-portfolio/isometric-views');
    setStructuredData([
      getWebPageSchema(
        'Isometric Views | Steel Detailing Portfolio | Caliber Tech Solutions',
        'Explore isometric views of 3D Structures models from Caliber Tech Solutions. View detailed isometric projections of structural steel projects.',
        '/steel-detailing-portfolio/isometric-views'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Steel Design Services', url: '/services/steel-design' },
        { name: 'Isometric Views', url: '/steel-detailing-portfolio/isometric-views' },
      ]),
    ]);
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? isometricImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === isometricImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => (prev === 0 ? isometricImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => (prev === isometricImages.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/isometric/12.jpg"
            alt="Isometric views of 3D Structures steel models for structural steel detailing"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isLight ? 'bg-black/60' : 'bg-black/75'}`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <Link to="/services/steel-design" className="hover:text-white transition-colors">Steel Design</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Isometric Views</span>
          </nav>

          <div className="text-center">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-4 block">
              Steel Detailing Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Isometric Views
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Isometric views of 3D Structures Models
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`py-16 sm:py-20 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 rounded-xl border-2 mb-10 transition-colors duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                    <Eye size={24} className="text-brand-red" />
                  </div>
                  <h2 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                    Isometric View of 3D Structures Models
                  </h2>
                </div>
                <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-4 transition-colors duration-300`}>
                  Check out some of our 3D model isometric views. These detailed projections showcase the structural steel framing, connections, and member layouts from optimal viewing angles for clear communication and coordination.
                </p>
                <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
                  Isometric views are essential for visualizing complex steel structures, allowing engineers, fabricators, and erectors to understand the complete assembly before fabrication begins.
                </p>
              </div>

              {/* Image Gallery Grid */}
              <h2 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
                Isometric View Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {isometricImages.map((image, idx) => (
                  <div
                    key={image.id}
                    className={`group cursor-pointer overflow-hidden rounded-xl border-2 ${isLight ? 'border-gray-200 hover:border-brand-red/50' : 'border-dark-border hover:border-brand-red/50'} transition-all duration-300`}
                    onClick={() => openLightbox(idx)}
                    data-testid={`gallery-image-${image.id}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={`${image.title} - Caliber Tech Solutions steel detailing isometric projection`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-red text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                          <Eye size={16} />
                          View Full Size
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 ${isLight ? 'bg-gray-50' : 'bg-dark-bg-card'}`}>
                      <h3 className={`font-bold text-sm ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                        {image.title}
                      </h3>
                      <p className={`text-xs mt-1 ${isLight ? 'text-gray-500' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Links */}
              <div className={`mt-10 ${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 rounded-xl border-2 transition-colors duration-300`}>
                <h2 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Explore More
                </h2>
                <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                  Check out some of our{' '}
                  <Link to="/steel-detailing-portfolio/models" className="text-brand-red hover:text-red-700 font-semibold underline">3D model views</Link>,{' '}
                  <Link to="/steel-detailing-portfolio/models" className="text-brand-red hover:text-red-700 font-semibold underline">3D PDFs</Link>{' '}
                  of the 3D Structures models. For any quotations for Structural Steel{' '}
                  <Link to="/services/steel-design" className="text-brand-red hover:text-red-700 font-semibold underline">Design</Link>,{' '}
                  <Link to="/services/structural-steel-detailing" className="text-brand-red hover:text-red-700 font-semibold underline">Detailing</Link>,{' '}
                  <Link to="/services/pe-stamp" className="text-brand-red hover:text-red-700 font-semibold underline">Estimation</Link>{' '}
                  or{' '}
                  <Link to="/services/steel-fabrication" className="text-brand-red hover:text-red-700 font-semibold underline">Fabrication</Link>,{' '}
                  please share your details on our{' '}
                  <Link to="/contact" className="text-brand-red hover:text-red-700 font-semibold underline">contact page</Link>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to="/steel-detailing-portfolio/models"
                    className="group flex items-center gap-3 p-4 rounded-lg bg-brand-red/5 hover:bg-brand-red/10 transition-colors duration-300"
                  >
                    <ArrowRight size={18} className="text-brand-red group-hover:translate-x-1 transition-transform duration-300" />
                    <span className={`font-semibold ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                      3D Models view
                    </span>
                  </Link>
                  <Link
                    to="/projects"
                    className="group flex items-center gap-3 p-4 rounded-lg bg-brand-red/5 hover:bg-brand-red/10 transition-colors duration-300"
                  >
                    <ArrowRight size={18} className="text-brand-red group-hover:translate-x-1 transition-transform duration-300" />
                    <span className={`font-semibold ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                      View All Projects
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Capabilities */}
              <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 transition-colors duration-300`}>
                <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
                  Our Capabilities
                </h3>
                <div className="space-y-4">
                  {capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cap.icon size={18} className="text-brand-red" />
                      </div>
                      <div>
                        <h4 className={`font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                          {cap.title}
                        </h4>
                        <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className={`${isLight ? 'bg-gradient-to-br from-brand-red/10 to-red-50 border-brand-red/30' : 'bg-gradient-to-br from-brand-red/20 to-red-900/20 border-brand-red/40'} p-6 rounded-xl border-2 transition-colors duration-300`}>
                <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Related Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Structural Steel Detailing', href: '/services/structural-steel-detailing' },
                    { name: 'Steel Design Services', href: '/services/steel-design' },
                    { name: 'Connection Design', href: '/services/connection-design' },
                    { name: 'Steel Fabrication', href: '/services/steel-fabrication' },
                    { name: 'PE Stamp Services', href: '/services/pe-stamp' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className={`flex items-center gap-2 ${isLight ? 'text-gray-700 hover:text-brand-red' : 'text-dark-text-secondary hover:text-brand-red'} transition-colors duration-300 font-medium`}
                      >
                        <ChevronRight size={16} className="text-brand-red" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio Links */}
              <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 transition-colors duration-300`}>
                <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Our Portfolio
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: '3D Structure Models view', href: '/steel-detailing-portfolio/models' },
                    { name: 'Commercial Buildings', href: '/projects/commercial' },
                    { name: 'Industrial Facilities', href: '/projects/industrial' },
                    { name: 'Infrastructure Projects', href: '/projects/infrastructure' },
                    { name: 'Residential Projects', href: '/projects/residential' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className={`flex items-center gap-2 ${isLight ? 'text-gray-700 hover:text-brand-red' : 'text-dark-text-secondary hover:text-brand-red'} transition-colors duration-300 font-medium`}
                      >
                        <ChevronRight size={16} className="text-brand-red" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className={`${isLight ? 'bg-gradient-to-br from-brand-red to-red-700' : 'bg-gradient-to-br from-brand-red/90 to-red-800'} p-8 rounded-xl text-white transition-colors duration-300`}>
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="mb-6 text-white/90">
                  Contact us to discuss your project requirements and get a detailed quote for steel detailing services.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 w-full px-6 py-3 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 justify-center"
                  >
                    Request a Quote
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="tel:+17605882207"
                    className="group inline-flex items-center gap-2 w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 justify-center border-2 border-white/30"
                  >
                    <Phone size={18} />
                    Call Us
                  </a>
                  <a
                    href="mailto:info@calibertechsolutions.com"
                    className="group inline-flex items-center gap-2 w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 justify-center border-2 border-white/30"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Blog Links */}
              <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 transition-colors duration-300`}>
                <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Our Experience
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Outsourcing Of Design And Detailing: A Global Phenomenon', href: '/blog/outsourcing-design-detailing-global-phenomenon' },
                    { name: 'Why Steel Shop Drawings And Detailing Are Critical', href: '/blog/why-steel-shop-drawings-detailing-critical' },
                    { name: 'Outsourcing Design & Detailing Infographic', href: '/blog/outsourcing-design-detailing-infographic' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className={`flex items-start gap-2 ${isLight ? 'text-gray-700 hover:text-brand-red' : 'text-dark-text-secondary hover:text-brand-red'} transition-colors duration-300 font-medium text-sm`}
                      >
                        <ChevronRight size={14} className="text-brand-red flex-shrink-0 mt-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
            Let's discuss how we can help bring your structural steel project to life with expert Tekla modeling and detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50"
            data-testid="lightbox-close"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2 z-50"
            data-testid="lightbox-prev"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2 z-50"
            data-testid="lightbox-next"
          >
            <ChevronRightIcon size={40} />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={isometricImages[currentImageIndex].src}
              alt={isometricImages[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold text-lg">
                {isometricImages[currentImageIndex].title}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {currentImageIndex + 1} / {isometricImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
