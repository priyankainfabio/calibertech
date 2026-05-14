import { useEffect } from 'react';
import { setMetaTags, setCanonical, setStructuredData, getOrganizationSchema, getBreadcrumbSchema, getWebPageSchema } from '../utils/seo';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import MissionVision from '../components/Home/MissionVision';
import Services from '../components/Home/Services';
import DetailingServices from '../components/Home/DetailingServices';
import ToWhomWeServe from '../components/Home/ToWhomWeServe';
import OurExpertise from '../components/Home/OurExpertise';
import WhyUs from '../components/Home/WhyUs';
import Projects from '../components/Home/Projects';
import Blog from '../components/Home/Blog';
import Members from '../components/Home/Members';
import QATechnical from '../components/Home/QATechnical';
import CTA from '../components/Home/CTA';

export default function Home() {
  useEffect(() => {
    setMetaTags(
      'Caliber Tech Solutions | Structural Steel Detailing Services & BIM Modeling',
      'Caliber Tech Solutions is a leading structural steel detailing company offering shop drawings, 3D BIM modeling, Tekla steel detailing, connection design, CNC/DXF deliverables, and fabrication-ready drawings for North America.',
      'structural steel detailing services, shop drawings 3D modeling, miscellaneous metal detailing, Tekla steel detailing experts, BIM 3D steel modeling, steel connection design coordination, fabrication-ready steel drawings, CNC DXF E-Sheet deliverables, commercial institutional steel projects, North America steel detailing partner'
    );
    setCanonical('/');
    setStructuredData([
      getOrganizationSchema(),
      getWebPageSchema(
        'Caliber Tech Solutions | Structural Steel Detailing Services',
        'Leading structural steel detailing, BIM modeling, shop drawings, and engineering company serving North America.',
        '/'
      ),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Caliber Tech Solutions',
        url: 'https://calibertechsolutions.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://calibertechsolutions.com/services?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ]);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <OurExpertise />
      <Services />
      <DetailingServices />
      <ToWhomWeServe />
      <WhyUs />
      <MissionVision />
      <Projects />
      <Members />
      <Blog />
      <QATechnical />
      <CTA />
    </main>
  );
}
