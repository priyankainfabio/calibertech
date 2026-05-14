import { useEffect } from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    setMetaTags(
      'Steel Detailing Blog | BIM Modeling & Fabrication Insights | Caliber Tech Solutions',
      'Expert insights on structural steel detailing, BIM 3D modeling, Tekla software, shop drawings, and fabrication-ready steel drawings. Industry best practices from Caliber Tech Solutions.',
      'steel detailing blog, BIM modeling insights, Tekla steel detailing, structural steel articles, fabrication-ready drawings blog'
    );
    setCanonical('/blog');
    setStructuredData([
      getWebPageSchema(
        'Steel Detailing Blog | BIM Modeling & Fabrication Insights | Caliber Tech Solutions',
        'Expert insights on structural steel detailing, BIM 3D modeling, Tekla software, shop drawings, and fabrication-ready steel drawings. Industry best practices from Caliber Tech Solutions.',
        '/blog'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
      ]),
    ]);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main>
      <section className={`relative py-16 sm:py-20 md:py-24 lg:py-32 ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} overflow-hidden transition-colors duration-300`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-4 block">
              Insights & Updates
            </span>
            <h1 className={`text-5xl md:text-6xl lg:text-6xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-6 transition-colors duration-300`}>
              Our <span className="text-brand-red">Blog</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-brand-red rounded-full" />
              <p className={`text-xl md:text-2xl ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} max-w-3xl mx-auto transition-colors duration-300`}>
                Expert insights, industry news, and best practices in structural steel engineering
              </p>
              <div className="h-1 w-16 bg-brand-red rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className={`py-16 sm:py-20 ${isLight ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-gradient-to-b from-dark-bg-secondary to-dark-bg'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
                Featured Article
              </h2>
              <div className="w-24 h-1 bg-brand-red rounded-full"></div>
            </div>

            <Link
              to={`/blog/${featuredPost.slug}`}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 ${isLight ? 'bg-white border-gray-200' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden transition-all duration-300 hover:border-brand-red hover:shadow-2xl`}
              data-testid="link-featured-blog"
            >
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={`${featuredPost.title} - structural steel detailing article`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-red text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-brand-red" />
                    <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-brand-red" />
                    <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-brand-red" />
                    <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>
                      {featuredPost.author}
                    </span>
                  </div>
                </div>
                <h3 className={`text-2xl lg:text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-4 transition-colors duration-300 group-hover:text-brand-red`}>
                  {featuredPost.title}
                </h3>
                <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-6 leading-relaxed transition-colors duration-300 line-clamp-3`}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isLight ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-red/20 text-white'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-4 transition-all duration-300">
                  Read Full Article
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className={`py-16 sm:py-20 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              All Articles
            </h2>
            <div className="w-24 h-1 bg-brand-red rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className={`group ${isLight ? 'bg-white border-gray-200' : 'bg-dark-bg-card border-dark-border'} rounded-xl border-2 overflow-hidden transition-all duration-300 hover:border-brand-red hover:shadow-xl`}
                data-testid={`link-blog-post-${post.id}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.title} - steel detailing and fabrication insights`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-brand-red" />
                      <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-brand-red" />
                      <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300 group-hover:text-brand-red line-clamp-2`}>
                    {post.title}
                  </h3>
                  <p className={`${isLight ? 'text-gray-700' : 'text-dark-text-secondary'} mb-4 text-sm leading-relaxed line-clamp-3 transition-colors duration-300`}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isLight ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-red/20 text-white'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-r from-brand-red to-red-700' : 'bg-gradient-to-r from-brand-red/90 to-red-800'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Expert Steel Detailing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Caliber Tech Solutions provides comprehensive structural steel detailing, design, and engineering services across North America. Contact us for your next project.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-brand-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-testid="link-blog-contact-cta"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
