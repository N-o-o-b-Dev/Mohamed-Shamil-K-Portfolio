import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import CaseStudyPage from './pages/CaseStudyPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-zinc-300 selection:bg-white/20 selection:text-white flex flex-col justify-between">
        {/* Scroll To Top on every route navigation */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-1">
          <Routes>
            {/* Home page: [hero section, Education, Contact section] */}
            <Route path="/" element={<Home />} />

            {/* Separate page for Services */}
            <Route path="/services" element={<Services />} />

            {/* Separate page for About US */}
            <Route path="/about" element={<AboutUs />} />

            {/* Separate page for Case study */}
            <Route path="/case-study" element={<CaseStudyPage />} />

            {/* Separate page for Projects */}
            <Route path="/projects" element={<ProjectsPage />} />

            {/* Separate page for Contact US */}
            <Route path="/contact" element={<ContactUs />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
