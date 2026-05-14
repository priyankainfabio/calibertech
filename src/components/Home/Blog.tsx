import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { blogPosts } from '../../data/blogData';

export default function Blog() {
  const [visibleBlog, setVisibleBlog] = useState<number[]>([]);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleBlog((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-blog-item]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className={`py-12 sm:py-16 md:py-20 ${isLight ? 'bg-gray-50' : 'bg-dark-bg-secondary'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Latest Blog Posts</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Industry insights and engineering best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              data-blog-item
              data-index={idx}
              data-testid={`link-blog-${idx}`}
              className={`group ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-dark-bg-card border-dark-border'} rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border ${
                visibleBlog.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleBlog.includes(idx) ? `${idx * 0.1}s` : '0s',
              }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={`${post.title} - steel engineering article`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className={`text-base font-semibold leading-snug ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors line-clamp-3`}>
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-secondary text-lg inline-block" data-testid="link-view-all-blog">View All Articles</Link>
        </div>
      </div>
    </section>
  );
}
