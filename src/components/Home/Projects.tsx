import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const projects = [
  {
    title: 'Modern Commercial Complex',
    location: 'Overland Park, KS',
    type: 'Design & Detailing',
    image: 'https://tse2.mm.bing.net/th/id/OIP.tvshvZB13pLz2u7St0BpVgHaEp?w=900&h=565&rs=1&pid=ImgDetMain&o=7&rm=3',
    link: '/projects/commercial',
  },
  {
    title: 'Industrial Warehouse',
    location: 'Kansas City, MO',
    type: 'Fabrication & Connection',
    image: 'https://billingtonsafetysystems.co.uk/wp-content/uploads/2023/10/AdobeStock_605241995-scaled.jpeg',
    link: '/projects/industrial',
  },
  {
    title: 'Bridge Infrastructure',
    location: 'Wichita, KS',
    type: 'Structural Design',
    image: 'https://dhruvconsultancy.in/wp-content/uploads/2022/02/Experties-Bridges-scaled.jpg',
    link: '/projects/infrastructure',
  },
  {
    title: 'High-Rise Office Tower',
    location: 'Olathe, KS',
    type: 'Detailing & MTO',
    image: 'https://img.freepik.com/premium-photo/building-with-word-company-top_878402-3323.jpg',
    link: '/projects/commercial',
  },
  {
    title: 'Manufacturing Facility',
    location: 'Lenexa, KS',
    type: 'Full Service',
    image: 'https://tse4.mm.bing.net/th/id/OIP.8hQ6amTTpH4zNO6KRs4a1wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    link: '/projects/industrial',
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleProjects((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-project-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`py-12 sm:py-16 md:py-20 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Latest Projects</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Showcasing our expertise across diverse industries and regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link
              to={project.link}
              key={idx}
              data-project-card
              data-index={idx}
              data-testid={`link-project-${idx}`}
              className={`group ${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border ${
                visibleProjects.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleProjects.includes(idx) ? `${idx * 0.1}s` : '0s',
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={`${project.title} - structural steel project by Caliber Tech Solutions`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-1 transition-colors duration-300`}>{project.title}</h3>
                    <p className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} transition-colors duration-300`}>{project.location}</p>
                  </div>
                  <ExternalLink size={20} className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className={`inline-block px-3 py-1 ${isLight ? 'bg-gray-100' : 'bg-dark-bg-tertiary'} text-brand-red text-sm font-semibold rounded transition-colors duration-300`}>
                  {project.type}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary text-lg inline-block" data-testid="link-view-all-projects">View All Projects</Link>
        </div>
      </div>
    </section>
  );
}
