import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="footer-logo">Royal <span>Raj</span></h2>
          <p class="premium-description">
            Experience the harmony of refined hospitality and culinary excellence.
            Whether you are staying in our suites or dining in our restaurant,
            we deliver an experience that leaves you simply saying
            <span class="brand-highlight">‘Waah’</span>.
          </p>
          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/menu">Dining & Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>📍 Jaipur, Rajasthan</li>
            <li>📞 +91 -----------</li>
            <li>✉RoyalRaj@gmail.com</li>
          </ul>
        </div>

        {/* Timing */}
        <div className="footer-col">
          <h3>Opening Hours</h3>
          <ul>
            <li>Mon - Fri : 10am - 10pm</li>
            <li>Sat - Sun : 11am - 11pm</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Royal Raj. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
