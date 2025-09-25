import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Memoize contact info to prevent re-renders
  const contactInfo = useMemo(() => [
    {
      icon: 'bi bi-geo-alt-fill',
      text: 'Awka, Anambra State, Nigeria',
      color: '#f85d23',
      type: 'location'
    },
    {
      icon: 'bi bi-telephone-fill',
      text: '+234 (0) 913 484 6838',
      href: 'tel:+2349134846838',
      color: '#f85d23',
      type: 'phone'
    },
    {
      icon: 'bi bi-envelope-fill',
      text: 'nworahebuka.a@gmail.com',
      href: 'mailto:nworahebuka.a@gmail.com',
      color: '#f85d23',
      type: 'email'
    },
    {
      icon: 'bi bi-whatsapp',
      text: 'WhatsApp Us',
      href: 'https://wa.me/2349134846838',
      color: '#25D366',
      type: 'whatsapp',
      external: true
    }
  ], []);

  // Memoize social links
  const socialLinks = useMemo(() => [
    {
      href: 'https://x.com/kingaustin360',
      icon: 'bi bi-twitter-x',
      label: 'Follow us on X (Twitter)',
      platform: 'Twitter'
    },
    {
      href: 'https://linkedin.com/company/nworahsoft',
      icon: 'bi bi-linkedin',
      label: 'Connect on LinkedIn',
      platform: 'LinkedIn'
    },
    {
      href: 'https://github.com/King-Austin',
      icon: 'bi bi-github',
      label: 'View our code on GitHub',
      platform: 'GitHub'
    },
    {
      href: 'https://wa.me/2349134846838',
      icon: 'bi bi-whatsapp',
      label: 'Chat on WhatsApp',
      platform: 'WhatsApp'
    }
  ], []);

  // Memoize navigation links
  const navigationLinks = useMemo(() => [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'Our Story' },
    { href: '#services', text: 'Solutions' },
    { href: '#portfolio', text: 'Our Work' },
    { href: '#team', text: 'Team' },
    { href: '#contact', text: 'Contact' }
  ], []);

  // Memoize services
  const services = useMemo(() => [
    'Business Websites',
    'E-commerce Platforms', 
    'Web Applications',
    'API Development',
    'Digital Consulting',
    'Tech Support'
  ], []);

  // Memoize why choose us points
  const whyChooseUs = useMemo(() => [
    '100% Nigerian Owned',
    'Local Market Understanding',
    'Affordable Pricing',
    '24/7 Support',
    'Naira-Friendly Payments'
  ], []);

  return (
    <footer 
      id="footer" 
      className="footer position-relative light-background"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container footer-top">
        <div className="row gy-4">
          
          {/* Company Info & Contact */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link 
              to="/" 
              className="logo d-flex align-items-center mb-3"
              aria-label="NworahSoft Technologies - Home"
            >
              <span className="sitename">NWORAHSOFT</span>
            </Link>
            <p className="footer-description">
              Empowering Nigerian businesses with cutting-edge technology solutions. 
              Building tomorrow's software today.
            </p>
            
            <address className="footer-contact pt-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item mb-2">
                  <i 
                    className={`${contact.icon} me-2`} 
                    style={{ color: contact.color }}
                    aria-hidden="true"
                  />
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="text-decoration-none"
                      {...(contact.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      })}
                      aria-label={`${contact.type}: ${contact.text}`}
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </address>

            {/* Social Links */}
            <nav className="social-links d-flex mt-4" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.platform}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-sm-6 footer-links">
            <h4>Quick Links</h4>
            <nav aria-label="Quick navigation links">
              <ul role="list">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      aria-label={`Navigate to ${link.text}`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-sm-6 footer-links">
            <h4>Our Solutions</h4>
            <nav aria-label="Our services">
              <ul role="list">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services"
                      aria-label={`Learn about ${service}`}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Nigerian Business Focus */}
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Why Choose Us?</h4>
            <ul className="why-choose-list" role="list">
              {whyChooseUs.map((point, index) => (
                <li key={index}>
                  <i 
                    className="bi bi-check-circle me-2" 
                    style={{ color: '#f85d23' }}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Nigerian Pride Section */}
            <div className="nigerian-pride mt-4">
              <div className="d-flex align-items-center mb-2">
                <span className="me-2 nigerian-flag" role="img" aria-label="Nigerian flag">🇳🇬</span>
                <span className="text-muted small">Proudly Nigerian</span>
              </div>
              <p className="small text-muted mb-0">
                Building the future of Nigerian technology, one project at a time.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Newsletter Section */}
      <section 
        className="container newsletter-section py-4" 
        style={{ borderTop: '1px solid rgba(248, 93, 35, 0.1)' }}
        aria-label="Newsletter subscription"
      >
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="mb-2">Stay Updated with Nigerian Tech Trends</h5>
            <p className="text-muted mb-0">
              Get insights on digital transformation, startup tips, and tech opportunities in Nigeria.
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <a 
              href="#contact" 
              className="btn btn-outline-primary btn-sm"
              aria-label="Subscribe to our newsletter"
            >
              <i className="bi bi-envelope me-2" aria-hidden="true" />
              Subscribe to Updates
            </a>
          </div>
        </div>
      </section>

      {/* Copyright & Credits */}
      <div 
        className="container copyright text-center py-4" 
        style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
      >
        <div className="row">
          <div className="col-md-6 text-md-start">
            <p className="mb-2">
              © {currentYear} <strong className="sitename">NWORAHSOFT Technologies</strong>
            </p>
            <p className="small text-muted mb-0">
              All Rights Reserved | Made with <span role="img" aria-label="love">❤️</span> in Nigeria
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <nav className="footer-legal-links" aria-label="Legal links">
              <a href="#privacy" className="me-3 small text-muted">Privacy Policy</a>
              <a href="#terms" className="me-3 small text-muted">Terms of Service</a>
              <a href="#sitemap" className="small text-muted">Sitemap</a>
            </nav>
            <p className="small text-muted mt-2 mb-0">
              Designed & Developed by <strong style={{ color: '#f85d23' }}>NworahSoft Team</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-top: 3px solid #f85d23;
        }
        
        .footer-about .sitename {
          color: #f85d23;
          font-weight: 700;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        
        .footer-about .logo:hover .sitename {
          color: #e54d1c;
        }
        
        .footer-description {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 90%;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          color: #6c757d;
          transition: transform 0.2s ease;
        }
        
        .contact-item:hover {
          transform: translateX(3px);
        }
        
        .contact-item a {
          color: #495057;
          transition: color 0.3s ease;
        }
        
        .contact-item a:hover {
          color: #f85d23;
        }
        
        .footer-links h4 {
          color: #343a40;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .footer-links h4:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #f85d23, #ff8c42);
          border-radius: 1px;
        }
        
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-links ul li {
          padding: 0.3rem 0;
          transition: all 0.2s ease;
        }
        
        .footer-links ul li:hover {
          padding-left: 5px;
        }
        
        .footer-links ul li a {
          color: #6c757d;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          position: relative;
        }
        
        .footer-links ul li a:hover {
          color: #f85d23;
        }
        
        .footer-links ul li a::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          width: 10px;
          height: 1px;
          background: #f85d23;
          transition: transform 0.3s ease;
        }
        
        .footer-links ul li:hover a::before {
          transform: translateY(-50%) scaleX(1);
        }
        
        .why-choose-list li {
          display: flex;
          align-items: center;
          padding: 0.4rem 0;
          font-size: 0.9rem;
          color: #6c757d;
          transition: all 0.2s ease;
        }
        
        .why-choose-list li:hover {
          color: #495057;
          transform: translateX(3px);
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(248, 93, 35, 0.1);
          color: #f85d23;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 2px solid transparent;
        }
        
        .social-links a:hover {
          background: #f85d23;
          color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 5px 15px rgba(248, 93, 35, 0.4);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .newsletter-section {
          background: rgba(248, 93, 35, 0.03);
          border-radius: 0;
        }
        
        .newsletter-section h5 {
          color: #343a40;
          font-weight: 600;
        }
        
        .newsletter-section .btn {
          transition: all 0.3s ease;
        }
        
        .newsletter-section .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(248, 93, 35, 0.2);
        }
        
        .copyright {
          background: rgba(248, 93, 35, 0.05);
        }
        
        .footer-legal-links a {
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-legal-links a:hover {
          color: #f85d23 !important;
        }
        
        .footer-legal-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f85d23;
          transition: width 0.3s ease;
        }
        
        .footer-legal-links a:hover::after {
          width: 100%;
        }
        
        .nigerian-pride {
          padding: 1rem;
          background: rgba(248, 93, 35, 0.05);
          border-radius: 8px;
          border-left: 4px solid #f85d23;
          transition: all 0.3s ease;
        }
        
        .nigerian-pride:hover {
          background: rgba(248, 93, 35, 0.08);
          transform: translateY(-2px);
        }
        
        .nigerian-flag {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .nigerian-pride:hover .nigerian-flag {
          transform: scale(1.1) rotate(10deg);
        }
        
        /* Focus states for accessibility */
        .footer a:focus {
          outline: 2px solid #f85d23;
          outline-offset: 2px;
          border-radius: 2px;
        }
        
        /* Loading animation for performance */
        .footer-links ul li a {
          will-change: transform, color;
        }
        
        @media (max-width: 768px) {
          .footer-links h4 {
            margin-top: 2rem;
            font-size: 1rem;
          }
          
          .social-links {
            justify-content: center;
            gap: 0.5rem;
          }
          
          .newsletter-section {
            text-align: center;
            padding: 2rem 0;
          }
          
          .newsletter-section .btn {
            margin-top: 1rem;
            width: 100%;
          }
          
          .copyright .row > div {
            text-align: center !important;
            margin-bottom: 1rem;
          }
          
          .footer-description {
            max-width: 100%;
          }
          
          .nigerian-pride {
            margin-top: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .social-links a {
            width: 35px;
            height: 35px;
          }
          
          .contact-item {
            font-size: 0.9rem;
          }
          
          .footer-about .sitename {
            font-size: 1.3rem;
          }
        }
        
        /* Improved performance with GPU acceleration */
        .social-links a,
        .footer-links ul li a,
        .contact-item a {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NworahSoft Technologies",
          "alternateName": "NworahSoft",
          "url": "https://nworahsoft.com",
          "logo": "https://nworahsoft.com/assets/img/logo.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-913-484-6838",
            "contactType": "customer service",
            "areaServed": "NG",
            "availableLanguage": ["English", "Igbo"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Awka",
            "addressRegion": "Anambra State",
            "addressCountry": "NG"
          },
          "sameAs": [
            "https://twitter.com/kingaustin360",
            "https://github.com/King-Austin",
            "https://linkedin.com/company/nworahsoft"
          ],
          "foundingDate": "2022",
          "description": "Leading Nigerian software development company empowering businesses with cutting-edge technology solutions.",
          "slogan": "Building Tomorrow's Software Today"
        })}
      </script>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;