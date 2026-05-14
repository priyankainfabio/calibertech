const SITE_URL = 'https://calibertechsolutions.com';
const SITE_NAME = 'Caliber Tech Solutions';
const SITE_LOGO = 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/cropped-Calibar-Tech-Logo-8560830.png?format=webp';

export function setMetaTags(title: string, description: string, keywords?: string) {
  document.title = title;

  updateMeta('name', 'description', description);
  if (keywords) updateMeta('name', 'keywords', keywords);

  updateMeta('property', 'og:title', title);
  updateMeta('property', 'og:description', description);
  updateMeta('property', 'og:type', 'website');
  updateMeta('property', 'og:site_name', SITE_NAME);
  updateMeta('property', 'og:image', SITE_LOGO);
  updateMeta('property', 'og:url', `${SITE_URL}${window.location.pathname}`);

  updateMeta('name', 'twitter:card', 'summary_large_image');
  updateMeta('name', 'twitter:title', title);
  updateMeta('name', 'twitter:description', description);
  updateMeta('name', 'twitter:image', SITE_LOGO);

  updateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
}

function updateMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function setCanonical(path: string) {
  const url = `${SITE_URL}${path}`;
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.href = url;
}

export function setStructuredData(schemas: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.querySelectorAll('script[data-seo-schema]');
  existing.forEach(el => el.remove());

  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
  schemaArray.forEach((schema, idx) => {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo-schema', `schema-${idx}`);
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    description: 'Leading structural steel detailing, design, and engineering company serving North America and global markets. Experts in Tekla, BIM, shop drawings, and fabrication-ready steel drawings.',
    telephone: '+1-760-588-2207',
    email: 'info@calibertechsolutions.com',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '10101 W 136th St. #1108',
        addressLocality: 'Overland Park',
        addressRegion: 'KS',
        postalCode: '66221',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'B2/17, Mohan Cooperative Industrial Estate, Badarpur',
        addressLocality: 'New Delhi',
        postalCode: '110044',
        addressCountry: 'IN',
      },
    ],
    sameAs: [
      'https://www.facebook.com/calibertechsolutions/',
      'https://x.com/CalibertechS',
      'https://www.linkedin.com/company/caliber-tech-solutions',
    ],
    foundingDate: '2004',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200,
    },
    areaServed: ['North America', 'Europe', 'Middle East', 'Asia'],
    knowsAbout: [
      'Structural Steel Detailing',
      'Shop Drawings',
      '3D Modeling',
      'BIM Services',
      'Steel Connection Design',
      'Tekla Structures',
      'CNC/DXF Deliverables',
      'Fabrication-Ready Steel Drawings',
      'Miscellaneous Metal Detailing',
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: name,
    description: description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'North America',
    },
  };
}

export function getWebPageSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name,
    description: description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
