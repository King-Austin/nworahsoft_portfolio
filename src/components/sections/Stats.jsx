import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12">
            <div className="stats-overview text-center text-lg-start" data-aos="fade-right" data-aos-delay="200">
              <h3>Our Achievements in Numbers</h3>
              <p>
                At NworahSoft Technologies, we are committed to delivering exceptional results. 
                Our numbers reflect the trust our clients place in us and the dedication of our team.
              </p>
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
                    <CountUp end={5} duration={2} className='purecounter'/> <span className="plus">+</span>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-folder2-open"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <CountUp end={6} duration={2} className='purecounter'/> <span className="plus">+</span>
                  </div>
                  <p>Projects Delivered</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <CountUp end={24} duration={2} className='purecounter'/> <span className="plus">+</span>
                  </div>
                  <p>Support Hours Provided</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    <CountUp end={5} duration={2} className='purecounter' /> <span className="plus">+</span>
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