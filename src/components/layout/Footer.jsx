import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">NWORAHSOFT </span>
            </Link>
            <div className="footer-contact pt-3">
                <p>Awka</p>
                <p>Anambra State, Nigeria</p>
              <p className="mt-3">
                  <strong>Phone:</strong> <a href="tel:+2349134846838">+234 9134846838</a>
                </p>
               <p>
                  <strong>Email:</strong> <a href="mailto:nworahebuka.a@gmail.com">nworahebuka.a@gmail.com</a>
                </p>
              </div>
            <div className="social-links d-flex mt-4">
              <a href="x.com/kingaustin360" className="me-3"><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Ecommerce </a></li>
              <li><a href="#">ICT SOlution</a></li>

            </ul>
          </div>


        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">
          NWORAHSOFT @ {new Date().getFullYear()} .
| </strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="#" target="_blank">NworahSoft Technology</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;