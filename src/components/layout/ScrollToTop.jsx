import React from 'react';

const ScrollToTop = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center" onClick={handleScrollToTop}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTop;