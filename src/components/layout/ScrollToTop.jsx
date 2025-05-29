import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      id="scroll-top" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={handleScrollToTop}
      style={{
        display: isVisible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--accent-color, #007bff)',
        color: 'white',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.backgroundColor = 'var(--accent-color-hover, #0056b3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = 'var(--accent-color, #007bff)';
      }}
      title="Back to Top"
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" style={{ fontSize: '24px' }}></i>
    </a>
  );
};

export default ScrollToTop;