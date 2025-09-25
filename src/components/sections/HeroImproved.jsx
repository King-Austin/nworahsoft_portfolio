import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useInView } from 'react-intersection-observer';
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

const Hero = memo(() => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Rotating phrases for the animation - memoized for performance
  const phrases = useMemo(() => [
    "Business Ideas",
    "Creative Concepts",
    "Digital Dreams",
    "Startup Visions",
    "Tech Solutions",
    "E-commerce Goals",
    "Web Projects",
    "Mobile Apps"
  ], []);

  // Technology stack data - memoized
  const techStack = useMemo(() => [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: SiExpress, name: "Express.js", color: "#000000" },
    { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaPlus, name: "And more...", color: "#f85d23" }
  ], []);

  // Text rotation animation effect - optimized
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setIsTyping(false);

      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length, inView]);

  // Image load handler
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // CTA click handlers with analytics
  const handleCTA = useCallback((action) => {
    // Track CTA clicks (integrate with analytics later)
    console.log(`CTA clicked: ${action}`);

    // Smooth scroll to sections
    const element = document.getElementById(action);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero section dark-background"
      ref={ref}
      aria-labelledby="hero-title"
      role="banner"
    >
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-tag" role="banner">
                <i className="bi bi-code-slash" aria-hidden="true"></i>
                <span>Custom Software Development</span>
              </div>

              {/* Animated Headline */}
              <h1 id="hero-title">
                Transform Your{' '}
                <span className="animated-phrase-container" aria-live="polite" aria-atomic="true">
                  <span
                    className={`highlight animated-phrase ${isTyping ? 'typing' : 'deleting'}`}
                    key={currentPhraseIndex}
                  >
                    {phrases[currentPhraseIndex]}
                  </span>
                  <span className="typing-cursor" aria-hidden="true">|</span>
                </span>
                {' '}Into Powerful Digital Solutions
              </h1>

              <p className="lead">
                NworahSoft Technologies builds scalable web applications, mobile apps, and custom software
                that drive real business growth for startups and enterprises across Nigeria.
              </p>

              <ul className="hero-features" role="list">
                <li role="listitem">
                  <i className="bi bi-check-circle" aria-hidden="true"></i>
                  Web applications with React & modern web technologies
                </li>
                <li role="listitem">
                  <i className="bi bi-check-circle" aria-hidden="true"></i>
                  E-commerce platforms
                </li>
                <li role="listitem">
                  <i className="bi bi-check-circle" aria-hidden="true"></i>
                  Backend, API development and third-party integrations
                </li>
              </ul>

              {/* Technology Stack */}
              <div className="tech-stack mb-4" data-aos="fade-up" data-aos-delay="200">
                <p className="tech-label mb-3">Built with modern technologies:</p>
                <div className="tech-logos d-flex flex-wrap align-items-center gap-3" role="list" aria-label="Technology stack">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="tech-item"
                        title={tech.name}
                        role="listitem"
                        tabIndex={0}
                        aria-label={`${tech.name} technology`}
                      >
                        <IconComponent size={32} color={tech.color} aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hero-cta">
                <button
                  className="btn btn-primary"
                  onClick={() => handleCTA('contact')}
                  aria-label="Start your project - navigate to contact section"
                >
                  <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
                  Start Your Project
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={() => handleCTA('portfolio')}
                  aria-label="View our work - navigate to portfolio section"
                >
                  <i className="bi bi-eye me-2" aria-hidden="true"></i>
                  View Our Work
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay="300">
              <img
                src="/assets/img/about/about-square-13.webp"
                alt="NworahSoft Technologies - Custom Software Development Team"
                className={`img-fluid hero-image ${isLoaded ? 'loaded' : 'loading'}`}
                onLoad={handleImageLoad}
                loading="eager"
                decoding="async"
              />

              {/* Enhanced floating tech stack */}

            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NworahSoft Technologies",
          "description": "Leading Nigerian software development company specializing in custom web applications, e-commerce platforms, mobile apps, and digital solutions.",
          "url": "https://nworahsoft.com",
          "logo": "https://nworahsoft.com/assets/img/logo.webp",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Awka",
            "addressRegion": "Anambra",
            "addressCountry": "NG"
          },
          "serviceType": ["Web Development", "Mobile App Development", "E-commerce Solutions", "Custom Software Development"],
          "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
          }
        })}
      </script>

      <style jsx>{`
        /* Enhanced loading states */
        .hero-image.loading {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s ease;
        }

        .hero-image.loaded {
          opacity: 1;
          transform: scale(1);
        }

        /* Improved focus states for accessibility */
        .tech-item:focus {
          outline: 2px solid #f85d23;
          outline-offset: 2px;
          border-radius: 8px;
        }

        .btn:focus {
          outline: 2px solid #f85d23;
          outline-offset: 2px;
        }

        /* Enhanced animations */
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
        }

        .animated-phrase.deleting {
          opacity: 0.7;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: #f85d23;
          margin-left: 2px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Enhanced responsive design */
        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-cta .btn {
            width: 100%;
          }

          .tech-logos {
            justify-content: center;
          }

          .animated-phrase {
            min-width: 150px;
            font-size: 0.9em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-phrase,
          .typing-cursor,
          .rotating-icon {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;