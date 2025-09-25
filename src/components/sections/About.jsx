import React, { useState, useEffect, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { OptimizedImage } from '../common/ImageComponents';

const About = memo(() => {
  const [activeTab, setActiveTab] = useState('mission');
  const [countersVisible, setCountersVisible] = useState(false);

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (statsInView) {
      setCountersVisible(true);
    }
  }, [statsInView]);

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: 'bi-bullseye',
      content: 'To empower Nigerian businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: 'bi-eye',
      content: 'To be the leading technology partner for businesses across Africa, recognized for delivering exceptional digital solutions that transform industries.'
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: 'bi-heart',
      content: 'Innovation, integrity, collaboration, and excellence drive everything we do. We believe in building lasting partnerships with our clients.'
    }
  ];

  const stats = [
    { number: 5, suffix: '+', label: 'Happy Clients', icon: 'bi-emoji-smile' },
    { number: 8, suffix: '+', label: 'Projects Completed', icon: 'bi-check-circle' },
    { number: 2022, suffix: '', label: 'Founded', icon: 'bi-calendar' },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: 'bi-star' }
  ];

  const features = [
    {
      icon: 'bi-code-slash',
      title: 'Modern Technology',
      description: 'We use the latest frameworks and tools like React, Node.js, and Django to build scalable, future-ready applications.',
      color: '#61DAFB'
    },
    {
      icon: 'bi-heart',
      title: 'Client-Focused',
      description: 'Your success is our priority. We listen, understand your needs, and deliver solutions that exceed expectations.',
      color: '#f85d23'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Fast Delivery',
      description: 'We believe in rapid development cycles and quick turnarounds without compromising on quality or functionality.',
      color: '#28a745'
    },
    {
      icon: 'bi-gem',
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure the highest standards of performance and reliability.',
      color: '#6f42c1'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-heading">Building Tomorrow's Software Today</h2>
            <p className="lead">
              We're a passionate team of developers and innovators on a mission to help businesses thrive
              through cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* Mission/Vision/Values Tabs */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="mission-tabs" data-aos="fade-up" data-aos-delay="300">
              <div className="tabs-header">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                  >
                    <i className={`bi ${tab.icon}`} aria-hidden="true"></i>
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>

              <div className="tab-content">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${tab.id}`}
                  >
                    <div className="tab-content-inner">
                      <i className={`bi ${tab.icon} content-icon`} aria-hidden="true"></i>
                      <p>{tab.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mb-5" ref={statsRef}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              <div className="stat-card">
                <div className="stat-icon">
                  <i className={`bi ${stat.icon}`} aria-hidden="true"></i>
                </div>
                <div className="stat-number">
                  {countersVisible && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                      useEasing={true}
                      separator=""
                    />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="feature-box">
                <div className="icon-container" style={{ backgroundColor: feature.color }}>
                  <i className={`bi ${feature.icon}`} aria-hidden="true"></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Preview */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="team-preview">
              <h3>Meet Our Expert Team</h3>
              <p className="mb-4">
                Our diverse team of developers, designers, and strategists work together
                to deliver exceptional results for every project.
              </p>
              <a href="#team" className="btn btn-primary">
                <i className="bi bi-people me-2" aria-hidden="true"></i>
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "NworahSoft Technologies",
            "description": "Leading Nigerian software development company",
            "foundingDate": "2020",
            "numberOfEmployees": "5-10",
            "slogan": "Building Tomorrow's Software Today",
            "mission": "To empower Nigerian businesses with cutting-edge technology solutions",
            "vision": "To be the leading technology partner for businesses across Africa"
          }
        })}
      </script>

      <style jsx>{`
        .mission-tabs {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .tabs-header {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
        }

        .tab-button {
          flex: 1;
          padding: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .tab-button:hover {
          background: rgba(248, 93, 35, 0.1);
        }

        .tab-button.active {
          background: #f85d23;
          color: white;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #f85d23;
        }

        .tab-content {
          padding: 2rem;
          min-height: 200px;
        }

        .tab-pane {
          display: none;
          animation: fadeIn 0.3s ease;
        }

        .tab-pane.active {
          display: block;
        }

        .tab-content-inner {
          text-align: center;
        }

        .content-icon {
          font-size: 3rem;
          color: #f85d23;
          margin-bottom: 1rem;
        }

        .stat-card {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f85d23, #ff8c42);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #f85d23;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #6c757d;
          font-weight: 600;
        }

        .feature-box {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(248, 93, 35, 0.15);
        }

        .icon-container {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 1.8rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .feature-box h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .feature-box p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .team-preview {
          background: linear-gradient(135deg, #f85d23, #ff8c42);
          color: white;
          padding: 3rem 2rem;
          border-radius: 15px;
        }

        .team-preview h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .team-preview p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .tabs-header {
            flex-direction: column;
          }

          .tab-button {
            flex-direction: row;
            justify-content: flex-start;
            padding: 0.75rem 1rem;
          }

          .stat-card {
            padding: 1.5rem 1rem;
          }

          .feature-box {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
});

About.displayName = 'About';

export default About;