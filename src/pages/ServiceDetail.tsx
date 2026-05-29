import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, FileText, Wrench, Building2, Phone, Mail, Award, Box, Eye } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema, getServiceSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';

const serviceDetails: Record<string, any> = {
  'structural-steel-detailing': {
    title: 'Shop Drawing',
    subtitle: 'DETAILED ENGINEERING',
    icon: FileText,
    image: '/ssbg.webp',
    sections: [
      {
        title: 'Detailed Engineering',
        content: 'Caliber excels in detailing commercial, industrial and residential steel structures.',
      },
      {
        title: 'Deliverables',
        content: 'We provide high quality shop drawings and erection plans, in addition to the field bolt list, shop bolt lists and material lists.',
        points: [
          'Shop drawings and erection plans',
          'Field bolt list and shop bolt lists',
          'Material lists',
          'CNC, BSWX and DXF data for control equipment',
          'Accurate detail drawings and erection drawings',
        ],
      },
      {
        title: 'Quality Commitment',
        content: 'Most importantly, Caliber Tech Solutions® is committed to their clients, therefore, ensures delivery of accurate detail drawings and erection drawings.',
        points: [
          'Maintaining international standards',
          'Strong quality policy',
          'Experienced personnel from RCC & steel design and detailing',
          'Superior quality, accurate and on schedule',
          'Overall client satisfaction',
        ],
      },
    ],
    benefits: [
      'Faster fabrication process for fabricators',
      'International standards compliance',
      'Experienced team',
      'On-time delivery',
      'Client satisfaction',
    ],
  },
  'steel-design': {
    title: 'End to End Services',
    subtitle: 'Best Steel Design Services',
    icon: Wrench,
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/5-4254478.png?format=webp',
    sections: [
      {
        title: 'Professional Engineering Services',
        content: 'We provide Engineering and Design work with professional engineer (PE) stamp in 49 States of America.',
        points: [
          'PE stamp available in 49 out of 50 states of America',
          'Professional engineering services',
          'Comprehensive engineering and design solutions',
        ],
      },
      {
        title: 'Our Capabilities',
        content: 'The civil & structural engineering group of Caliber is capable to carry out engineering and design of:',
        points: [
          'Industrial buildings and technological structures',
          'Structure for material handling system',
          'Storage bunkers and silos',
          'Equipment foundations subject to dynamic forces',
          'Chimney of different types of industrial plants',
          'Detailed engineering residential complex/township',
          'Road, drainage & sewerage networks',
          'Water & sewage treatment plants',
          'Water tanks/reservoir',
          'Office complex',
        ],
      },
      {
        title: 'Industrial / Commercial Design',
        content: 'Caliber has delivered numerous commercial and industrial structural design and plant layout. We use specialized software to determine the most efficient solutions. Our goal is to develop the most economical design possible, while meeting the requirements of the client.',
        points: [
          'Structural Engineering',
          'Civil Engineering',
          'Industrial Engineering',
          'Tank & Foundation Design',
          'Forensic Engineering',
          'Structural Analysis',
          'Structural Modifications',
          'Structural Reinforcement',
        ],
      },
      {
        title: 'Residential Structure Design',
        content: 'We specialize mainly in RCC as well as structural steel design. Our engineers will work with your contractor and architect to develop a comprehensive structural solution. Whatever you can dream, we can achieve.',
      },
    ],
    benefits: [
      'PE stamp in 49 states',
      'Specialized software solutions',
      'Most economical design',
      'Comprehensive structural solutions',
      'Expert engineering team',
    ],
  },
  'connection-design': {
    title: 'Connection Design',
    subtitle: 'Expert Connection Design Services',
    icon: CheckCircle2,
    image: '/cbg.webp',
    sections: [
      {
        title: 'Our Tools & Expertise',
        content: 'We use RISA Connection Design and the Tekla Structures tools to design and check our connection details. Our experienced engineers and detailers double check each connection to assure seamless construction.',
        points: [
          'RISA Connection Design',
          'Tekla Structures tools',
          'Double-checked by experienced engineers',
          'Seamless construction assurance',
        ],
      },
      {
        title: 'Connection Design Reports',
        content: 'If requested, we can generate full connection design reports for the project.',
      },
      {
        title: 'Connection Types',
        content: 'We provide all type of connections included in the AISC (ASD and LRFD), EC3, IS, GB, and BS specifications.',
        points: [
          'Steel Connection Design',
          'Base Plate Design',
          'Moment Connection Design',
          'Hollow Section Connection Design',
          'Shear Connection Design',
          'Simple Connection Design',
        ],
      },
    ],
    benefits: [
      'Multiple code compliance (AISC, EC3, IS, GB, BS)',
      'Expert double-checking',
      'Full design reports available',
      'Seamless construction',
      'Comprehensive connection solutions',
    ],
  },
      'steel-fabrication': {
        title: 'Structural Engineering',
        subtitle: 'Comprehensive Fabrication Services',
        icon: Building2,
        image: '/sbg.webp',
        sections: [
          {
            title: 'Structural Steel Fabrication',
            content: 'Caliber bids each project with proper process of making MTO prior, with our Engineers based on the contract drawings. Then we consider the exact fabrication requirement with add-on like abrasive blasting and painting, galvanizing services etc. we provide details of each and every component, delivery time, transportation and erection. Hence our bids are very specific in terms of quality, schedule and cost.',
            points: [
              'MTO (Material Take-Off) process',
              'Engineer-based contract drawings',
              'Abrasive blasting and painting',
              'Galvanizing services',
              'Component details',
              'Delivery time and transportation',
              'Erection services',
            ],
          },
          {
            title: 'Our Experience',
            content: 'Caliber has 21 years of delivering structural steel fabrication for:',
            points: [
              'Technological Structural steel fabrication',
              'Material Handling Equipment\'s for Cement / Sugar / Power / Petrochemical',
              'Process Equipment fabrication',
            ],
          },
          {
            title: 'Piping Fabrication',
            content: 'Piping fabrication, Pipe spool fabrication, Field fabrication and installation of Piping systems.',
            points: [
              'Pipe spool fabrication',
              'Field fabrication',
              'Installation of Piping systems',
              'Design, Engineering & Manufacturing of Prefabricated Piping Systems',
              'Pipe Fittings manufacturing',
            ],
          },
          {
            title: 'Production Capacity',
            content: 'We are equipped with a state of art production facility capable of 33,000 MT Piping Fabrication and 3000 MT of Pipe Fitting annually. We cater to Multinational Power Generation Equipment OEMs, EPC Contractors in Power Sector, Oil & Gas and Petrochemicals.',
            points: [
              '33,000 MT Piping Fabrication annually',
              '3000 MT of Pipe Fitting annually',
              'State of art production facility',
              'Serving Power Generation Equipment OEMs',
              'EPC Contractors in Power Sector',
              'Oil & Gas and Petrochemicals',
            ],
          },
        ],
        benefits: [
          '21 years of experience',
          'Large production capacity',
          'Comprehensive services',
          'Quality, schedule and cost specific',
          'State-of-the-art facility',
        ],
      },
      'pe-stamp': {
        title: 'PE Stamp Services',
        subtitle: 'Professional Engineering Stamping',
        icon: Award,
        image: '/pbg.webp',
        sections: [
          {
            title: 'Prebid Steel Estimating & Material Takeoffs',
            content: 'Prebid steel estimating or material takeoffs at a much higher accuracy to facilitate better project planning and less material wastage.',
            points: [
              'Higher accuracy in material takeoffs',
              'Better project planning',
              'Reduced material wastage',
              'Comprehensive prebid estimates',
            ],
          },
          {
            title: 'MORE BIDS = MORE WINS',
            content: 'Caliber\'s experienced team of estimating professionals are qualified to create the most accurate budget estimate possible, ranging from order of magnitude estimates to detailed Class A budgets. Creating proper estimates is at the core of our business and involves collaboration from all departments.',
            points: [
              'Order of magnitude estimates',
              'Detailed Class A budgets',
              'Experienced estimating professionals',
              'Cross-department collaboration',
              'Accurate budget estimates',
            ],
          },
          {
            title: 'Collaborative Approach',
            content: 'Our engineers, drafting, and fabrication experts, all work with the estimating department to create an accurate budget, and just as importantly, a suitable project schedule. We\'re also able to help cut costs through our experience with design efficiencies and provide you with an insight into the lowest total installed cost of the project.',
            points: [
              'Engineer collaboration',
              'Drafting team involvement',
              'Fabrication expert input',
              'Accurate project schedules',
              'Design efficiency optimization',
              'Lowest total installed cost analysis',
            ],
          },
          {
            title: 'Flexible Estimate Formats',
            content: 'Your estimate can be broken down by unit price, lump sum, and cost-plus formats, whichever method makes the most sense for your project.',
            points: [
              'Unit price format',
              'Lump sum format',
              'Cost-plus format',
              'Customized estimate formats',
            ],
          },
          {
            title: '3D Modeling Technology',
            content: 'Utilizing 3D modeling technology is another dimension of our estimating services that helps portray a complete image of what your project will look like, more accurately predict costs, and shorten project cycle time.',
            points: [
              '3D modeling integration',
              'Complete project visualization',
              'Accurate cost prediction',
              'Reduced project cycle time',
              'Enhanced project planning',
            ],
          },
        ],
        benefits: [
          'Higher accuracy estimates',
          'Better project planning',
          'Reduced material wastage',
          'Expert team collaboration',
          'Flexible estimate formats',
          '3D modeling technology',
        ],
      },
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const service = serviceId ? serviceDetails[serviceId] : null;

  useEffect(() => {
    if (service && serviceId) {
      setMetaTags(
        `${service.title} | Caliber Tech Solutions - Tekla Steel Detailing Experts`,
        `${service.title} by Caliber Tech Solutions. Expert structural steel detailing services, BIM 3D modeling, shop drawings, and fabrication-ready steel drawings for North America.`,
        `${service.title.toLowerCase()}, Tekla steel detailing experts, structural steel detailing services, BIM 3D steel modeling, fabrication-ready steel drawings`
      );
      setCanonical(`/services/${serviceId}`);
      setStructuredData([
        getWebPageSchema(
          `${service.title} | Caliber Tech Solutions - Tekla Steel Detailing Experts`,
          `${service.title} by Caliber Tech Solutions. Expert structural steel detailing services, BIM 3D modeling, shop drawings, and fabrication-ready steel drawings for North America.`,
          `/services/${serviceId}`
        ),
        getServiceSchema(
          service.title,
          `${service.title} by Caliber Tech Solutions. Expert structural steel detailing services, BIM 3D modeling, shop drawings, and fabrication-ready steel drawings for North America.`,
          `/services/${serviceId}`
        ),
        getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${serviceId}` },
        ]),
      ]);
    }
  }, [service, serviceId]);

  if (!service) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
            Service Not Found
          </h1>
          <Link to="/services" className="text-brand-red hover:text-red-700 transition-colors">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main>
      
      {/* Hero Section */}
<section className="relative min-h-[78vh] overflow-hidden bg-black flex items-center">
  <img
    src={service.image}
    alt={service.title}
    className="absolute inset-0 h-full w-full object-cover opacity-45"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(239,68,68,0.25),transparent_45%)]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link
      to="/services"
      className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 mb-8 transition-colors duration-300"
    >
      <ArrowRight size={18} className="rotate-180" />
      <span className="font-semibold">Back to Services</span>
    </Link>

    <span className="text-brand-red font-bold text-sm uppercase tracking-[5px] mb-5 block">
      {service.subtitle}
    </span>

    <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-7">
      {service.title}
    </h1>

    <p className="max-w-3xl text-lg md:text-2xl text-zinc-300 leading-relaxed">
      Expert steel engineering, detailing, modeling and fabrication-ready execution support for global structural projects.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-7 py-4 font-bold text-white transition hover:bg-red-700"
      >
        Request a Quote
        <ArrowRight size={20} />
      </Link>

      <Link
        to="/steel-detailing-portfolio"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:border-brand-red hover:bg-white/10"
      >
        View Portfolio
        <ArrowRight size={20} />
      </Link>
    </div>
  </div>
</section>

      {/* Content Sections */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {service.sections.map((section: any, idx: number) => (
                <div
                  key={idx}
                  className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-8 rounded-xl border-2 transition-colors duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-brand-red" />
                    </div>
                    <h2 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                      {section.title}
                    </h2>
                  </div>
                  <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} leading-relaxed mb-6 transition-colors duration-300`}>
                    {section.content}
                  </p>
                  {section.points && (
                    <ul className="space-y-3">
                      {section.points.map((point: string, pointIdx: number) => (
                        <li key={pointIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-brand-red flex-shrink-0 mt-1" />
                          <span className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Service Image */}
              <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 overflow-hidden transition-colors duration-300`}>
                <img
                  src={service.image}
                  alt={`${service.title} - Tekla steel detailing experts providing fabrication-ready drawings`}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Key Benefits */}
              <div className={`${isLight ? 'bg-gradient-to-br from-brand-red/10 to-red-50 border-brand-red/30' : 'bg-gradient-to-br from-brand-red/20 to-red-900/20 border-brand-red/40'} p-6 rounded-xl border-2 transition-colors duration-300`}>
                <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-red flex-shrink-0 mt-1" />
                      <span className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className={`${isLight ? 'bg-gradient-to-br from-brand-red to-red-700' : 'bg-gradient-to-br from-brand-red/90 to-red-800'} p-8 rounded-xl text-white transition-colors duration-300`}>
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="mb-6 text-white/90">
                  Contact us to discuss your project requirements and get a detailed quote.
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
            </div>
          </div>
        </div>
      </section>

      {/* Steel Detailing Portfolio Banners */}
      <section className={`py-12 sm:py-16 ${isLight ? 'bg-gray-50' : 'bg-dark-bg-secondary'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/steel-detailing-portfolio/models"
            className={`group flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isLight ? 'bg-white border-gray-200 hover:border-brand-red/50 hover:shadow-xl' : 'bg-dark-bg-card border-dark-border hover:border-brand-red/50'} p-8 md:p-10 rounded-2xl border-2 transition-all duration-300`}
          >
            <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors duration-300">
              <Box size={36} className="text-brand-red" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-1 block">Steel Detailing Portfolio</span>
              <h2 className={`text-2xl md:text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                3D Structure Models
              </h2>
              <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                Explore our BIM 3D steel models created using Tekla Structures. View project details with interactive 3D PDF technology.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg group-hover:bg-red-700 transition-all duration-300">
                View Models
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </Link>

          <Link
            to="/steel-detailing-portfolio/isometric-views"
            className={`group flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isLight ? 'bg-white border-gray-200 hover:border-brand-red/50 hover:shadow-xl' : 'bg-dark-bg-card border-dark-border hover:border-brand-red/50'} p-8 md:p-10 rounded-2xl border-2 transition-all duration-300`}
          >
            <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors duration-300">
              <Eye size={36} className="text-brand-red" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-1 block">Steel Detailing Portfolio</span>
              <h2 className={`text-2xl md:text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                Isometric Views
              </h2>
              <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                View isometric projections of our Tekla Structures 3D models showcasing structural steel framing, connections, and member layouts.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg group-hover:bg-red-700 transition-all duration-300">
                View Gallery
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your structural steel project to life with our expertise and experience.
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

