import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMobileNavToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      document.body.classList.toggle('mobile-nav-active');
    };

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', handleMobileNavToggle);
    }

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('mobile-nav-active');
      });
    });

    // Cleanup
    return () => {
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', handleMobileNavToggle);
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [isMobileMenuOpen]);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        
        {/* Logo - NworahSoft */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <div className="logo-container">
            <h1 className="sitename">
              <span className="brand-primary">NWORAHSOFT</span>
            </h1>
            {/* Simple tagline - no animation */}
            <span className="tagline d-none d-md-block">Building Tomorrow's Tech</span>
            <span className="tagline d-block d-md-none">Building Tomorrow's Tech</span>
          </div>
        </Link>

        {/* Mobile-Optimized Navigation */}
        <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className="active">
              <i className="bi bi-house me-2 d-lg-none"></i>
              <span>Home</span>
            </a></li>
            
            <li><a href="#about">
              <i className="bi bi-people me-2 d-lg-none"></i>
              <span className="d-none d-lg-inline">Our Story</span>
              <span className="d-lg-none">Story</span>
            </a></li>
            
            <li><a href="#services">
              <i className="bi bi-gear me-2 d-lg-none"></i>
              <span>Solutions</span>
            </a></li>
            
            <li><a href="#portfolio">
              <i className="bi bi-folder me-2 d-lg-none"></i>
              <span className="d-none d-lg-inline">Our Work</span>
              <span className="d-lg-none">Work</span>
            </a></li>
            
            <li><a href="#team">
              <i className="bi bi-person-badge me-2 d-lg-none"></i>
              <span>Team</span>
            </a></li>
            
            <li><a href="#testimonials">
              <i className="bi bi-star me-2 d-lg-none"></i>
              <span>Reviews</span>
            </a></li>
            
            <li><a href="#faq">
              <i className="bi bi-question-circle me-2 d-lg-none"></i>
              <span>FAQ</span>
            </a></li>
            
            <li><a href="#contact">
              <i className="bi bi-chat-dots me-2 d-lg-none"></i>
              <span className="d-none d-lg-inline">Let's Talk</span>
              <span className="d-lg-none">Contact</span>
            </a></li>
          </ul>
          
          {/* Enhanced Mobile Toggle */}
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </nav>

        {/* Responsive Header Actions */}
        <div className="header-actions d-flex align-items-center">
          {/* Desktop CTA */}
          <a href="#contact" className="btn-getstarted d-none d-lg-flex">
            <i className="bi bi-rocket-takeoff me-2"></i>
            Start Your Project
          </a>
          
          {/* Tablet CTA */}
          <a href="#contact" className="btn-getstarted d-none d-md-flex d-lg-none">
            <i className="bi bi-rocket-takeoff me-1"></i>
            Start Project
          </a>
          
          {/* Mobile CTA */}
          <a href="#contact" className="btn-getstarted d-md-none" title="Start Your Project">
            <i className="bi bi-rocket-takeoff"></i>
            <span className="visually-hidden">Start Project</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;