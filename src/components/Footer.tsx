import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <footer className={`${isLight ? 'bg-gray-100 border-gray-300' : 'bg-dark-bg-secondary border-dark-border'} border-t transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Link to="/">
              <img 
                src="https://content.app-sources.com/s/432484035579470251/uploads/Caliber/cropped-Calibar-Tech-Logo-8560830.png?format=webp" 
                alt="Caliber Tech Solutions Logo" 
                  className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
              />
              </Link>
            </div>
            <p className={`text-sm mb-4 ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>Premium structural steel engineering & fabrication solutions.</p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://www.facebook.com/calibertechsolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 group`}
                aria-label="Facebook"
              >
                <Facebook size={18} className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} group-hover:text-white transition-colors`} />
              </a>
              <a 
                href="https://www.instagram.com/calibertech.solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 group`}
                aria-label="Instagram"
              >
                <Instagram size={18} className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} group-hover:text-white transition-colors`} />
              </a>
              <a 
                href="https://www.linkedin.com/company/caliber-tech-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 group`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} group-hover:text-white transition-colors`} />
              </a>
              <a 
                href="https://x.com/CalibertechS" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 group`}
                aria-label="Twitter/X"
              >
                <Twitter size={18} className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} group-hover:text-white transition-colors`} />
              </a>
              <a 
                href="https://www.youtube.com/user/calibertechsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 group`}
                aria-label="YouTube"
              >
                <Youtube size={18} className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} group-hover:text-white transition-colors`} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>Services</h4>
            <ul className={`space-y-2 text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
              <li><Link to="/services/structural-steel-detailing" className="hover:text-brand-red transition-colors">Structural Steel Detailing</Link></li>
              <li><Link to="/services/steel-design" className="hover:text-brand-red transition-colors">Structural Steel Design</Link></li>
              <li><Link to="/services/connection-design" className="hover:text-brand-red transition-colors">Connection Design</Link></li>
              <li><Link to="/services/steel-fabrication" className="hover:text-brand-red transition-colors">Steel Fabrication Detailing</Link></li>
              <li><Link to="/services/pe-stamp" className="hover:text-brand-red transition-colors">PE Stamp</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>Company</h4>
            <ul className={`space-y-2 text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-brand-red transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-brand-red transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>Contact</h4>
            <div className={`space-y-3 text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
              {/* Email */}
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-brand-red flex-shrink-0" />
                <a 
                  href="mailto:info@calibertechsolutions.com" 
                  className="hover:text-brand-red hover:underline transition-colors break-all"
                >
                  info@calibertechsolutions.com
                </a>
              </div>

              {/* US Office */}
              <div className="mb-4">
                <h5 className={`font-semibold text-xs uppercase tracking-wider mb-2 ${isLight ? 'text-gray-800' : 'text-gray-300'} transition-colors duration-300`}>US Office</h5>
                <div className="flex items-start gap-2 mb-2">
                  <Phone size={16} className="mt-1 text-brand-red flex-shrink-0" />
                  <a 
                    href="tel:+17605882207" 
                    className="hover:text-brand-red hover:underline transition-colors"
                  >
                    +1-760-588-2207
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-brand-red flex-shrink-0" />
                  <a 
                    href="https://maps.app.goo.gl/egVwyLcFbL2CyKYd7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-red hover:underline transition-colors"
                  >
                    Caliber Tech Solutions<br />
                    
                  </a>
                </div>
              </div>

              {/* India Office */}
              <div>
                <h5 className={`font-semibold text-xs uppercase tracking-wider mb-2 ${isLight ? 'text-gray-800' : 'text-gray-300'} transition-colors duration-300`}>India Office</h5>
                <div className="flex items-start gap-2 mb-2">
                  <Phone size={16} className="mt-1 text-brand-red flex-shrink-0" />
                  <a 
                    href="https://wa.me/919871177166" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-red hover:underline transition-colors"
                  >
                    +91 9871177166
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 text-brand-red flex-shrink-0" />
                  <a 
                    href="https://maps.app.goo.gl/k9J76r3QRFi6ki6aA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-red hover:underline transition-colors"
                  >
                    Caliber Tech Solutions<br />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={`border-t ${isLight ? 'border-gray-300' : 'border-dark-border'} pt-8 transition-colors duration-300`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>&copy; 2026 Caliber Tech Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
              <a href="/privacy-policy" className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} hover:text-brand-red transition-colors text-sm`}>Privacy Policy</a>
              <a href="/terms-of-service" className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} hover:text-brand-red transition-colors text-sm`}>Terms of Service</a>
              
              {/* Website Credits */}
              <div className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 border ${isLight ? 'border-gray-300 bg-gray-200' : 'border-dark-border-light bg-dark-bg-tertiary'} shadow-sm hover:shadow transition-all duration-300`}>
                <a
                  href="https://fabulousmedia.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label="FabulousMedia"
                >
                  <img
                    src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                    alt="FabulousMedia"
                    className="h-3 w-auto"
                    loading="lazy"
                    width="80"
                    height="12"
                  />
                </a>
                <div className={`h-3 w-px ${isLight ? 'bg-gray-300' : 'bg-dark-border-light'} transition-colors duration-300`}></div>
                <a
                  href="https://gocommercially.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label="GoCommercially"
                >
                  <img
                    src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                    alt="GoCommercially"
                    className="h-3 w-auto"
                    loading="lazy"
                    width="80"
                    height="12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
