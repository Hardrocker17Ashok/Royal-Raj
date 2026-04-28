import { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => setMobileMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  // Logo animation
  useEffect(() => {
    if (!logoRef.current) return;
    logoRef.current.classList.remove("drop-logo");
    void logoRef.current.offsetWidth;
    logoRef.current.classList.add("drop-logo");
  }, [location.pathname]);

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <NavLink
          to="/"
          ref={logoRef}
          className="navbar-logo drop-logo"
          onClick={handleScrollToTop}
          style={{ textDecoration: "none" }}
        >
          <img src="/ch/logo.avif" alt="Royal Raj Logo" className="brand-logo-img" />
          <span className="brand-text">Royal <span>Raj</span></span>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="navbar-links desktop-only">
          <NavLink to="/" onClick={handleScrollToTop}>Home</NavLink>
          <NavLink to="/about" onClick={handleScrollToTop}>About</NavLink>
          <NavLink to="/rooms" onClick={handleScrollToTop}>Rooms</NavLink>
         
          <NavLink to="/gallery" onClick={handleScrollToTop}>Gallery</NavLink>
          <NavLink to="/menu" onClick={handleScrollToTop}>Menu</NavLink>
          <NavLink to="/cart" onClick={handleScrollToTop}>Cart</NavLink>
          <NavLink to="/contact" onClick={handleScrollToTop}>Contact</NavLink>
        </nav>

        {/* CTA BUTTON */}
        <NavLink to="/booking" className="navbar-cta" onClick={handleScrollToTop}>
          Book Now
        </NavLink>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
      >
        <NavLink to="/" onClick={handleScrollToTop}>Home</NavLink>
        <NavLink to="/about" onClick={handleScrollToTop}>About</NavLink>
        <NavLink to="/rooms" onClick={handleScrollToTop}>Rooms</NavLink>
        
        <NavLink to="/menu" onClick={handleScrollToTop}>Menu</NavLink>
        <NavLink to="/gallery" onClick={handleScrollToTop}>Gallery</NavLink>
        <NavLink to="/cart" onClick={handleScrollToTop}>Cart</NavLink>
        <NavLink to="/contact" onClick={handleScrollToTop}>Contact</NavLink>
      </div>
    </header>
  );
};

export default Navbar;