import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Analysis",
      icon: "bi-chat-square-dots",
      description: "We deep-dive into your business goals, target audience, and technical requirements. Our team conducts stakeholder interviews and competitive analysis to create a solid foundation for your project.",
      details: [
        "Business requirements gathering",
        "Stakeholder interviews",
        "Market research & competitor analysis",
        "Technical feasibility assessment",
        "Project scope definition"
      ],
      aos: "fade-right",
      delay: 200
    },
    {
      id: 2,
      number: "02",
      title: "Design & Architecture",
      icon: "bi-diagram-3",
      description: "Creating user-centered designs and robust technical architecture. We develop wireframes, prototypes, and system blueprints that ensure scalability and optimal user experience.",
      details: [
        "UI/UX wireframing & prototyping",
        "System architecture design",
        "Database schema planning",
        "API design & documentation",
        "Technology stack selection"
      ],
      aos: "fade-left",
      delay: 300
    },
    {
      id: 3,
      number: "03",
      title: "Development & Testing",
      icon: "bi-code-slash",
      description: "Building your solution using modern technologies and agile methodologies. We conduct rigorous testing at every stage, including unit tests, integration tests, and user acceptance testing.",
      details: [
        "Agile development process",
        "Code quality assurance",
        "Automated testing implementation",
        "Performance optimization",
        "Security best practices"
      ],
      aos: "fade-right",
      delay: 400
    },
    {
      id: 4,
      number: "04",
      title: "Launch & Optimization",
      icon: "bi-rocket-takeoff",
      description: "Seamless deployment with comprehensive monitoring and performance optimization. We provide training, documentation, and ongoing support to ensure your success beyond launch.",
      details: [
        "Production deployment",
        "Performance monitoring setup",
        "User training & documentation",
        "Post-launch support",
        "Continuous improvement"
      ],
      aos: "fade-left",
      delay: 500
    }
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(activeStep === stepId ? 0 : stepId);
  };

  return (
    <section
      id="how-we-work"
      className="how-we-work section"
      ref={ref}
      aria-labelledby="work-process-title"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2 id="work-process-title">How We Transform Your Ideas Into Reality</h2>
        <p>Our proven 4-step development process ensures your project is delivered on time, within budget, and exceeds expectations</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="steps-wrapper" role="list" aria-label="Development process steps">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-item ${isVisible ? 'animate-in' : ''}`}
              data-aos={step.aos}
              data-aos-delay={step.delay}
              style={{ animationDelay: `${index * 0.2}s` }}
              role="listitem"
            >
              <div className="step-content">
                <button
                  className="step-icon"
                  onClick={() => handleStepClick(step.id)}
                  aria-expanded={activeStep === step.id}
                  aria-controls={`step-details-${step.id}`}
                  aria-label={`Toggle details for ${step.title}`}
                >
                  <i className={`bi ${step.icon}`} aria-hidden="true"></i>
                  <span className="step-number-badge">{step.number}</span>
                </button>

                <div className="step-info">
                  <span className="step-number">Step {step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {/* Expandable details */}
                  <div
                    id={`step-details-${step.id}`}
                    className={`step-details ${activeStep === step.id ? 'expanded' : ''}`}
                    aria-hidden={activeStep !== step.id}
                  >
                    <ul className="step-details-list">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <i className="bi bi-check-circle" aria-hidden="true"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="step-toggle-btn"
                    onClick={() => handleStepClick(step.id)}
                    aria-expanded={activeStep === step.id}
                    aria-controls={`step-details-${step.id}`}
                  >
                    {activeStep === step.id ? 'Show Less' : 'Learn More'}
                    <i className={`bi bi-chevron-${activeStep === step.id ? 'up' : 'down'}`} aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline Visualization */}
        <div className="process-timeline" aria-hidden="true">
          <div className="timeline-line"></div>
          {steps.map((step, index) => (
            <div
              key={`timeline-${step.id}`}
              className="timeline-dot"
              style={{ animationDelay: `${index * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Software Development Process",
          "description": "Our proven 4-step software development process",
          "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description,
            "itemListElement": step.details.map(detail => ({
              "@type": "HowToDirection",
              "text": detail
            }))
          }))
        })}
      </script>

      <style jsx>{`
        .step-item.animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .step-icon {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .step-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(248, 93, 35, 0.3);
        }

        .step-number-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #f85d23;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }

        .step-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
          margin-top: 1rem;
        }

        .step-details.expanded {
          max-height: 300px;
        }

        .step-details-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .step-details-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          background: rgba(248, 93, 35, 0.05);
          border-radius: 6px;
        }

        .step-details-list li i {
          color: #f85d23;
          flex-shrink: 0;
        }

        .step-toggle-btn {
          background: none;
          border: 2px solid #f85d23;
          color: #f85d23;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .step-toggle-btn:hover {
          background: #f85d23;
          color: white;
        }

        .process-timeline {
          position: relative;
          height: 4px;
          background: linear-gradient(90deg, #f85d23, #ff8c42);
          border-radius: 2px;
          margin: 3rem auto;
          max-width: 600px;
          overflow: hidden;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f85d23, #ff8c42);
          animation: timelineFlow 3s ease-in-out infinite;
        }

        .timeline-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #f85d23;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          animation: dotAppear 0.5s ease-out forwards;
        }

        .timeline-dot:nth-child(1) { left: 12%; }
        .timeline-dot:nth-child(2) { left: 37%; }
        .timeline-dot:nth-child(3) { left: 62%; }
        .timeline-dot:nth-child(4) { left: 87%; }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes timelineFlow {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: -100%; }
        }

        @keyframes dotAppear {
          from { opacity: 0; transform: translateY(-50%) scale(0); }
          to { opacity: 1; transform: translateY(-50%) scale(1); }
        }

        @media (max-width: 768px) {
          .step-toggle-btn {
            width: 100%;
            justify-content: center;
          }

          .process-timeline {
            margin: 2rem auto;
          }
        }
      `}</style>
    </section>
  );
}

export default HowWeWork;