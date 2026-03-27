import React from 'react';
import './Hero.css';
import heroBg from '../../assets/bg.png'; 

const Hero = () => {
  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FIXED: Changed hyphenated-properties to camelCase
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',    // Changed from align-items
    justifyContent: 'center', // Changed from justify-content
    color: 'white'
  };

  return (
    <section style={heroStyle} id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Shailendra Tiwari</span></h1>
        <p>A Full-Stack Developer passionate about building clean web experiences.</p>
        <button className="cta-button" onClick={scrollToProjects}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;