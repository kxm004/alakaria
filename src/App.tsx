import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import OfficesAndMedia from './components/sections/OfficesAndMedia';

function ScrollToHash() {
  const location = useLocation();
  // Scroll to top on route change; if there's a hash, attempt to scroll to it
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  return null;
}

function App() {

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        <div className="relative z-10">
          <ScrollToHash />
          <Header onContactClick={scrollToContact} />
          <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onContactClick={scrollToContact} />
                <About onContactClick={scrollToContact} />
                <Services onContactClick={scrollToContact} />
                
                <Contact onContactClick={scrollToContact} />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/offices-and-media" element={<OfficesAndMedia />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;