import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          
          {/* Company Info & Contact */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center mb-3">
              <span className="sitename">NWORAHSOFT</span>
            </Link>
            <p className="footer-description">
              Empowering Nigerian businesses with cutting-edge technology solutions. 
            </p>
            
            <div className="footer-contact pt-3">
              <div className="contact-item mb-2">
                <i className="bi bi-geo-alt-fill me-2" style={{color: '#f85d23'}}></i>
                <span>Awka, Nigeria</span>
              </div>
              <div className="contact-item mb-2">
                <i className="bi bi-telephone-fill me-2" style={{color: '#f85d23'}}></i>
                <a href="tel:+2349134846838" className="text-decoration-none">+234 (0) 913 484 6838</a>
              </div>
              <div className="contact-item mb-2">
                <i className="bi bi-envelope-fill me-2" style={{color: '#f85d23'}}></i>
                <a href="mailto:nworahebuka.a@gmail.com" className="text-decoration-none">nworahebuka.a@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="bi bi-whatsapp me-2" style={{color: '#25D366'}}></i>
                <a href="https://wa.me/2349134846838" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/kingaustin360" className="me-3" target="_blank" rel="noopener noreferrer" title="Follow us on X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="me-3" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/King-Austin" className="me-3" target="_blank" rel="noopener noreferrer" title="View our code">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://wa.me/2349134846838" className="me-3" target="_blank" rel="noopener noreferrer" title="WhatsApp us">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-sm-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#services">Solutions</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-sm-3 footer-links">
            <h4>Our Solutions</h4>
            <ul>
              <li><a href="#services">Business Websites</a></li>
              <li><a href="#services">E-commerce Platforms</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">API Development</a></li>
              <li><a href="#services">Digital Consulting</a></li>
              <li><a href="#services">Tech Support</a></li>
            </ul>
          </div>

          {/* Nigerian Business Focus */}
          <div className="col-lg-3 col-md-6 col-sm-3 footer-links">
            <h4>Why Choose Us?</h4>
            <ul className="why-choose-list">
              <li>
                <i className="bi bi-check-circle me-2" style={{color: '#f85d23'}}></i>
                <span>100% Nigerian Owned</span>
              </li>
              <li>
                <i className="bi bi-check-circle me-2" style={{color: '#f85d23'}}></i>
                <span>Local Market Understanding</span>
              </li>
              <li>
                <i className="bi bi-check-circle me-2" style={{color: '#f85d23'}}></i>
                <span>Affordable Pricing</span>
              </li>
              <li>
                <i className="bi bi-check-circle me-2" style={{color: '#f85d23'}}></i>
                <span>24/7 Support in English & Igbo</span>
              </li>
              <li>
                <i className="bi bi-check-circle me-2" style={{color: '#f85d23'}}></i>
                <span>Naira-Friendly Payments</span>
              </li>
            </ul>

            {/* Nigerian Pride Section */}
            <div className="nigerian-pride mt-4">
              <div className="d-flex align-items-center mb-2">
                <span className="me-2" style={{fontSize: '1.2rem'}}>🇳🇬</span>
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
      <div className="container newsletter-section py-4" style={{borderTop: '1px solid rgba(248, 93, 35, 0.1)'}}>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="mb-2">Stay Updated with Nigerian Tech Trends</h5>
            <p className="text-muted mb-0">Get insights on digital transformation, startup tips, and tech opportunities in Nigeria.</p>
          </div>
          <div className="col-md-4 text-md-end">
            <a href="#contact" className="btn btn-outline-primary btn-sm">
              <i className="bi bi-envelope me-2"></i>
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Credits */}
      <div className="container copyright text-center py-4" style={{borderTop: '1px solid rgba(0,0,0,0.1)'}}>
        <div className="row">
          <div className="col-md-6 text-md-start">
            <p className="mb-2">
              © {currentYear} <strong className="sitename">NWORAHSOFT Technologies</strong>
            </p>
            <p className="small text-muted mb-0">All Rights Reserved | Made with ❤️ in Nigeria</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-legal-links">
              <a href="#" className="me-3 small text-muted">Privacy Policy</a>
              <a href="#" className="me-3 small text-muted">Terms of Service</a>
              <a href="#" className="small text-muted">Sitemap</a>
            </div>
            <p className="small text-muted mt-2 mb-0">
              Designed & Developed by <strong style={{color: '#f85d23'}}>NworahSoft Team</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-top: 3px solid #f85d23;
        }
        
        .footer-about .sitename {
          color: #f85d23;
          font-weight: 700;
          font-size: 1.5rem;
        }
        
        .footer-description {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          color: #6c757d;
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
          background: #f85d23;
        }
        
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-links ul li {
          padding: 0.3rem 0;
        }
        
        .footer-links ul li a {
          color: #6c757d;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .footer-links ul li a:hover {
          color: #f85d23;
          padding-left: 5px;
        }
        
        .why-choose-list li {
          display: flex;
          align-items: center;
          padding: 0.4rem 0;
          font-size: 0.9rem;
          color: #6c757d;
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
        }
        
        .social-links a:hover {
          background: #f85d23;
          color: white;
          transform: translateY(-2px);
        }
        
        .newsletter-section {
          background: rgba(248, 93, 35, 0.03);
        }
        
        .newsletter-section h5 {
          color: #343a40;
          font-weight: 600;
        }
        
        .copyright {
          background: rgba(248, 93, 35, 0.05);
        }
        
        .footer-legal-links a {
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-legal-links a:hover {
          color: #f85d23 !important;
        }
        
        .nigerian-pride {
          padding: 1rem;
          background: rgba(248, 93, 35, 0.05);
          border-radius: 8px;
          border-left: 4px solid #f85d23;
        }
        
        @media (max-width: 768px) {
          .footer-links h4 {
            margin-top: 2rem;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .newsletter-section {
            text-align: center;
          }
          
          .copyright .row > div {
            text-align: center !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;