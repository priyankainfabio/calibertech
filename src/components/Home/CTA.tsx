import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 overflow-hidden ${isLight ? 'bg-gradient-to-br from-gray-100 to-gray-50' : 'bg-gradient-to-br from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-red to-red-700 rounded-2xl p-12 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-white/80" />
                <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                  Let's Build Together
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Ready to start your
                <span className="block">structural steel project?</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mt-4">
                Get in touch with our expert team and let's bring your vision to life with precision engineering.
              </p>
            </div>
            
            <Link 
              to="/contact" 
              className="group relative px-10 py-5 bg-white text-brand-red font-bold rounded-xl text-lg whitespace-nowrap overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 transform hover:-translate-y-1 flex items-center gap-3 flex-shrink-0"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
