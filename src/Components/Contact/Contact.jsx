
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! (This is a demo)");
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
        <textarea 
          placeholder="Your Message" 
          rows="5"
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;