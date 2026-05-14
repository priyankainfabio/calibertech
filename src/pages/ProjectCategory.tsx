import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Building2, Wrench, Layers, MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';
import { projectsService, Project } from '../utils/api';
import ImageCarousel from '../components/ImageCarousel';

interface CategoryConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Building2;
  heroImage: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  commercial: {
    title: 'Commercial & Institutional Steel Projects',
    subtitle: 'Steel Solutions for Commercial Excellence',
    description: 'Our commercial building projects showcase cutting-edge structural steel design and detailing for office complexes, retail centers, shopping malls, and mixed-use developments. We deliver innovative solutions that meet the highest standards of safety, efficiency, and aesthetics.',
    icon: Building2,
    heroImage: 'https://img.freepik.com/premium-photo/modern-business-office-building_1127-20327.jpg',
  },
  industrial: {
    title: 'Industrial Facilities',
    subtitle: 'Heavy-Duty Steel Structures',
    description: 'From manufacturing plants to warehouse facilities, our industrial projects demonstrate expertise in heavy-duty steel structures. We specialize in pre-engineered buildings, fabrication support, and comprehensive detailing services that ensure structural integrity and operational efficiency.',
    icon: Wrench,
    heroImage: 'https://tbm-corp.com/wp-content/uploads/2020/04/manufacturing-plant.jpg',
  },
  infrastructure: {
    title: 'Infrastructure Projects',
    subtitle: 'Building the Backbone of Progress',
    description: 'Our infrastructure projects include bridges, stadiums, and public works that require complex steel engineering. We deliver advanced structural design, connection engineering, and BIM services for projects that shape communities and stand the test of time.',
    icon: Layers,
    heroImage: 'https://creativedesignresolutions.com/wp-content/uploads/2016/04/CDR-1395-540x360.jpg',
  },
  residential: {
    title: 'Residential Projects',
    subtitle: 'Steel Framing for Modern Living',
    description: 'Our residential projects feature innovative steel frame designs for high-rise apartments, luxury condominiums, and custom homes. We combine structural excellence with architectural vision to create living spaces that are both beautiful and built to last.',
    icon: Building2,
    heroImage: 'https://images.squarespace-cdn.com/content/v1/6321a8468450453e98507255/1664460548187-FK10P88WOGNX157QYZ5D/v3---Private-Luxury-Residential-Tower%2C-Kolkata.jpg',
  },
};

export default function ProjectCategory() {
  const { category } = useParams<{ category: string }>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const config = category ? categoryConfigs[category] : null;
  const CategoryIcon = config?.icon || Building2;

  useEffect(() => {
    if (config && category) {
      const categoryTitle = category === 'commercial' ? 'Commercial & Institutional Steel Projects' : config.title;
      setMetaTags(
        `${categoryTitle} | Caliber Tech Solutions - Fabrication-Ready Steel Drawings & BIM Modeling`,
        `${config.description} Caliber Tech Solutions delivers structural steel detailing services, shop drawings, CNC/DXF deliverables, and BIM 3D modeling across North America.`,
        `${category} steel projects, structural steel detailing services, fabrication-ready steel drawings, BIM 3D steel modeling, ${config.title.toLowerCase()}, North America steel detailing partner`
      );
      setCanonical(`/projects/${category}`);
      setStructuredData([
        getWebPageSchema(
          `${categoryTitle} | Caliber Tech Solutions - Fabrication-Ready Steel Drawings & BIM Modeling`,
          `${config.description} Caliber Tech Solutions delivers structural steel detailing services, shop drawings, CNC/DXF deliverables, and BIM 3D modeling across North America.`,
          `/projects/${category}`
        ),
        getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: categoryTitle, url: `/projects/${category}` },
        ]),
      ]);
    }

    const loadProjects = async () => {
      setIsLoading(true);
      try {
        const apiProjects = await projectsService.getAll();
        if (apiProjects && apiProjects.length > 0) {
          const filtered = apiProjects
            .filter(p => p.category === category)
            .map(p => ({ ...p, images: p.images || [] }));
          setProjects(filtered);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [category, config]);

  if (!config) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${isLight ? 'bg-white' : 'bg-dark-bg'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4`}>Category Not Found</h1>
          <Link to="/projects" className="text-brand-red hover:underline">
            View All Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'}`}>
        <div className="absolute inset-0 z-0">
          <img
            src={config.heroImage}
            alt={`${config.title} - structural steel detailing and fabrication-ready drawings by Caliber Tech Solutions`}
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className={`absolute inset-0 ${isLight ? 'bg-white/80' : 'bg-dark-bg/90'}`}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <Link to="/projects" className="text-brand-red hover:underline text-sm font-medium">
                Projects
              </Link>
              <span className={`${isLight ? 'text-gray-400' : 'text-gray-500'}`}>/</span>
              <span className={`text-sm font-medium ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                {config.title}
              </span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center">
                <CategoryIcon size={40} className="text-brand-red" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300`}>
              {config.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-red font-semibold mb-6">
              {config.subtitle}
            </p>
            <p className={`text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto leading-relaxed`}>
              {config.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '4000+', label: 'Projects Completed' },
              { value: '15+', label: 'Countries' },
              { value: '21+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`${isLight ? 'bg-white/80 border-gray-300' : 'bg-dark-bg-card/80 border-dark-border'} backdrop-blur-sm p-4 rounded-xl border text-center`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-bold text-brand-red mb-1">{stat.value}</p>
                <p className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4`}>
              Our {config.title}
            </h2>
            <p className={`text-lg ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>
              Explore our portfolio of {config.title.toLowerCase()} projects
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden animate-pulse`}>
                  <div className={`h-64 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'}`}></div>
                  <div className="p-6">
                    <div className={`h-6 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded mb-3`}></div>
                    <div className={`h-4 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded mb-2`}></div>
                    <div className={`h-4 ${isLight ? 'bg-gray-200' : 'bg-dark-bg-tertiary'} rounded w-3/4`}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16">
              <CategoryIcon size={64} className={`mx-auto mb-4 ${isLight ? 'text-gray-300' : 'text-gray-600'}`} />
              <p className={`text-xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4`}>
                No {config.title.toLowerCase()} projects found yet.
              </p>
              <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'} mb-6`}>
                Check back soon for updates or explore other categories.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-brand-red hover:underline font-medium"
              >
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => {
                const isHovered = hoveredProject === project.id;

                return (
                  <div
                    key={project.id}
                    className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden transition-all duration-300 hover:border-brand-red hover:shadow-2xl group`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    data-testid={`project-card-${project.id}`}
                  >
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

                    <div className="p-6">
                      <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-3 transition-colors duration-300 group-hover:text-brand-red`}>
                        {project.title}
                      </h3>
                      <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 leading-relaxed line-clamp-3`}>
                        {project.description}
                      </p>

                      <div className={`${isLight ? 'bg-gray-50 border-gray-300' : 'bg-dark-bg-tertiary border-dark-border'} p-4 rounded-lg border mb-4`}>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-xs text-brand-red font-semibold mb-1 capitalize">{key}</p>
                              <p className={`text-sm font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className={`text-xs font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2`}>
                          Services Provided:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.services.slice(0, 3).map((service, serviceIdx) => (
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
                          {project.services.length > 3 && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isLight ? 'bg-gray-100 text-gray-600' : 'bg-dark-bg text-gray-400'}`}>
                              +{project.services.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {project.highlights.slice(0, 2).map((highlight, highlightIdx) => (
                          <div key={highlightIdx} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-brand-red flex-shrink-0" />
                            <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
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
          )}
        </div>
      </section>

      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a {config.title.replace(' Projects', '').replace(' Buildings', '').replace(' Facilities', '')} Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your structural steel project to life with our expertise and experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="link-contact-cta"
            >
              Start Your Project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              data-testid="link-all-projects"
            >
              View All Projects
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
