import "./Contact.css";
import React, { useEffect } from 'react';



const Contact = () => {
 useEffect(() => {
    if (location.hash) {
      // Agar hash (e.g., #why, #contact) hai, toh us section par scroll karo
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Agar hash nahi hai (yani sirf "About" link), toh page ke top par scroll karo
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
    
  return (
    <div className="contact-page">
      {/* HERO BANNER */}
      <section className="contact-hero">
        <div className="hero-text">
        <h1>Visit Us at Royal Raj</h1>
        <p>Jaipur's Finest Culinary Destination</p>
        </div>
      </section>

      
<section className="map-section">
  <div className="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.2022047582054!2d75.95309897523471!3d27.194224676480502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396da7f7126476a1%3A0xe52c73e5728ef60a!2sRaj%20Hotel%20%26%20Restaurant!5e1!3m2!1sen!2sin!4v1776762501332!5m2!1sen!2sin" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Royal Raj Location"
    ></iframe>
    
    {/* Direction Overlay */}
    <div className="map-overlay">
      <a 
        href="https://www.google.com/maps/dir/?api=1&destination=27.1942247,75.9556739" 
        target="_blank" 
        rel="noreferrer" 
        className="direction-btn"
      >
        <span>➔</span> Get Directions
      </a>
    </div>
  </div>
</section>

      {/* PREMIUM CONTACT BOX */}
      <section className="contact-details-section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We are here to serve you. Have a special event or a query?</p>
            <div className="details">
              <span>📍 Jaipur, Rajasthan</span>
              <span>📞 +91 00000 00000</span>
              <span>✉️ hello@royalraj.com</span>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;