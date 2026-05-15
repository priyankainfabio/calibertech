import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, X, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const stats = [
  { number: '21+', label: 'Years of Expertise' },
  { number: '80+', label: 'Global Clients' },
  { number: '15+', label: 'Countries Served' },
  { number: '4000+', label: 'Projects Completed' },
];



export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const phoneNumber = '+91 9871177166';
  const phoneNumberForWhatsApp = '919871177166'; // WhatsApp URL format (without + and spaces)
  const whatsappMessage = encodeURIComponent('I would like to connect with you');
  const whatsappUrl = `https://wa.me/${phoneNumberForWhatsApp}?text=${whatsappMessage}`;

  
  return (
    <section className={`relative min-h-screen w-full overflow-hidden ${isLight ? 'bg-gray-900' : 'bg-brand-black'} text-brand-white`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://theshawgrp.com/wp-content/uploads/2020/07/Structural-Fabrication-2.jpg"
          alt="Structural steel fabrication and detailing services by Caliber Tech Solutions"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 transition-opacity duration-300 ${isLight ? 'bg-black/30' : 'bg-black/70'}`}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-4 py-20 md:py-0 text-center">
        <div className="max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Innovate. Fabricate. Elevate.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            We are a global leader in structural steel, delivering excellence and precision to complex projects worldwide.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => setShowQuotePopup(true)}
            className="group flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Get a Quote
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            to="/projects"
            className={`group flex items-center justify-center gap-2 rounded-lg border-2 ${isLight ? 'border-gray-400' : 'border-gray-600'} px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white transition-all duration-300 hover:border-brand-red hover:bg-brand-red/10 w-full sm:w-auto`}
          >
            Our Work
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-red">{stat.number}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Popup Modal */}
      {showQuotePopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowQuotePopup(false)}
        >
          <div 
            className={`relative ${isLight ? 'bg-white' : 'bg-dark-bg-card'} rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 transform transition-all duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowQuotePopup(false)}
              className={`absolute top-4 right-4 ${isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-white'} transition-colors duration-200`}
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2`}>
                Get a Quote
              </h3>
              <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>
                Contact us for a detailed quote
              </p>
            </div>

            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-brand-red" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2`}>
                    India Office
                  </h4>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed text-sm`}>
                    Caliber Tech Solutions<br />
                    B2/17, Mohan Cooperative Industrial Estate<br />
                    Badarpur, New Delhi 110044
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-brand-red" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-1`}>
                    Phone
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:text-red-700 font-semibold text-lg transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
                  >
                    {phoneNumber}
                    <ArrowRight size={16} className="inline" />
                  </a>
                  <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-dark-text-tertiary'} mt-1`}>
                    Click to chat on WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone size={18} />
                Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setShowQuotePopup(false);
                  setShowContactForm(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Form
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Popup */}
      {showContactForm && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowContactForm(false)}
        >
          <div 
            className={`relative ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-2xl shadow-2xl max-w-2xl w-full mx-auto my-8 p-6 md:p-8 border transition-colors duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactForm(false)}
              className={`absolute top-4 right-4 ${isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-white'} transition-colors duration-200 z-10`}
            >
              <X size={24} />
            </button>
            <div className="mb-6">
              <h2 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>Send us a Message</h2>
              <p className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>Fill out the form below and we'll respond as soon as possible.</p>
            </div>
            <div className="w-full">
              <iframe
                src="https://link.on.bingo/widget/form/NRyqBIBn09VXg3jn9ixt"
                style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
                id="inline-NRyqBIBn09VXg3jn9ixt-hero" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="600"
                data-layout-iframe-id="inline-NRyqBIBn09VXg3jn9ixt-hero"
                data-form-id="NRyqBIBn09VXg3jn9ixt"
                title="Form 0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for animation */}
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}