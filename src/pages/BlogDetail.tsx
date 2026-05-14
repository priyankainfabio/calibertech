import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { setMetaTags, setCanonical, setStructuredData, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import { useTheme } from '../contexts/ThemeContext';
import { blogPosts } from '../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      setMetaTags(
        `${post.title} | Caliber Tech Solutions Blog`,
        post.excerpt,
        post.tags.join(', ')
      );
      setCanonical(`/blog/${post.slug}`);
      setStructuredData([
        getWebPageSchema(
          `${post.title} | Caliber Tech Solutions Blog`,
          post.excerpt,
          `/blog/${post.slug}`
        ),
        getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Caliber Tech Solutions',
            logo: {
              '@type': 'ImageObject',
              url: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/cropped-Calibar-Tech-Logo-8560830.png?format=webp',
            },
          },
        },
      ]);
    }
    window.scrollTo(0, 0);
  }, [post]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!post) {
    return (
      <main className={`min-h-screen flex items-center justify-center ${isLight ? 'bg-white' : 'bg-dark-bg'}`}>
        <div className="text-center px-4">
          <h1 className={`text-4xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>Blog Post Not Found</h1>
          <p className={`mb-8 ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>The article you are looking for does not exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id);

  const renderContent = (text: string) => {
    if (text.startsWith('### ')) {
      return (
        <h3 className={`text-xl font-bold mt-8 mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {text.replace('### ', '')}
        </h3>
      );
    }
    if (text.startsWith('## ')) {
      return (
        <h2 className={`text-2xl font-bold mt-10 mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {text.replace('## ', '')}
        </h2>
      );
    }
    if (text.startsWith('**') && text.endsWith('**')) {
      return (
        <p className={`font-bold text-lg mt-6 mb-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {text.replace(/\*\*/g, '')}
        </p>
      );
    }
    return (
      <p className={`mb-4 leading-relaxed text-lg ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
        {text}
      </p>
    );
  };

  return (
    <main>
      <section className={`relative py-16 sm:py-20 md:py-24 ${isLight ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-gradient-to-b from-dark-bg to-dark-bg-secondary'} transition-colors duration-300`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/blog"
            className={`inline-flex items-center gap-2 mb-8 font-medium ${isLight ? 'text-gray-600 hover:text-brand-red' : 'text-dark-text-secondary hover:text-brand-red'} transition-colors`}
            data-testid="link-back-to-blog"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-brand-red" />
              <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-brand-red" />
              <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User size={15} className="text-brand-red" />
              <span className={isLight ? 'text-gray-600' : 'text-dark-text-tertiary'}>{post.author}</span>
            </div>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  isLight ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-red/20 text-white'
                }`}
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-4 ${isLight ? 'bg-white' : 'bg-dark-bg'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden mb-12 shadow-lg">
            <img
              src={post.image}
              alt={`${post.title} - Caliber Tech Solutions blog article`}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className={`mb-12 p-6 rounded-xl border ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-dark-bg-card border-dark-border'}`}>
              <h3 className={`text-lg font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>Table Of Contents</h3>
              <ul className="space-y-2">
                {post.tableOfContents.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0"></div>
                    <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <article className="prose-custom mb-16">
            {post.content.map((paragraph, idx) => (
              <div key={idx}>{renderContent(paragraph)}</div>
            ))}
          </article>

          <div className={`border-t ${isLight ? 'border-gray-200' : 'border-dark-border'} pt-8 mb-8`}>
            <div className={`p-6 rounded-xl ${isLight ? 'bg-brand-red/5' : 'bg-brand-red/10'}`}>
              <p className={`text-lg font-semibold mb-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                Need Expert Steel Detailing Services?
              </p>
              <p className={`mb-4 ${isLight ? 'text-gray-700' : 'text-dark-text-secondary'}`}>
                Caliber Tech Solutions provides comprehensive structural steel detailing, design, and engineering services across North America.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                data-testid="link-blog-cta-contact"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className={`py-16 ${isLight ? 'bg-gray-50' : 'bg-dark-bg-secondary'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className={`group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border ${
                    isLight ? 'bg-white border-gray-200 hover:border-brand-red' : 'bg-dark-bg-card border-dark-border hover:border-brand-red'
                  } hover:shadow-lg transition-all duration-300`}
                  data-testid={`link-related-blog-${relatedPost.id}`}
                >
                  <div className="w-full sm:w-40 h-32 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs mb-1 ${isLight ? 'text-gray-500' : 'text-dark-text-tertiary'}`}>
                      {formatDate(relatedPost.date)}
                    </p>
                    <h3 className={`font-bold mb-2 line-clamp-2 ${isLight ? 'text-gray-900' : 'text-white'} group-hover:text-brand-red transition-colors`}>
                      {relatedPost.title}
                    </h3>
                    <p className={`text-sm line-clamp-2 ${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
