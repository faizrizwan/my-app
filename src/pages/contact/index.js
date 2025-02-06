import React from 'react';
import './contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const handleOpenWhatsApp = () => {
    console.log('clicked')
    const phoneNumber = "6289505409606"; // Replace with actual phone number
    const message = "Hello, I'm interested in your services!"; // Optional message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="contact">
            <p style={{marginBottom:0 ,fontSize:'25px'}} >CONTACT</p >


      <div className="contact-container">
        <div className="contact-card">
          <p className="contact-title">Contact Us</p>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Salawu 46471, Tasikmalaya</p>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <p>089505409606</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>faizrizwan69@gmail.com</p>
          </div>

          <div className="contact-item">
            <FaGlobe className="icon" />
            <p>www.google.com.com</p>
          </div>

          <div style={{ cursor: "pointer", }} onClick={handleOpenWhatsApp} className="chat-icon">💬</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
