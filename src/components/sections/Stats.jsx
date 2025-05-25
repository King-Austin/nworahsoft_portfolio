import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    // This effect would initialize PureCounter when the component mounts
    // In a real implementation, you'd need to import and initialize PureCounter here
    // or use a React-specific counter library
    
    // Example with a library like 'react-countup'
    // CountUp would be initialized here
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12">
            <div className="stats-overview text-center text-lg-start" data-aos="fade-right" data-aos-delay="200">
              <h3>Our growth in numbers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna vel libero tincidunt, in finibus nisi faucibus. Proin vel erat nec orci sagittis ullamcorper vel at urna.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="stats-grid" data-aos="zoom-in" data-aos-delay="300">
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">232</span><span className="plus">+</span>
                  </div>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-folder2-open"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span><span className="plus">+</span>
                  </div>
                  <p>Completed Projects</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">1453</span><span className="plus">+</span>
                  </div>
                  <p>Support Hours</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">32</span><span className="plus">+</span>
                  </div>
                  <p>Expert Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;