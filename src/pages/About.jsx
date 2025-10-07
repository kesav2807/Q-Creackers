// About.jsx
import React from "react";
import "./About.css";
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../attached_assets/Gemini_Generated_Image_g4cneig4cneig4cn_1759810759665.png";

const About = () => {
  return (
    <section className="about-future">
      <div className="glow-bg"></div>

      <div className="brand-card">
        <div className="brand-header">
          <img src={logo} alt="Q Crackers Logo" className="brand-logo" />
          <h1 className="brand-title">Q Crackers</h1>
          <p className="brand-subtitle">
            Sparking Smiles. Spreading Light. ✨
          </p>
        </div>

        <div className="brand-info">
          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <a href="tel:+918531841017" className="info-link">
              +91 85318 41017
            </a>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <span className="info-link">Vadipatti Main Rd, Vadipatti, Tamil Nadu 625218</span>
          </div>

          <div className="info-box">
            <FaInstagram className="info-icon" />
            <a
              href="https://www.instagram.com/contact.qcarckers?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              @contact.qcarckers
            </a>
          </div>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Q Crackers Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.7967407220516!2d77.95988726955686!3d10.084992999376567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1759823143972!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
