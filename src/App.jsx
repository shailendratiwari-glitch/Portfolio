import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import './App.css';
import About from './Components/About/About';


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact/>
      <Footer/>
      {/* Add more sections here */}
    </div>
  );
}

export default App;