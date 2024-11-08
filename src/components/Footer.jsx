import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and About Us */}
        <div className="footer-left">
        <img src="Logo2.png" height={80} alt='Logo' />
        <div className="footer-section">
            <h4 className="section-title">About SafeMax Security</h4>
            <p className="footer-list-item">
              SafeMax Security specializes in cybersecurity innovation, securing digital assets with tailored VAPT solutions, trusted by clients worldwide.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="section-title">Our Services</h4>
          <ul className="footer-list">
            <li className="footer-list-item">Vulnerability Assessment</li>
            <li className="footer-list-item">Penetration Testing</li>
            <li className="footer-list-item">Cybersecurity Consulting</li>
            <li className="footer-list-item">Threat Intelligence</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="section-title">Contact Us</h4>
          <p className="footer-list-item">Email: info@safemaxsecurity.com</p>
          <p className="footer-list-item">Phone: +1 (555) 123-4567</p>
          <p className="footer-list-item">Address: 123 Cyber St, Security City, SC 12345</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4 className="section-title">Connect With Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/safemaxsecurity" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com/safemaxsecurity" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/safemaxsecurity" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/safemaxsecurity" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SafeMax Security. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
