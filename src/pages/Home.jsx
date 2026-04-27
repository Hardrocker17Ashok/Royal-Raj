import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  "/ch/chat7.png",
   "/ch/chat2.png",
  "/ch/chat6.png",
  

  
];

// 🔥 duplicate for smooth loop
const loopSlides = [...slides, ...slides];

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length); // ✅ NO OVERFLOW
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="home-hero">

        {/* SLIDER */}
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {slides.map((img, i) => (
            <div
              key={i}
              className="slide"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* GRADIENT */}
        <div className="hero-gradient"></div>

        {/* CONTENT */}
        <div className="glass-boxhome">
          <div className="hero-content">

            <h1 className="hero-title">
              Welcome to <br />
              <span className="highlight">Royal Raj </span><br />
              Hotel & Restaurant
            </h1>
            <div className="line"></div>

            <p className="hero-sub">
              A perfect blend of luxury, comfort and warm hospitality –
              only at Royal Raj Hotel & Restaurant.
            </p>

            <div className="hero-buttons">
              <button className="btn-gold" onClick={() => navigate("/booking")}>
                BOOK YOUR STAY →
              </button>

              <button className="btn-outline" onClick={() => navigate("/rooms")}>
                EXPLORE ROOMS
              </button>
            </div>

            <div className="hero-features">

              <div className="feature">
                <span>🛏️</span>
                <p>Luxury Rooms</p>
              </div>

              <div className="feature">
                <span>🍽️</span>
                <p>Delicious Food</p>
              </div>

              <div className="feature">
                <span>📶</span>
                <p>Free WiFi</p>
              </div>

              <div className="feature">
                <span>🚗</span>
                <p>Parking Available</p>
              </div>

            </div>

          </div>
        </div>

        {/* DOTS */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </section>

      <section className="food-section">

        <h2 className="section-title">Food Facility & Dining</h2>

        <div className="food-layout">

          {/* LEFT CONTENT */}
          <div className="food-content">
            <h3>Experience Fine Dining</h3>
            <p>
              Indulge in a delightful culinary journey with our freshly prepared dishes,
              crafted with rich flavors and premium ingredients. From traditional meals
              to modern cuisines, we ensure a memorable dining experience.
            </p>

            <ul>
              <li>✔ Fresh & Hygienic Food</li>
              <li>✔ Multi Cuisine Available</li>
              <li>✔ Family Friendly Dining</li>
            </ul>

            <button onClick={() => navigate("/menu")}>
              Explore Menu →
            </button>
          </div>

          {/* RIGHT IMAGE ALBUM */}
          <div className="food-gallery">
            <img src="/ch/chat2.png" />
            <img src="/ch/chat3.png" />
            <img src="/ch/r11.webp" />
            <img src="/cheif3.jpg" />
          </div>

        </div>

      </section>








      <section className="rooms-section">

        <h2 className="section-title">Our Luxury Rooms</h2>

        <div className="room-grid">

          <div className="room-card" onClick={() => navigate("/rooms")}>
            <img src="/ch/r1.webp" />
            <div className="room-overlay">
              <h3>Deluxe Room</h3>
              <p>View Details →</p>
            </div>
          </div>

          <div className="room-card" onClick={() => navigate("/rooms")}>
            <img src="/ch/r4.webp" />
            <div className="room-overlay">
              <h3>Premium Room</h3>
              <p>View Details →</p>
            </div>
          </div>

          <div className="room-card" onClick={() => navigate("/rooms")}>
            <img src="/ch/r7.webp" />
            <div className="room-overlay">
              <h3>Family Room</h3>
              <p>View Details →</p>
            </div>
          </div>

          <div className="room-card" onClick={() => navigate("/rooms")}>
            <img src="/ch/r8.webp" />
            <div className="room-overlay">
              <h3>Luxury Suite</h3>
              <p>View Details →</p>
            </div>
          </div>

        </div>

      </section>










    </div>

  );
};

export default Home;