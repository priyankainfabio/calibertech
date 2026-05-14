import { useEffect, useState, useCallback } from 'react';
import { ArrowRight, Building2, Wrench, Layers, MapPin, Calendar, CheckCircle2, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';
import { projectsService, Project } from '../utils/api';
import ImageCarousel from '../components/ImageCarousel';

const projectCategories = [
  { name: 'All Projects', value: 'all' },
  { name: 'Commercial Buildings', value: 'commercial' },
  { name: 'Industrial Facilities', value: 'industrial' },
  { name: 'Infrastructure', value: 'infrastructure' },
  { name: 'Residential', value: 'residential' },
];

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'commercial',
    location: 'New York, USA',
    year: '2023',
    description: 'A state-of-the-art 25-story office complex with advanced structural steel framework. Delivered comprehensive detailing and design services.',
    image: '/tekla/tekla3.webp',
    images: [],
    services: ['Structural Steel Design', 'Steel Detailing', 'Connection Design', '3D Modeling'],
    stats: { area: '500,000 sq ft', steel: '8,500 tons', duration: '18 months' },
    highlights: [
      'LEED Gold Certified',
      'Seismic-resistant design',
      'Advanced BIM modeling',
      'On-time delivery',
    ],
  },
  {
    id: 2,
    title: 'Manufacturing Plant',
    category: 'industrial',
    location: 'Texas, USA',
    year: '2023',
    description: 'Large-scale manufacturing facility with heavy-duty steel structures. Provided complete engineering and detailing services.',
    image: '/tekla/tekla2.webp',
    images: [],
    services: ['Steel Detailing', 'Fabrication Support', 'MTO Estimation', 'Shop Drawings'],
    stats: { area: '750,000 sq ft', steel: '12,000 tons', duration: '24 months' },
    highlights: [
      'Heavy-duty structures',
      'Fabrication-ready drawings',
      'Cost optimization',
      'Quality assurance',
    ],
  },
  {
    id: 3,
    title: 'Highway Bridge Project',
    category: 'infrastructure',
    location: 'California, USA',
    year: '2022',
    description: 'Major highway bridge with complex steel truss system. Delivered detailed engineering and connection design.',
    image: 'https://creativedesignresolutions.com/wp-content/uploads/2016/04/CDR-1395-540x360.jpg',
    images: [],
    services: ['Structural Design', 'Connection Design', 'Steel Detailing', 'BIM Services'],
    stats: { span: '450 meters', steel: '6,200 tons', duration: '20 months' },
    highlights: [
      'Complex truss system',
      'Code-compliant design',
      'Detailed documentation',
      'Successful completion',
    ],
  },
  {
    id: 4,
    title: 'Luxury Residential Tower',
    category: 'residential',
    location: 'Miami, USA',
    year: '2024',
    description: 'Premium residential high-rise with innovative steel frame design. Provided comprehensive structural engineering services.',
    image: '/tekla/tekla1.webp',
    images: [],
    services: ['Steel Frame Design', '3D Modeling', 'Steel Detailing', 'Estimation'],
    stats: { floors: '35 stories', steel: '4,800 tons', duration: '16 months' },
    highlights: [
      'Innovative design',
      'Premium quality',
      'BIM integration',
      'Client satisfaction',
    ],
  },
  {
    id: 5,
    title: 'Shopping Mall Complex',
    category: 'commercial',
    location: 'Chicago, USA',
    year: '2023',
    description: 'Large shopping mall with expansive steel structures. Delivered complete detailing and design services.',
    image: 'https://cdnb.artstation.com/p/assets/images/images/023/283/189/large/deepak-satokiya-shoppingview-a.jpg?1578687346',
    images: [],
    services: ['Structural Design', 'Steel Detailing', 'Shop Drawings', 'MTO'],
    stats: { area: '600,000 sq ft', steel: '9,500 tons', duration: '22 months' },
    highlights: [
      'Large span structures',
      'Efficient design',
      'Timely delivery',
      'Quality excellence',
    ],
  },
  {
    id: 6,
    title: 'Warehouse Facility',
    category: 'industrial',
    location: 'Atlanta, USA',
    year: '2024',
    description: 'Massive warehouse facility with pre-engineered building systems. Provided PEB design and detailing services.',
    image: '/tekla/tekla4.webp',
    images: [],
    services: ['PEB Design', 'Steel Detailing', 'Fabrication Support', 'Estimation'],
    stats: { area: '1,200,000 sq ft', steel: '15,000 tons', duration: '28 months' },
    highlights: [
      'PEB systems',
      'Cost-effective solution',
      'Rapid construction',
      'Quality deliverables',
    ],
  },
  {
    id: 7,
    title: 'Sports Stadium',
    category: 'infrastructure',
    location: 'Dallas, USA',
    year: '2022',
    description: 'Iconic sports stadium with complex steel roof structure. Delivered advanced engineering and detailing services.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.-etEbllW6uYvdEOaJzE-xwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    images: [],
    services: ['Structural Design', 'Connection Design', '3D Modeling', 'Steel Detailing'],
    stats: { capacity: '80,000 seats', steel: '18,000 tons', duration: '30 months' },
    highlights: [
      'Complex roof structure',
      'Advanced engineering',
      'BIM implementation',
      'Iconic design',
    ],
  },
  {
    id: 8,
    title: 'Mixed-Use Development',
    category: 'commercial',
    location: 'Seattle, USA',
    year: '2024',
    description: 'Modern mixed-use development combining residential and commercial spaces. Provided comprehensive steel engineering services.',
    image: 'https://th.bing.com/th/id/R.9e9c8eb23752798270f74c617826bb01?rik=aOauzgBTnUCNtQ&riu=http%3a%2f%2fwww.ppcc.com.kh%2fppcc_prime%2fwp-content%2fuploads%2ftheedge-ppcc-05.jpg&ehk=bj2fktWVuNMLKs3dm66oFN0JVL1PDscP66fMB%2b3Nbdg%3d&risl=&pid=ImgRaw&r=0',
    images: [],
    services: ['Steel Frame Design', 'Steel Detailing', 'BIM Services', 'Estimation'],
    stats: { area: '850,000 sq ft', steel: '11,500 tons', duration: '26 months' },
    highlights: [
      'Mixed-use design',
      'Sustainable solutions',
      'Comprehensive services',
      'Project success',
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const openProjectModal = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) closeProjectModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeProjectModal]);

  useEffect(() => {
    setMetaTags(
      'Commercial & Institutional Steel Projects Portfolio | Caliber Tech Solutions',
      'Explore Caliber Tech Solutions\' portfolio of commercial and institutional steel projects. Showcasing fabrication-ready steel drawings, BIM modeling, and CNC/DXF deliverables across North America.',
      'commercial institutional steel projects, steel project portfolio, fabrication-ready steel drawings, structural steel projects, North America steel partner'
    );
    setCanonical('/projects');
    setStructuredData([
      getWebPageSchema(
        'Commercial & Institutional Steel Projects Portfolio | Caliber Tech Solutions',
        'Explore Caliber Tech Solutions\' portfolio of commercial and institutional steel projects. Showcasing fabrication-ready steel drawings, BIM modeling, and CNC/DXF deliverables across North America.',
        '/projects'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
      ]),
    ]);

    const loadProjects = async () => {
      try {
        const apiProjects = await projectsService.getAll();
        if (apiProjects && apiProjects.length > 0) {
          const projectsWithImages = apiProjects.map(p => ({
            ...p,
            images: p.images || []
          }));
          setProjects(projectsWithImages);
        } else {
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects(defaultProjects);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'commercial':
        return Building2;
      case 'industrial':
        return Wrench;
      case 'infrastructure':
        return Layers;
      case 'residential':
        return Building2;
      default:
        return Building2;
    }
  };

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
              Our Work
            </span>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
              Project
              <span className="block text-brand-red mt-2">Portfolio</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className={`text-xl md:text-2xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto transition-colors duration-300`}>
                Showcasing our expertise through successful structural steel projects worldwide
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '4000+', label: 'Projects Completed' },
              { value: '15+', label: 'Countries' },
              { value: '21+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} p-6 rounded-xl border-2 text-center transition-all duration-300 hover:border-brand-red hover:shadow-xl`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-brand-red mb-2">{stat.value}</p>
                <p className={`text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 ${isLight ? 'bg-white' : 'bg-dark-bg'} border-b ${isLight ? 'border-gray-300' : 'border-dark-border'} transition-colors duration-300 sticky top-20 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-brand-red text-white shadow-lg scale-105'
                    : isLight
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      : 'bg-dark-bg-tertiary text-dark-text-secondary hover:bg-dark-bg-card'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const isHovered = hoveredProject === project.id;

              return (
                <div
                  key={project.id}
                  className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden transition-all duration-300 hover:border-brand-red hover:shadow-2xl group cursor-pointer`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => openProjectModal(project)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {/* Image Carousel */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageCarousel
                      mainImage={project.image}
                      images={project.images || []}
                      alt={project.title}
                      className="w-full h-full"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon size={20} className="text-white" />
                          <span className="text-white text-sm font-semibold capitalize">
                            {project.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-white text-xs">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 z-30 pointer-events-none">
                      <div className={`w-12 h-12 bg-brand-red rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isHovered ? 'scale-110 rotate-12' : 'scale-100'
                      }`}>
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 transition-colors duration-300 group-hover:text-brand-red`}>
                      {project.title}
                    </h3>
                    <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 leading-relaxed transition-colors duration-300`}>
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-tertiary border-dark-border'} p-4 rounded-lg border mb-4`}>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-xs text-brand-red font-semibold mb-1 capitalize">{key}</p>
                            <p className={`text-sm font-bold ${isLight ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <p className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                        Services Provided:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIdx) => (
                          <span
                            key={serviceIdx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isLight
                                ? 'bg-brand-red/10 text-brand-red'
                                : 'bg-brand-red/20 text-white'
                            }`}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, highlightIdx) => (
                        <div key={highlightIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-red flex-shrink-0" />
                          <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className={`text-xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your structural steel project to life with our expertise and experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
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

      {selectedProject && (() => {
        const ModalIcon = getCategoryIcon(selectedProject.category);
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closeProjectModal}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
                isLight ? 'bg-white' : 'bg-dark-bg-card'
              } animate-fade-up`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors duration-200"
                data-testid="button-close-modal"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden rounded-t-2xl">
                <ImageCarousel
                  mainImage={selectedProject.image}
                  images={selectedProject.images || []}
                  alt={selectedProject.title}
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ModalIcon size={20} className="text-brand-red" />
                    <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-brand-red">
                    <MapPin size={18} />
                    <span className={`font-medium ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                      {selectedProject.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-red">
                    <Calendar size={18} />
                    <span className={`font-medium ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-8 ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                  {selectedProject.description}
                </p>

                <div className={`grid grid-cols-3 gap-4 p-5 rounded-xl mb-8 ${
                  isLight ? 'bg-gray-50 border border-gray-200' : 'bg-dark-bg-tertiary border border-dark-border'
                }`}>
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-brand-red font-bold uppercase tracking-wider mb-1">{key}</p>
                      <p className={`text-lg sm:text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isLight
                            ? 'bg-brand-red/10 text-brand-red border border-brand-red/20'
                            : 'bg-brand-red/20 text-white border border-brand-red/30'
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Project Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-brand-red flex-shrink-0" />
                        <span className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    onClick={closeProjectModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Discuss This Project
                    <ArrowRight size={18} />
                  </Link>
                  <button
                    onClick={closeProjectModal}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 ${
                      isLight
                        ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        : 'border-dark-border text-dark-text-secondary hover:bg-dark-bg-tertiary'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}

