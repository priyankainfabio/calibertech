import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, Wrench, Calculator, ClipboardCheck, Building2, Layers, Zap, Shield, Clock, Users, Target, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMetaTags, setCanonical, setStructuredData, getOrganizationSchema, getBreadcrumbSchema, getWebPageSchema, getFAQSchema, getServiceSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';

const faqs = [
  {
    question: 'What structural steel detailing services does Caliber Tech Solutions offer?',
    answer: 'Caliber Tech Solutions provides comprehensive structural steel detailing services including GA drawings, shop drawings, fabrication documents, CNC/DXF files, bolt and weld lists, erection drawings, and material take-off estimation. We use industry-leading tools like Tekla Structures for precision BIM and 3D steel modeling.',
  },
  {
    question: 'What software does Caliber Tech use for BIM and 3D steel modeling?',
    answer: 'We are Tekla steel detailing experts and primarily use Tekla Structures for BIM and 3D steel modeling. We also work with AutoCAD, SDS/2, and other industry-standard tools to deliver fabrication-ready steel drawings and CNC/DXF/E-Sheet deliverables.',
  },
  {
    question: 'Do you provide steel connection design coordination services?',
    answer: 'Yes, our steel connection design coordination services include bolted and welded connections, moment connections, braced frame connections, base plate design, and full coordination with the Engineer of Record (EOR). Our designs comply with AISC, Eurocode, and other international standards.',
  },
  {
    question: 'What types of projects does Caliber Tech Solutions handle?',
    answer: 'We handle a wide range of commercial and institutional steel projects including high-rise buildings, industrial facilities, sports stadiums, bridges, warehouses, hospitals, educational institutions, and mixed-use developments across North America and globally.',
  },
  {
    question: 'Can Caliber Tech Solutions deliver CNC/DXF/E-Sheet files for fabrication?',
    answer: 'Absolutely. We deliver fabrication-ready steel drawings along with CNC/DXF/E-Sheet deliverables that are directly compatible with fabrication shop equipment. Our deliverables reduce shop floor errors and improve fabrication efficiency.',
  },
  {
    question: 'Why choose Caliber Tech Solutions as your North America steel detailing partner?',
    answer: 'With 21+ years of experience, 4000+ completed projects, and a team of Tekla steel detailing experts, we are a trusted North America steel detailing partner. We offer competitive pricing, fast turnaround, quality-controlled deliverables, and work across all time zones to meet your project deadlines.',
  },
];

const mainServices = [
  {
    id: 'structural-steel-detailing',
    title: 'Structural Steel Detailing',
    description: 'Comprehensive structural steel detailing services including GA drawings, shop drawings, fabrication documents, CNC files, and detailed bolt & weld lists. Our QC-backed accuracy ensures precision in every deliverable.',
    icon: FileText,
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/3-4254478.png?format=webp',
    features: [
      'General Arrangement (GA) Drawings',
      'Shop Drawings for Fabrication',
      'CNC Files for Automated Cutting',
      'Bolt & Weld Lists',
      'Erection Drawings',
      'QC-Backed Accuracy',
      'Multi-format Deliverables',
      'Revision Management',
    ],
    benefits: [
      'Reduced fabrication errors',
      'Faster project completion',
      'Cost-effective solutions',
      'Industry-standard compliance',
    ],
  },
  {
    id: 'steel-design',
    title: 'Structural Steel Design',
    description: 'Code-based steel design services including load calculations, member sizing, stability engineering, and comprehensive analysis using licensed software. We ensure all designs meet international building codes and standards.',
    icon: Wrench,
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/5-4254478.png?format=webp',
    features: [
      'Load Calculations & Analysis',
      'Member Sizing & Optimization',
      'Stability Engineering',
      'Code Compliance (AISC, Eurocode, etc.)',
      'Licensed Software (ETABS, SAP2000, RISA)',
      'Seismic & Wind Analysis',
      'Design Reports & Documentation',
      'Value Engineering',
    ],
    benefits: [
      'Optimized material usage',
      'Code-compliant designs',
      'Enhanced structural safety',
      'Cost optimization',
    ],
  },
  {
    id: 'connection-design',
    title: 'Connection Design',
    description: 'Expert bolted and welded connection design services including base plates, moment connections, shear connections, and comprehensive code-compliant design reports. We ensure all connections meet structural requirements.',
    icon: CheckCircle2,
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/4-4254478.png?format=webp',
    features: [
      'Bolted Connection Design',
      'Welded Connection Design',
      'Base Plate Design',
      'Moment Connections',
      'Shear Connections',
      'Code-Compliant Reports',
      'Connection Details & Drawings',
      'Fabrication-Ready Specifications',
    ],
    benefits: [
      'Structural integrity',
      'Fabrication efficiency',
      'Code compliance',
      'Detailed documentation',
    ],
  },
  {
    id: 'steel-fabrication',
    title: 'Steel & Piping Fabrication',
    description: 'Comprehensive structural steel and piping fabrication services with 21 years of experience. We provide MTO-based bidding, fabrication, galvanizing, painting, and installation services for industrial and commercial projects.',
    icon: Building2,
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/1-4254477.png?format=webp',
    features: [
      'Structural Steel Fabrication',
      'Piping Fabrication & Pipe Spools',
      'MTO-Based Project Bidding',
      'Abrasive Blasting & Painting',
      'Galvanizing Services',
      'Field Fabrication & Installation',
      '33,000 MT Annual Capacity',
      '21 Years of Experience',
    ],
    benefits: [
      'Large production capacity',
      'Comprehensive services',
      'Quality, schedule and cost specific',
      'State-of-the-art facility',
    ],
  },
];

const detailingServices = [
  {
    title: 'Steel Shop Drawings',
    description: 'Detailed fabrication-ready shop drawings for structural steel, miscellaneous steel, rebar, and precast elements. Clear and meticulous drawings that aid fabrication and erection processes.',
    icon: FileText,
    features: ['Fabrication-Ready Drawings', 'Industry Standards Compliance', 'Clear Annotations', 'Quality Assurance'],
  },
  {
    title: '3D Modeling & BIM Services',
    description: 'Comprehensive 3D modeling and BIM services including CAD conversion, construction documentation, and digital transformation of hand-drawn sketches, scan papers, and images.',
    icon: ClipboardCheck,
    features: ['CAD Conversion', 'BIM Modeling', 'Digital Transformation', 'Quality Output'],
  },
  {
    title: 'Miscellaneous Steel',
    description: 'Ornamental and miscellaneous steel detailing services for architectural elements, handrails, stairs, and custom steel fabrications.',
    icon: Building2,
    features: ['Ornamental Steel', 'Architectural Elements', 'Custom Fabrications', 'Detailed Drawings'],
  },
  {
    title: 'Pre-Engineered Building (PEB)',
    description: 'Complete PEB design and detailing services for pre-engineered building systems, ensuring efficient and cost-effective solutions.',
    icon: Layers,
    features: ['PEB Design', 'PEB Detailing', 'Efficient Systems', 'Cost-Effective Solutions'],
  },
];

export default function Services() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMetaTags(
      'Structural Steel Detailing Services | Shop Drawings & BIM 3D Modeling | Caliber Tech',
      'Expert structural steel detailing services by Caliber Tech Solutions. We provide shop drawings, 3D BIM modeling, Tekla steel detailing, steel connection design coordination, CNC/DXF deliverables, and fabrication-ready steel drawings for North America.',
      'structural steel detailing services, shop drawings 3D modeling, miscellaneous metal detailing, Tekla steel detailing experts, BIM 3D steel modeling, steel connection design coordination, fabrication-ready steel drawings, CNC DXF E-Sheet deliverables, commercial institutional steel projects, North America steel detailing partner'
    );
    setCanonical('/services');
    setStructuredData([
      getOrganizationSchema(),
      getWebPageSchema(
        'Structural Steel Detailing Services',
        'Expert structural steel detailing, BIM modeling, shop drawings, and fabrication-ready deliverables.',
        '/services'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
      ]),
      getFAQSchema(faqs),
      ...mainServices.map(s => getServiceSchema(s.title, s.description, `/services/${s.id}`)),
    ]);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} overflow-hidden transition-colors duration-300`}>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
              Comprehensive
              <span className="block text-brand-red mt-2">Steel Solutions</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className={`text-xl md:text-2xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto transition-colors duration-300`}>
                From design to fabrication support, we provide end-to-end structural steel services
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Core Services
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Our Main Services
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              Comprehensive structural steel engineering and detailing solutions
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`relative ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded-xl overflow-hidden shadow-lg transition-colors duration-300`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-brand-red" />
                      </div>
                      <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
                        Service {idx + 1}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 leading-tight transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    
                    <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 text-lg transition-colors duration-300`}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-brand-red flex-shrink-0" />
                          <span className={`${isLight ? 'text-gray-900' : 'text-white'} text-sm font-medium transition-colors duration-300`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-tertiary border-dark-border'} p-4 rounded-lg border mb-6`}>
                      <h4 className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIdx) => (
                          <li key={benefitIdx} className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-brand-red text-brand-red font-semibold rounded-lg hover:bg-brand-red hover:text-white hover:gap-4 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red/90 hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Request Quote
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailing Services Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Specialized Services
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Detailing Services
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              Specialized detailing services for various steel applications
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detailingServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-xl group`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="w-14 h-14 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <Icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 text-sm leading-relaxed transition-colors duration-300`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-brand-red flex-shrink-0" />
                        <span className={`text-xs ${isLight ? 'text-gray-600' : 'text-dark-text-tertiary'} transition-colors duration-300`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Process
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              How We Work
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              A streamlined process ensuring quality and efficiency
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your project requirements and objectives' },
              { step: '02', title: 'Planning', description: 'Developing detailed project plans and timelines' },
              { step: '03', title: 'Execution', description: 'Delivering high-quality work with regular updates' },
              { step: '04', title: 'Delivery', description: 'Final deliverables with comprehensive documentation' },
            ].map((process, idx) => (
              <div
                key={process.step}
                className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 rounded-xl border-2 hover:border-brand-red transition-all duration-300 hover:shadow-xl group text-center`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl font-bold text-brand-red/20 mb-4 group-hover:text-brand-red/40 transition-colors duration-300">
                  {process.step}
                </div>
                <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 transition-colors duration-300`}>
                  {process.title}
                </h3>
                <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2 block">
              Common Questions
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-2xl mx-auto transition-colors duration-300`}>
              Learn more about our structural steel detailing services, BIM modeling capabilities, and how we serve as your trusted North America steel detailing partner.
            </p>
            <div className="w-24 h-1 bg-brand-red rounded-full mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-brand-red' : ''}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`button-faq-${idx}`}
                >
                  <h3 className={`text-lg font-semibold ${isLight ? 'text-gray-900' : 'text-white'} pr-4 transition-colors duration-300`}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-brand-red flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className={`px-6 ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed transition-colors duration-300`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Projects
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

