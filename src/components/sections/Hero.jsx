import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-tag">
                <i className="bi bi-rocket-takeoff"></i>
                <span>Innovative Solutions</span>
              </div>
              <h1>Achieving <span className="highlight">Outstanding Results</span> for Your Growth</h1>
              <p className="lead">Our dedicated team provides exceptional service to help you reach your business goals effectively.</p>
              <ul className="hero-features">
                <li><i className="bi bi-check-circle"></i> Streamlined operational processes</li>
                <li><i className="bi bi-check-circle"></i> Enhanced customer engagement strategies</li>
                <li><i className="bi bi-check-circle"></i> Data-driven decision support</li>
              </ul>
              <div className="hero-cta">
                <a href="#services" className="btn btn-primary">Explore Our Services</a>
                <a href="tel:+(234)9134846838" className="btn btn-link"><i className="bi bi-telephone"></i> +234-9134846838</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/img/about/about-square-13.webp" alt="" className="img-fluid hero-image" />
              <div className="stat-card top-right">
                <div className="stat-value">18.9K</div>
                <div className="stat-label">Improved market presence</div>
                <div className="stat-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
              </div>
              <div className="stat-card bottom-left">
                <div className="stat-value">+450%</div>
                <div className="stat-label">Increased lead generation</div>
                <div className="stat-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;