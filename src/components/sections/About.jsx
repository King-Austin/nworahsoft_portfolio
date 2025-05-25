import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-heading">Our Vision &amp; Mission</h2>
            <p className="lead">We're dedicated to transforming businesses through innovative solutions and strategic expertise that drive sustainable growth.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>Pioneering solutions that challenge conventional thinking and create new opportunities for success.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Growth</h4>
              <p>Facilitating sustainable expansion through strategic planning and calculated execution.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>Integrity</h4>
              <p>Upholding the highest standards of ethics, transparency and accountability in all our endeavors.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4>Collaboration</h4>
              <p>Working alongside our clients as partners to achieve mutual growth and shared success.</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center about-showcase">
          <div className="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-delay="300">
            <div className="about-image-grid">
              <img src="/assets/img/about/about-15.webp" className="img-grid-main" alt="Our company vision" />
              <img src="/assets/img/about/about-17.webp" className="img-grid-secondary" alt="Our team" />
              <img src="/assets/img/about/about-square-5.webp" className="img-grid-tertiary" alt="Our workspace" />
              <div className="experience-badge" data-aos="zoom-in" data-aos-delay="500">
                <span className="years">15+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-delay="200">
            <div className="about-content-box">
              <h3>Transforming Businesses Since 2008</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor in lectus pharetra, at iaculis orci scelerisque. Cras porta enim id neque interdum, at fermentum odio venenatis.</p>

              <div className="progress-item">
                <div className="d-flex justify-content-between">
                  <span className="progress-title">Strategic Planning</span>
                  <span className="progress-percent">94%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '94%' }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="d-flex justify-content-between">
                  <span className="progress-title">Business Development</span>
                  <span className="progress-percent">87%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="d-flex justify-content-between">
                  <span className="progress-title">Market Research</span>
                  <span className="progress-percent">92%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <a href="about.html" className="btn btn-discover mt-4">Learn More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;