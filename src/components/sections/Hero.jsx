import React, { useEffect, useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaBootstrap, 
  FaJsSquare, 
  FaGitAlt,
  FaDatabase,
  FaPlus 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiMongodb, 
  SiExpress,
  SiTailwindcss,
  SiPostgresql 
} from 'react-icons/si';

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Rotating phrases for the animation
  const phrases = [
    "Business Ideas",
    "Creative Concepts", 
    "Digital Dreams",
    "Startup Visions",
    "Tech Solutions",
    "E-commerce Goals",
    "Web Projects",
    "Mobile Apps"
  ];

  // Text rotation animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-tag">
                <i className="bi bi-code-slash"></i>
                <span>Custom Software Development</span>
              </div>
              
              {/* Animated Headline */}
              <h1>
                Transform Your{' '}
                <span className="animated-phrase-container">
                  <span className={`highlight animated-phrase ${isTyping ? 'typing' : 'deleting'}`}>
                    {phrases[currentPhraseIndex]}
                  </span>
                  <span className="typing-cursor">|</span>
                </span>
                {' '}Into Powerful Digital Solutions
              </h1>

              <p className="lead">NworahSoft Technologies builds scalable web applications, mobile apps, and custom software that drive real business growth for startups and enterprises across Nigeria.</p>
              
              <ul className="hero-features">
                <li><i className="bi bi-check-circle"></i> Web applications with React & modern web technologies</li>
                <li><i className="bi bi-check-circle"></i> E-commerce platforms </li>
                <li><i className="bi bi-check-circle"></i> Backend, API development and third-party integrations</li>
              </ul>

              {/* Technology Stack */}
              <div className="tech-stack mb-4" data-aos="fade-up" data-aos-delay="200">
                <p className="tech-label mb-3">Built with modern technologies:</p>
                <div className="tech-logos d-flex flex-wrap align-items-center gap-3">
                  
                  {/* React */}
                  <div className="tech-item" title="React">
                    <FaReact size={32} color="#61DAFB" />
                  </div>

                  {/* Node.js */}
                  <div className="tech-item" title="Node.js">
                    <FaNodeJs size={32} color="#339933" />
                  </div>

                  {/* Django */}
                  <div className="tech-item" title="Django">
                    <SiDjango size={32} color="#092E20" />
                  </div>

                  {/* Express.js */}
                  <div className="tech-item" title="Express.js">
                    <SiExpress size={32} color="#000000" />
                  </div>

                  {/* JavaScript */}
                  <div className="tech-item" title="JavaScript">
                    <FaJsSquare size={32} color="#F7DF1E" />
                  </div>

                  {/* Python */}
                  <div className="tech-item" title="Python">
                    <FaPython size={32} color="#3776AB" />
                  </div>

                  {/* MongoDB */}
                  <div className="tech-item" title="MongoDB">
                    <SiMongodb size={32} color="#47A248" />
                  </div>

                  {/* PostgreSQL */}
                  <div className="tech-item" title="PostgreSQL">
                    <SiPostgresql size={32} color="#336791" />
                  </div>

                  {/* Bootstrap */}
                  <div className="tech-item" title="Bootstrap">
                    <FaBootstrap size={32} color="#7952B3" />
                  </div>

                  {/* Tailwind CSS */}
                  <div className="tech-item" title="Tailwind CSS">
                    <SiTailwindcss size={32} color="#06B6D4" />
                  </div>

                  {/* Git */}
                  <div className="tech-item" title="Git">
                    <FaGitAlt size={32} color="#F05032" />
                  </div>

                  {/* Plus icon for more */}
                  <div className="tech-item tech-more" title="And more...">
                    <FaPlus size={32} color="#f85d23" />
                  </div>
                </div>
              </div>
              
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                  <i className="bi bi-chat-dots me-2"></i>
                  Start Your Project
                </a>
                <a href="#portfolio" className="btn btn-outline-light">
                  <i className="bi bi-eye me-2"></i>
                  View Our Work
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/img/about/about-square-13.webp" alt="NworahSoft Technologies - Custom Software Development Team" className="img-fluid hero-image" />
              
              {/* Enhanced floating tech stack */}
              <div className="floating-element tech-stack-floating">
                <div className="floating-tech-icons">
                  <div className="rotating-icon" style={{ animationDelay: '0s' }}>
                    <FaReact size={24} color="#61DAFB" />
                  </div>
                  <div className="rotating-icon" style={{ animationDelay: '1s' }}>
                    <FaNodeJs size={24} color="#339933" />
                  </div>
                  <div className="rotating-icon" style={{ animationDelay: '2s' }}>
                    <FaJsSquare size={24} color="#F7DF1E" />
                  </div>
                  <span className="tech-text">Modern Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Animated Text Styles */
        .animated-phrase-container {
          position: relative;
          display: inline-block;
        }
        
        .animated-phrase {
          display: inline-block;
          min-width: 200px;
          text-align: left;
          transition: all 0.4s ease;
        }
        
        .animated-phrase.typing {
          opacity: 1;
          transform: translateY(0);
          animation: typeIn 0.8s ease-out;
        }
        
        .animated-phrase.deleting {
          opacity: 0.6;
          transform: translateY(-5px);
          animation: typeOut 0.5s ease-in;
        }
        
        .typing-cursor {
          color: #f85d23;
          animation: blink 1.2s infinite;
          font-weight: 300;
          margin-left: 2px;
        }
        
        @keyframes typeIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            transform: translateY(-2px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes typeOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0.3;
            transform: translateY(10px) scale(0.95);
          }
        }
        
        @keyframes blink {
          0%, 45% {
            opacity: 1;
          }
          50%, 95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .tech-stack {
          margin: 1.5rem 0;
        }
        
        .tech-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .tech-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        
        .tech-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }
        
        .tech-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(248, 93, 35, 0.3);
        }
        
        .tech-more {
          background: rgba(248, 93, 35, 0.1);
          border-color: rgba(248, 93, 35, 0.3);
        }
        
        .tech-more:hover {
          background: rgba(248, 93, 35, 0.2);
        }
        
        .floating-element.tech-stack-floating {
          position: absolute;
          top: 20%;
          right: -10%;
          background: rgba(248, 93, 35, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1rem;
          box-shadow: 0 8px 25px rgba(248, 93, 35, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-tech-icons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .rotating-icon {
          animation: rotate 3s linear infinite;
        }
        
        .tech-text {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          margin-left: 0.5rem;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        @media (max-width: 768px) {
          .animated-phrase {
            min-width: 160px;
            font-size: 0.9em;
          }
          
          .tech-logos {
            gap: 0.5rem;
          }
          
          .tech-item {
            width: 40px;
            height: 40px;
          }
          
          .floating-element.tech-stack-floating {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .animated-phrase {
            min-width: 140px;
            font-size: 0.85em;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;