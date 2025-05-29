import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
            <div className="stats-grid" ref={ref} data-aos="zoom-in" data-aos-delay="300">
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-people-fill" style={{ color: '#f85d23' }}></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    {inView && <CountUp start={0} end={5} duration={2.5} />}
                    <span className="plus">+</span>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-folder2-open" style={{ color: '#f85d23' }}></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    {inView && <CountUp start={0} end={8} duration={2.5} />}
                    <span className="plus">+</span>
                  </div>
                  <p>Projects Delivered</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-clock-history" style={{ color: '#f85d23' }}></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    {inView && <CountUp start={0} end={100} duration={2.5} />}
                    <span className="plus">%</span>
                  </div>
                  <p>On-Time Delivery</p>
                </div>
              </div>

              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-code-slash" style={{ color: '#f85d23' }}></i>
                </div>
                <div className="stats-content">
                  <div className="stats-number">
                    {inView && <CountUp start={0} end={10} duration={3} />}
                    <span className="plus">+</span>
                  </div>
                  <p>Technologies Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-overview h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .stats-overview p {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stats-card {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f85d23, #ff8c42);
        }

        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(248, 93, 35, 0.15);
        }

        .stats-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          background: rgba(248, 93, 35, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .stats-icon i {
          font-size: 2rem;
        }

        .stats-card:hover .stats-icon {
          background: rgba(248, 93, 35, 0.2);
          transform: scale(1.1);
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stats-number .plus {
          color: #f85d23;
          font-weight: 700;
        }

        .stats-content p {
          font-size: 1.1rem;
          color: #6c757d;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .stats-card {
            padding: 1.5rem 1rem;
          }
          
          .stats-number {
            font-size: 2.5rem;
          }
          
          .stats-overview h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;