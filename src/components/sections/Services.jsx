import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section">


      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="services-row">
          <div className="row">
            <div className="col-lg-4">
              <div className="services-headline" data-aos="fade-up">
                <p className="services-subtitle">Expert Guidance</p>
                <h2 className="services-title">Innovative Solutions We Provide</h2>
              </div>

              <div className="services-description" data-aos="fade-up" data-aos-delay="100">
                <p>Our team delivers cutting-edge strategies to help you achieve your goals. Discover how our tailored services can benefit your business.</p>
              </div>

              <div className="services-image-container" data-aos="fade-up" data-aos-delay="200">
                <div className="services-image">
                  <img src="/assets/img/services/services-12.webp" alt="Services" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="services-grid">
                <div className="row gy-4">
                  {/* Service Item 1 */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-card">
                      <div className="service-content text-center">
                        <div className="service-icon">
                          <i className="bi bi-cash-stack"></i>
                        </div>
                        <div className="service-info">
                          <h3><a href="#">Strategic Planning</a></h3>
                          <p>We offer customized plans to optimize your operations and improve overall efficiency across the board.</p>
                          <div className="service-action">
                            <a href="service-details.html" className="read-more-btn">Details <i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Item 2 */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-card">
                      <div className="service-content text-center">
                        <div className="service-icon">
                          <i className="bi bi-list-check"></i>
                        </div>
                        <div className="service-info">
                          <h3><a href="#">Digital Marketing</a></h3>
                          <p>Our expert team crafts engaging campaigns that connect with your audience and drive conversions effectively.</p>
                          <div className="service-action">
                            <a href="service-details.html" className="read-more-btn">View More <i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Item 3 */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-card">
                      <div className="service-content text-center">
                        <div className="service-icon">
                          <i className="bi bi-bar-chart"></i>
                        </div>
                        <div className="service-info">
                          <h3><a href="#">Performance Analysis</a></h3>
                          <p>We analyze your data to provide actionable insights, helping you make informed decisions for future growth.</p>
                          <div className="service-action">
                            <a href="service-details.html" className="read-more-btn">Read More <i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Item 4 */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-card">
                      <div className="service-content text-center">
                        <div className="service-icon">
                          <i className="bi bi-pie-chart"></i>
                        </div>
                        <div className="service-info">
                          <h3><a href="#">Market Research</a></h3>
                          <p>Understanding your market is key, and we provide comprehensive research to give you a competitive edge.</p>
                          <div className="service-action">
                            <a href="service-details.html" className="read-more-btn">Learn More <i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;