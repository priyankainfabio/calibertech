import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, Eye, Box, ChevronRight, Phone, Mail } from 'lucide-react';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';

const teklaProjects = [
  {
    name: 'Hale Tombolo Residential Building',
    type: 'Residential',
    description: 'Complete 3D Tekla model of a residential building with detailed structural steel framing.',
    pdf: '/pdfs/Hale_Tombolo_Residence.pdf',
  },
  {
    name: 'Plaza Drive Office Buildings',
    type: 'Commercial',
    description: 'Multi-story office building complex with detailed steel connections and framing.',
    pdf: '/pdfs/Plaza_Drive.pdf',
  },
  {
    name: 'Queen Charlotte-Haida Gwaii Hospital',
    type: 'Healthcare',
    description: 'Hospital facility featuring complex steel structure with seismic design considerations.',
    pdf: '/pdfs/QCHG.pdf',
  },
  {
    name: 'Electric City Luxury Apartments',
    type: 'Residential',
    description: 'Luxury apartment complex with intricate steel detailing and modern architectural design.',
    pdf: '/pdfs/ECLA.pdf',
  },
  {
    name: 'CRG Citadel Outlets - Building 13',
    type: 'Commercial',
    description: 'Retail outlet building with open floor plans and large-span steel structures.',
    pdf: '/pdfs/Citadel.pdf',
  },
  {
    name: 'Nationwide Storage',
    type: 'Industrial',
    description: 'Industrial storage facility with optimized steel framing for maximum storage capacity.',
    pdf: '/pdfs/NWSST.pdf',
  },
];

const capabilities = [
  {
    icon: Box,
    title: '3D BIM Modeling',
    description: 'Full 3D Building Information Modeling using Tekla Structures for accurate project visualization.',
  },
  {
    icon: FileText,
    title: 'Shop Drawings',
    description: 'Fabrication-ready shop drawings generated directly from our detailed Tekla models.',
  },
  {
    icon: Eye,
    title: '3D PDF Views',
    description: 'Interactive 3D PDF documents allowing clients to explore models without specialized software.',
  },
  {
    icon: Download,
    title: 'CNC/DXF Output',
    description: 'Direct CNC and DXF data export for automated fabrication equipment.',
  },
];

export default function TeklaModels() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    setMetaTags(
      'Tekla Structure 3D Models | Steel Detailing Portfolio | Caliber Tech Solutions',
      'View Tekla Structure 3D models from Caliber Tech Solutions. Explore our steel detailing portfolio featuring BIM 3D modeling, shop drawings, and fabrication-ready steel drawings for commercial, industrial, and residential projects.',
      'Tekla Structure 3D models, steel detailing portfolio, BIM 3D steel modeling, Tekla steel detailing experts, structural steel detailing services, 3D PDF models, shop drawings'
    );
    setCanonical('/steel-detailing-portfolio/models');
    setStructuredData([
      getWebPageSchema(
        'Tekla Structure 3D Models | Steel Detailing Portfolio | Caliber Tech Solutions',
        'View Tekla Structure 3D models from Caliber Tech Solutions. Explore our steel detailing portfolio featuring BIM 3D modeling, shop drawings, and fabrication-ready steel drawings.',
        '/steel-detailing-portfolio/models'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Steel Design Services', url: '/services/steel-design' },
        { name: 'Tekla Structure 3D Models', url: '/steel-detailing-portfolio/models' },
      ]),
    ]);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hotpink-giraffe-187769.hostingersite.com/wp-content/uploads/2020/02/3DPDFModel.jpg"
            alt="Tekla Structure 3D models for structural steel detailing portfolio"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isLight ? 'bg-black/60' : 'bg-black/75'}`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <Link to="/services/steel-design" className="hover:text-white transition-colors">Steel Design</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Tekla 3D Models</span>
          </nav>

          <div className="text-center">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-4 block">
              Steel Detailing Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Tekla Structure 3D Models
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Explore our BIM 3D steel models created using Tekla Structures software
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 3D PDF Intro Section */}
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
                    View Tekla Models in 3D PDF
                  </h2>
                </div>
                <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-4 transition-colors duration-300`}>
                  3D PDF is a technology by Adobe used as an add-on by Tekla Structures to view 3D models in a PDF document. You can download the 3D PDFs of our Tekla structure models to view the project details.
                </p>
                <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                  Open the PDF files and use{' '}
                  <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-red-700 font-semibold underline">
                    Adobe Acrobat Reader DC
                  </a>{' '}
                  to view the 3D models. Adobe Acrobat Reader DC is a free 3D PDF viewer.
                </p>

                <div className={`flex items-start gap-3 p-4 rounded-lg ${isLight ? 'bg-brand-red/5 border border-brand-red/20' : 'bg-brand-red/10 border border-brand-red/30'}`}>
                  <Download size={20} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>
                    New to 3D PDF feature?{' '}
                    <a href="https://helpx.adobe.com/acrobat/using/enable-3d-content-pdf.html" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-red-700 font-semibold underline">
                      Click here for help
                    </a>{' '}
                    on how to enable 3D content in PDF documents.
                  </p>
                </div>
              </div>

              {/* Projects Table */}
              <h2 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
                Recent Tekla Structure Projects
              </h2>
              <div className="space-y-4">
                {teklaProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className={`group ${isLight ? 'bg-gray-50 border-gray-200 hover:border-brand-red/50 hover:bg-red-50/30' : 'bg-dark-bg-card border-dark-border hover:border-brand-red/50'} p-6 rounded-xl border-2 transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Box size={16} className="text-brand-red" />
                          </div>
                          <h3 className={`text-lg font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                            {project.name}
                          </h3>
                        </div>
                        <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} ml-11 mb-3 transition-colors duration-300`}>
                          {project.description}
                        </p>
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 ml-11 px-4 py-2 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                        >
                          <Download size={14} />
                          Download 3D PDF Model
                        </a>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                        project.type === 'Residential' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        project.type === 'Commercial' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        project.type === 'Healthcare' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                        'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {project.type}
                      </span>
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
                  For any quotations for Structural Steel{' '}
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
                    to="/steel-detailing-portfolio/isometric-views"
                    className="group flex items-center gap-3 p-4 rounded-lg bg-brand-red/5 hover:bg-brand-red/10 transition-colors duration-300"
                  >
                    <ArrowRight size={18} className="text-brand-red group-hover:translate-x-1 transition-transform duration-300" />
                    <span className={`font-semibold ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                      Isometric Views
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

              {/* Quick Links */}
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
                    { name: 'All Projects', href: '/projects' },
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
    </main>
  );
}
