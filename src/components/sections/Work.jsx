function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work section">
      <div className="container section-title" data-aos="fade-up">
        <h2>How We Transform Your Ideas Into Reality</h2>
        <p>Our proven 4-step development process ensures your project is delivered on time, within budget, and exceeds expectations</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="steps-wrapper">

          <div className="step-item" data-aos="fade-right" data-aos-delay="200">
            <div className="step-content">
              <div className="step-icon">
                <i className="bi bi-chat-square-dots"></i>
              </div>
              <div className="step-info">
                <span className="step-number">Step 01</span>
                <h3>Discovery & Analysis</h3>
                <p>We deep-dive into your business goals, target audience, and technical requirements. Our team conducts stakeholder interviews and competitive analysis to create a solid foundation for your project.</p>
              </div>
            </div>
          </div>

          <div className="step-item" data-aos="fade-left" data-aos-delay="300">
            <div className="step-content">
              <div className="step-icon">
                <i className="bi bi-diagram-3"></i>
              </div>
              <div className="step-info">
                <span className="step-number">Step 02</span>
                <h3>Design & Architecture</h3>
                <p>Creating user-centered designs and robust technical architecture. We develop wireframes, prototypes, and system blueprints that ensure scalability and optimal user experience.</p>
              </div>
            </div>
          </div>

          <div className="step-item" data-aos="fade-right" data-aos-delay="400">
            <div className="step-content">
              <div className="step-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <div className="step-info">
                <span className="step-number">Step 03</span>
                <h3>Development & Testing</h3>
                <p>Building your solution using modern technologies and agile methodologies. We conduct rigorous testing at every stage, including unit tests, integration tests, and user acceptance testing.</p>
              </div>
            </div>
          </div>

          <div className="step-item" data-aos="fade-left" data-aos-delay="500">
            <div className="step-content">
              <div className="step-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <div className="step-info">
                <span className="step-number">Step 04</span>
                <h3>Launch & Optimization</h3>
                <p>Seamless deployment with comprehensive monitoring and performance optimization. We provide training, documentation, and ongoing support to ensure your success beyond launch.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWeWork;