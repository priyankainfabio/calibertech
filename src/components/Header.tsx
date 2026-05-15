import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, FileText, Wrench, CheckCircle2, Layers, Building2, ArrowRight, Sun, Moon, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Target, BadgeCheck } from "lucide-react";

const servicesMenu = [
  {
    category: 'Main Services',
    items: [
      { title: 'Structural Steel Detailing', icon: FileText, href: '/services/structural-steel-detailing', description: 'GA drawings, shop drawings, fabrication documents' },
      { title: 'Structural Steel Design', icon: Wrench, href: '/services/steel-design', description: 'Code-based steel design and engineering' },
      { title: 'Connection Design', icon: CheckCircle2, href: '/services/connection-design', description: 'Bolted & welded connection design' },
      { title: 'Structural Engineering for Industrial and Commercial Projects', icon: Building2, href: '/services/steel-fabrication', description: 'Structural engineering solutions for industrial and commercial projects' },
      { title: 'PE Stamp', icon: Award, href: '/services/pe-stamp', description: 'Professional engineering stamping services' },
    ],
  },
];

const projectsMenu = [
  {
    category: 'Project Types',
    items: [
      { title: 'Commercial Buildings', icon: Building2, href: '/projects/commercial', description: 'Structural steel for commercial projects' },
      { title: 'Industrial Facilities', icon: Wrench, href: '/projects/industrial', description: 'Heavy industrial steel structures' },
      { title: 'Infrastructure Projects', icon: Layers, href: '/projects/infrastructure', description: 'Bridges and infrastructure steel work' },
      { title: 'Residential Projects', icon: Building2, href: '/projects/residential', description: 'Steel framing for residential buildings' },
    ],
  },
];

const portfolioMenu = [
  {
    category: "Portfolio",
    items: [
      {
        title: "Jobs at Site",
        icon: Building2,
        href: "/steel-detailing-portfolio/projects-completed-2",
        description: "Completed steel detailing and site project portfolio",
      },
      {
        title: "Tekla Structure 3D Models",
        icon: Layers,
        href: "/steel-detailing-portfolio/tekla-3d",
        description: "3D modeling and Tekla steel detailing portfolio",
      },
    ],
  },
];

const aboutMenu = [
  {
    category: "Company Overview",
    items: [
      {
        title: "Infrastructure",
        icon: Layers,
        href: "/infrastructure",
        description: "Our team, systems and working capability",
      },
      {
        title: "Mission & Vision",
        icon: Target,
        href: "/?scrollTo=mission-vision",
        description: "Our purpose, values and long-term direction",
      },
      {
        title: "Memberships & Certifications",
        icon: BadgeCheck,
        href: "/?scrollTo=members-section",
        description: "Quality standards and certifications",
      },
    ],
  },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about', megaMenu: aboutMenu, width: "w-[420px]", },
  { name: 'Services', href: '/services', megaMenu: servicesMenu, width: 'w-[500px]' },
  { name: "Portfolio", href: "/steel-detailing-portfolio", megaMenu: portfolioMenu, width: "w-[360px]" },
  { name: 'Projects', href: '/projects', megaMenu: projectsMenu, width: 'w-[400px]' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const isLight = theme === 'light';
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`${isLight ? 'bg-gray-100 text-black border-gray-300' : 'bg-dark-bg-secondary text-white border-dark-border'} border-b transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+17605882207" className={`flex items-center gap-2 hover:text-brand-red transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
              <Phone size={16} />
              <span>+1 760 588 2207</span>
            </a>
            <a href="mailto:info@calibertechsolutions.com" className={`hidden sm:flex items-center gap-2 hover:text-brand-red transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
              <Mail size={16} />
              <span>info@calibertechsolutions.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/calibertechsolutions/" className={`hover:text-brand-red transition-colors ${isLight ? 'text-black' : 'text-white'}`}><Facebook size={16} /></a>
            <a href="https://x.com/CalibertechS" className={`hover:text-brand-red transition-colors ${isLight ? 'text-black' : 'text-white'}`}><Twitter size={16} /></a>
            <a href="https://www.linkedin.com/company/caliber-tech-solutions" className={`hover:text-brand-red transition-colors ${isLight ? 'text-black' : 'text-white'}`}><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-secondary border-dark-border'} border-b transition-colors duration-300`} onMouseLeave={() => setActiveMenu(null)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  className="h-12 w-auto" 
                  src="https://content.app-sources.com/s/432484035579470251/uploads/Caliber/cropped-Calibar-Tech-Logo-8560830.png?format=webp" 
                  alt="Caliber Tech" 
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.megaMenu && setActiveMenu(link.name)}
                >
                  <Link to={link.href} className={`${isLight ? 'text-gray-800' : 'text-dark-text-secondary'} font-medium hover:text-brand-red transition-colors relative group flex items-center gap-1`}>
                    {link.name}
                    {link.megaMenu && <ChevronDown size={16} />}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </Link>

                  {link.megaMenu && activeMenu === link.name && (
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 ${link.width} ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-xl shadow-2xl border overflow-hidden animate-fade-in-down`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-8">
                          {link.megaMenu.map((section: any) => (
                            <div key={section.category}>
                              <h3 className={`text-sm font-bold text-brand-red uppercase tracking-wider mb-4 pb-2 border-b ${isLight ? 'border-gray-300' : 'border-dark-border'}`}>
                                {section.category}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((item: any) => {
                                  const Icon = item.icon;
                                  const isExternalLink = item.href.startsWith('#') || item.href.startsWith('http');
                                  const linkClassName = `group flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${isLight ? 'hover:bg-gray-100' : 'hover:bg-dark-bg-tertiary'}`;
                                  
                                  return (
                                    <li key={item.title}>
                                      {isExternalLink ? (
                                        <a
                                          href={item.href}
                                          className={linkClassName}
                                        >
                                          <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-200">
                                            <Icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-200" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className={`text-sm font-semibold group-hover:text-brand-red transition-colors duration-200 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                              {item.title}
                                            </div>
                                            <div className={`text-xs mt-1 line-clamp-2 ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}`}>
                                              {item.description}
                                            </div>
                                          </div>
                                          <ArrowRight size={16} className={`group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1 ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}`} />
                                        </a>
                                      ) : (
                                        <Link
                                          to={item.href}
                                          className={linkClassName}
                                      >
                                        <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-200">
                                          <Icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-200" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className={`text-sm font-semibold group-hover:text-brand-red transition-colors duration-200 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                            {item.title}
                                          </div>
                                          <div className={`text-xs mt-1 line-clamp-2 ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}`}>
                                            {item.description}
                                          </div>
                                        </div>
                                        <ArrowRight size={16} className={`group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1 ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}`} />
                                        </Link>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all duration-300 hover:bg-opacity-20 ${isLight ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white hover:bg-opacity-10'}`}
                aria-label="Toggle theme"
              >
                {isLight ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button 
                onClick={() => setShowQuoteForm(true)}
                className="px-6 py-3 rounded-md text-white bg-brand-red font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all duration-300 ${isLight ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:text-brand-red'}`}
                aria-label="Toggle theme"
              >
                {isLight ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className={`${isLight ? 'text-gray-800' : 'text-white'} hover:text-brand-red transition-colors`}>
                <span className="sr-only">Open menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t ${isLight ? 'border-gray-300' : 'border-dark-border'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <div key={link.name}>
                <Link 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isLight ? 'text-gray-800 hover:text-brand-red hover:bg-gray-100' : 'text-white hover:text-brand-red hover:bg-dark-bg-tertiary'}`}
                >
                  {link.name}
                </Link>
                {link.megaMenu && (
                  <div className="pl-6 space-y-1">
                    {link.megaMenu.map((section: any) =>
                      section.items.map((item: any) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-brand-red hover:bg-gray-100' : 'text-dark-text-secondary hover:text-brand-red hover:bg-dark-bg-tertiary'}`}
                        >
                          {item.title}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-2 pb-3">
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowQuoteForm(true);
              }}
              className="block w-full text-center px-4 py-3 rounded-md text-white bg-brand-red font-semibold hover:bg-red-700 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </nav>
      {/* Quote Form Popup */}
      {showQuoteForm && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowQuoteForm(false)}
        >
          <div 
            className={`relative ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl shadow-2xl max-w-2xl w-full mx-auto my-8 p-6 md:p-8 border transition-colors duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuoteForm(false)}
              className={`absolute top-4 right-4 ${isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-white'} transition-colors duration-200 z-10`}
            >
              <X size={24} />
            </button>
            <div className="mb-6">
              <h2 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>Request a Quote</h2>
              <p className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>Fill out the form below and we'll respond as soon as possible.</p>
            </div>
            <div className="w-full">
              <iframe
                src="https://link.on.bingo/widget/form/NRyqBIBn09VXg3jn9ixt"
                style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
                id="inline-NRyqBIBn09VXg3jn9ixt-header" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="600"
                data-layout-iframe-id="inline-NRyqBIBn09VXg3jn9ixt-header"
                data-form-id="NRyqBIBn09VXg3jn9ixt"
                title="Form 0"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
