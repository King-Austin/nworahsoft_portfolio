import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-heading">Building Tomorrow's Software Today</h2>
            <p className="lead">We're a passionate team of developers and innovators on a mission to help businesses thrive through cutting-edge technology solutions.</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-code-slash" style={{ color: '#f85d23' }}></i>
              </div>
              <h4>Modern Technology</h4>
              <p>We use the latest frameworks and tools like React, Node.js, and Django to build scalable, future-ready applications.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-heart" style={{ color: '#f85d23' }}></i>
              </div>
              <h4>Client-Focused</h4>
              <p>Your success is our priority. We listen, understand your needs, and deliver solutions that exceed expectations.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-lightning-charge" style={{ color: '#f85d23' }}></i>
              </div>
              <h4>Fast Delivery</h4>
              <p>We believe in rapid development cycles and quick turnarounds without compromising on quality or functionality.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-container">
                <i className="bi bi-gem" style={{ color: '#f85d23' }}></i>
              </div>
              <h4>Quality First</h4>
              <p>Every line of code is crafted with precision. We test thoroughly and deliver robust, maintainable solutions.</p>
            </div>
          </div>
        </div>

        {/* Main About Content - Full Width */}
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content-centered">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <h3>Fresh Perspective, Proven Results</h3>
                  <p className="mb-4">
                    Founded in 2024, NworahSoft Technologies emerged from a simple belief: that every business, 
                    regardless of size, deserves access to world-class software solutions. We're not just another 
                    development company – we're your technology partners, committed to turning your ideas into reality.
                  </p>
                  
                  <p className="mb-4">
                    Our team combines fresh innovation with proven methodologies, ensuring that every project we 
                    deliver is not only technically sound but also aligned with your business goals and growth aspirations.
                  </p>


                </div>

                <div className="col-lg-6">
                  {/* Tech Stack Showcase */}
                  <div className="tech-expertise">
                    <h5 className="mb-3">Our Technical Expertise</h5>
                    
                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span className="skill-title">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          Frontend Development
                        </span>
                        <span className="skill-badge">Expert</span>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span className="skill-title">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          Backend Development
                        </span>
                        <span className="skill-badge">Expert</span>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span className="skill-title">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          Database Design 
                        </span>
                        <span className="skill-badge">Advanced</span>
                      </div>
                    </div>



                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span className="skill-title">
                          <i className="bi bi-check-circle text-success me-2"></i>
                          E-commerce & API Integration
                        </span>
                        <span className="skill-badge">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="100">
            <div className="why-choose-us">
              <h3 className="text-center mb-5">Why Start Your Journey With Us?</h3>
              <div className="row g-4">
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="reason-card">
                    <div className="reason-icon">
                      <i className="bi bi-rocket-takeoff" style={{ color: '#f85d23' }}></i>
                    </div>
                    <h5>Startup Mindset</h5>
                    <p>We understand the hustle. As a startup ourselves, we know what it takes to build something from scratch and make it succeed.</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="reason-card">
                    <div className="reason-icon">
                      <i className="bi bi-currency-dollar" style={{ color: '#f85d23' }}></i>
                    </div>
                    <h5>Startup-Friendly Pricing</h5>
                    <p>Quality shouldn't break the bank. We offer competitive rates and flexible payment plans to help growing businesses thrive.</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="reason-card">
                    <div className="reason-icon">
                      <i className="bi bi-graph-up" style={{ color: '#f85d23' }}></i>
                    </div>
                    <h5>Growth Partnership</h5>
                    <p>We're not just service providers – we're partners in your growth. Your success directly contributes to our success story.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-box {
          text-align: center;
          padding: 2rem 1rem;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          height: 100%;
          transition: transform 0.3s ease;
        }
        
        .feature-box:hover {
          transform: translateY(-5px);
        }
        
        .icon-container {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(248, 93, 35, 0.1);
          border-radius: 50%;
        }
        
        .icon-container i {
          font-size: 2rem;
        }
        
        .about-content-centered {
          background: #fff;
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .skill-item {
          margin-bottom: 1rem;
          padding: 0.5rem 0;
        }
        
        .skill-badge {
          background: #f85d23;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .reason-card {
          text-align: center;
          padding: 2rem 1rem;
        }
        
        .reason-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(248, 93, 35, 0.1);
          border-radius: 50%;
        }
        
        .reason-icon i {
          font-size: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .about-content-centered {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;