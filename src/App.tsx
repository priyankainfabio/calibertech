import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectCategory from './pages/ProjectCategory';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import TeklaModels from './pages/TeklaModels';
import IsometricViews from './pages/IsometricViews';
import JobsAtSite from "./pages/JobsAtSite";
import Tekla3D from "./pages/Tekla3D";
import Portfolio from "./pages/Portfolio";
import Infrastructure from "./pages/Infrastructure";


function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-dark-bg'
    }`}>
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/steel-detailing-portfolio/projects-completed-2" element={<JobsAtSite />} />
          <Route path="/steel-detailing-portfolio/tekla-3d" element={<Tekla3D />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:category" element={<ProjectCategory />} />
          <Route path="/steel-detailing-portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/steel-detailing-portfolio/models" element={<TeklaModels />} />
          <Route path="/steel-detailing-portfolio/isometric-views" element={<IsometricViews />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider>
        <ScrollToTop />
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
