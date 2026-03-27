import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Animated Image/Box */}
        <div className="about-image" data-aos="fade-right">
          <div className="image-border">
             {/* Replace with your actual image path */}
            <img src="/your-profile-pic.jpg" alt="Shailendra Tiwari" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content" data-aos="fade-left">
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="description">
            I am a 20-year-old **Full Stack Developer** currently in my 3rd year 
            pursuing a **Bachelor of Computer Applications (BCA)**. 
            Based in Kanpur, I specialize in building scalable web applications 
            using the MERN stack and Python/Django.
          </p>
          
          <div className="about-info">
            <div className="info-item">
              <strong>Education:</strong> <span>BCA (3rd Year)</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong> <span>Kanpur, India</span>
            </div>
            <div className="info-item">
              <strong>Focus:</strong> <span>Web Tech & Fitness</span>
            </div>
          </div>

          <button className="cv-button">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;