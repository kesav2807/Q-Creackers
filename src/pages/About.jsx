// About.jsx
import React from 'react';
import './About.css';
import logo from '../../attached_assets/Gemini_Generated_Image_g4cneig4cneig4cn_1759810759665.png'; // your logo image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={logo} alt="Q Crackers Logo" className="brand-logo" />
        <h1 className="brand-name">Q Crackers</h1>
        <p className="brand-info">Your one-stop shop for festive crackers!</p>
        <div className="contact-info">
          <p>📞 Mobile: <a href="tel:+918531841017">+91 85318 41017</a></p>
          <p>📍 Location: Chennai, Tamil Nadu, India</p>
          <p>📸 Instagram: <a href="https://instagram.com/qcrackers" target="_blank" rel="noopener noreferrer">@qcrackers</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
