import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/layout/Header';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
{/*}
import Services from './components/sections/Services';
import Clients from './components/sections/Clients';
import Testimonials from './components/sections/Testimonials';
import HowWeWork from './components/sections/HowWeWork';
import Faq from './components/sections/Faq';
import CallToAction from './components/sections/CallToAction';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
*/}
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop.jsx';

// Import AOS for animations
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

  


    // Initialize mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }

    // Handle dropdown toggles
    document.querySelectorAll('.toggle-dropdown').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.closest('li').classList.toggle('dropdown-active');
      });
    });

    // Initialize FAQ toggles
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', function() {
        this.closest('.faq-item').classList.toggle('faq-active');
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', function() {});
      }
    };
  }, []);

  return (
    <Router>
      <div className="index-page">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={
              <>
              <Hero />
              <About />
              <Stats />

                {/*
                <Services />
                <Clients />
                <Testimonials />
                <HowWeWork />
                <Faq />
                <CallToAction />
                <Team />
                <Contact />
                */}
              </>
            } 
            />
            
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;