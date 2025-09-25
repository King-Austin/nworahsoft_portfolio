import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Import common components
import SEOHead from './components/common/SEOHead';
import ErrorBoundary from './components/common/ErrorBoundary';
import { LoadingSpinner } from './components/common/LoadingComponents';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/HeroImproved'));
const About = lazy(() => import('./components/sections/About'));
const Stats = lazy(() => import('./components/sections/Stats'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const HowWeWork = lazy(() => import('./components/sections/Work'));
const FAQ = lazy(() => import('./components/sections/Fag'));
const CallToAction = lazy(() => import('./components/sections/Action'));
const Team = lazy(() => import('./components/sections/Team'));
const Contact = lazy(() => import('./components/sections/ContactImproved'));


// Custom hook for mobile navigation
const useMobileNavigation = () => {
  useEffect(() => {
    const handleMobileToggle = () => {
      document.body.classList.toggle('mobile-nav-active');
      const toggle = document.querySelector('.mobile-nav-toggle');
      if (toggle) {
        toggle.classList.toggle('bi-list');
        toggle.classList.toggle('bi-x');
      }
    };

    const handleDropdownToggle = (e) => {
      e.preventDefault();
      e.currentTarget.closest('li')?.classList.toggle('dropdown-active');
    };

    // Add event listeners
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const dropdownToggles = document.querySelectorAll('.toggle-dropdown');

    mobileNavToggle?.addEventListener('click', handleMobileToggle);
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', handleDropdownToggle);
    });

    // Cleanup
    return () => {
      mobileNavToggle?.removeEventListener('click', handleMobileToggle);
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleDropdownToggle);
      });
    };
  }, []);
};

// Home page component
const HomePage = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Hero />
    <About />
    <Stats />
    <Testimonials />
    <HowWeWork />
    <FAQ />
    <CallToAction />
    <Team />
    <Contact />
  </Suspense>
);

function App() {
  useMobileNavigation();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <Router>
          <div className="index-page">
            <Header />
            <main className="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Future routes can be added here */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
                {/* <Route path="/services" element={<ServicesPage />} /> */}
                {/* <Route path="/contact" element={<ContactPage />} /> */}
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;