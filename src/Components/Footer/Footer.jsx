import React from 'react';
import './Footer.css';
// If you installed react-icons: 
// import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand/Intro */}
        <div className="footer-column brand">
          <h3 className="footer-logo">Shailendra<span>.</span></h3>
          <p>Building digital experiences with precision and passion. Let's create something amazing together.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="footer-column socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Shailendra Tiwari. Made with React + Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;