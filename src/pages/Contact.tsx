import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';
import { MessageCircle } from 'lucide-react'

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    setMetaTags(
      'Contact Caliber Tech Solutions | Get a Steel Detailing Quote Today',
      'Contact Caliber Tech Solutions for structural steel detailing services, shop drawings, BIM modeling, and fabrication-ready steel drawings. Quick response from our North America steel detailing team.',
      'contact steel detailing company, steel engineering quote, structural steel services inquiry, North America steel detailing partner'
    );
    setCanonical('/contact');
    setStructuredData([
      getWebPageSchema(
        'Contact Caliber Tech Solutions | Get a Steel Detailing Quote Today',
        'Contact Caliber Tech Solutions for structural steel detailing services, shop drawings, BIM modeling, and fabrication-ready steel drawings. Quick response from our North America steel detailing team.',
        '/contact'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]),
    ]);

  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} overflow-hidden transition-colors duration-300`}>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Get In Touch
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Let's Build Together
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className={`text-xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
                Connect with our structural steel engineering team and start your project today
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 md:p-8 rounded-2xl shadow-xl border transition-colors duration-300`}>
                <div className="mb-6">
                  <h2 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>Send us a Message</h2>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>Fill out the form below and we'll respond as soon as possible.</p>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://link.on.bingo/widget/form/NRyqBIBn09VXg3jn9ixt"
                    style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
                    id="inline-NRyqBIBn09VXg3jn9ixt" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 0"
                    data-height="600"
                    data-layout-iframe-id="inline-NRyqBIBn09VXg3jn9ixt"
                    data-form-id="NRyqBIBn09VXg3jn9ixt"
                    title="Form 0"
                  />
                </div>
                {/* QUICK CONTACT OPTIONS */}
<div className="mt-8 grid md:grid-cols-2 gap-5">

  {/* WHATSAPP */}
  <a
    href="https://wa.me/919871177166?text=Hi%20Caliber%20Tech%20Solutions,%20I%20want%20to%20discuss%20my%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-green-500/40"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

    <div className="relative flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center">
  <MessageCircle className="w-7 h-7 text-white" />
</div>

      <div>
        <p className="text-xs uppercase tracking-[3px] text-green-400">
          WhatsApp
        </p>

        <h4 className="text-xl font-bold text-white mt-1">
          Chat With Us
        </h4>

        <p className="text-sm text-zinc-400 mt-1">
          Instant project assistance
        </p>
      </div>
    </div>
  </a>

  {/* CALL */}
  <a
    href="tel:+17605882207"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

    <div className="relative flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center">
  <Phone className="w-7 h-7 text-white" />
</div>

      <div>
        <p className="text-xs uppercase tracking-[3px] text-red-400">
          Direct Call
        </p>

        <h4 className="text-xl font-bold text-white mt-1">
          Call Our Team
        </h4>

        <p className="text-sm text-zinc-400 mt-1">
          Speak with engineering experts
        </p>
      </div>
    </div>
  </a>

</div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Phone Numbers Card */}
              <div className={`${isLight ? 'bg-gradient-to-br from-white to-gray-50 border-gray-300' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary border-dark-border'} p-5 rounded-xl border-2 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 text-sm transition-colors duration-300`}>Phone</h3>
                    <div className="space-y-2">
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>US Office</p>
                        <a href="tel:+17605882207" className="text-brand-red hover:text-brand-red/80 hover:underline transition-colors text-xs font-semibold">
                          +1-760-588-2207
                    </a>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>India Office</p>
                        <a 
                          href="https://wa.me/919871177166?text=I%20would%20like%20to%20connect%20with%20you" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-red hover:text-brand-red/80 hover:underline transition-colors text-xs font-semibold"
                        >
                          +91 9871177166
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className={`${isLight ? 'bg-gradient-to-br from-white to-gray-50 border-gray-300' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary border-dark-border'} p-5 rounded-xl border-2 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-1 text-sm transition-colors duration-300`}>Email</h3>
                    <a 
                      href="mailto:info@calibertechsolutions.com" 
                      className="text-brand-red hover:text-brand-red/80 hover:underline transition-all text-xs font-semibold break-all"
                    >
                      info@calibertechsolutions.com
                    </a>
                    <p className={`text-xs ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'} mt-1 transition-colors duration-300`}>Send us an email</p>
                  </div>
                </div>
              </div>

              {/* Addresses Card */}
              <div className={`${isLight ? 'bg-gradient-to-br from-white to-gray-50 border-gray-300' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary border-dark-border'} p-5 rounded-xl border-2 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 text-sm transition-colors duration-300`}>Address</h3>
                    <div className="space-y-3">
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>US Office</p>
                        <a 
                          href="https://maps.app.goo.gl/egVwyLcFbL2CyKYd7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${isLight ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-red'} text-xs leading-relaxed transition-colors duration-300 hover:underline`}
                        >
                          Caliber Tech Solutions, LLC<br />
                          10101 W 136th St. #1108<br />
                          Overland Park, KS 66221
                        </a>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>India Office</p>
                        <a 
                          href="https://maps.app.goo.gl/k9J76r3QRFi6ki6aA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${isLight ? 'text-gray-900 hover:text-brand-red' : 'text-white hover:text-brand-red'} text-xs leading-relaxed transition-colors duration-300 hover:underline`}
                        >
                          Caliber Tech Solutions<br />
                          B2/17, Mohan Cooperative Industrial Estate<br />
                          Badarpur, New Delhi 110044
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${isLight ? 'bg-gradient-to-br from-white to-gray-50 border-gray-300' : 'bg-gradient-to-br from-dark-bg-card to-dark-bg-tertiary border-dark-border'} p-5 rounded-xl border-2 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-red/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 text-sm transition-colors duration-300`}>Business Hours</h3>
                    <div className="space-y-2">
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>US Office</p>
                        <p className={`${isLight ? 'text-gray-900' : 'text-white'} text-xs leading-relaxed transition-colors duration-300`}>
                          Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                          Sat - Sun: Closed
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-700' : 'text-gray-300'} mb-1 transition-colors duration-300`}>India Office</p>
                        <p className={`${isLight ? 'text-gray-900' : 'text-white'} text-xs leading-relaxed transition-colors duration-300`}>
                          Mon - Fri: 9:30 AM - 6:30 PM IST<br />
                          Sat - Sun: Closed
                        </p>
                      </div>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'} mt-2 transition-colors duration-300`}>We're here to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`relative py-12 sm:py-16 md:py-20 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} overflow-hidden transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>Find Us</h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              Visit our offices or get directions to Caliber Tech Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* US Office Map */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>US Office</h3>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 ${isLight ? 'border-gray-300' : 'border-dark-border'} transition-colors duration-300`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.276384718379!2d-94.67808942436714!3d38.940513871714856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ebb20f8fffff%3A0xa7ec8380b59eb754!2sCALIBER%20TECH%20SOLUTIONS%2C%20LLC!5e0!3m2!1sen!2sin!4v1764239017761!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caliber Tech Solutions US Office Location"
                  className="w-full"
                />
              </div>
            </div>

            {/* India Office Map */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>India Office</h3>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 ${isLight ? 'border-gray-300' : 'border-dark-border'} transition-colors duration-300`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.486125044088!2d77.30956207508625!3d28.495018475740157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce145561780f9%3A0x41e3b97310306003!2sCaliber%20Tech%20Solutions!5e0!3m2!1sen!2snl!4v1769051969020!5m2!1sen!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caliber Tech Solutions India Office Location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER SECTION */}
<section className="mx-auto max-w-7xl px-6 pb-24">
  <div className="grid gap-10 rounded-3xl border border-white/10 bg-[#151515] p-8 lg:grid-cols-2">
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-red-500">
        Career
      </p>

      <h2 className="text-4xl font-black text-white">
        Join Caliber <span className="text-red-500">Tech Solutions</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        Caliber Tech Solutions believes that our people make us a respected
        name in the steel design and detailing industry. We encourage and
        support our technical team, helping them grow with international
        structural steel projects.
      </p>

      <p className="mt-5 text-zinc-400">
        Mail your CV at{" "}
        <span className="text-red-500">info@calibertechsolutions.com</span> or
        fill the form below so our HR team can contact you.
      </p>
    </div>

    <div className="rounded-2xl bg-black p-3 overflow-hidden">
  <iframe
    src="https://link.on.bingo/widget/form/w5MBMNHOc4M5Si792v4A"
    style={{
      width: "100%",
      height: "620px",
      border: "none",
      borderRadius: "16px",
      background: "#000",
    }}
    id="inline-xHCOWWXLlcdxcHJSTBgZ"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Career Form"
    data-height="620"
    data-layout-iframe-id="inline-xHCOWWXLlcdxcHJSTBgZ"
    data-form-id="xHCOWWXLlcdxcHJSTBgZ"
    title="Career Form"
  />
</div>
  </div>
</section>
    </main>
  );
}
