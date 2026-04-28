import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./About.css";

const About = () => {
  const location = useLocation();

  // Smooth scroll logic
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="about-page">

      {/* Header */}
      <header className="about-header">
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <h1>About Royal Raj</h1>
          <p>
            Experience comfort, quality dining, and warm hospitality near NIMS University.
            A perfect place for a relaxing stay and delicious meals.
          </p>
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">
        <h2 className="section-title"></h2>

        <div className="about-frame">
          <img src="/aboutfront.jpg" alt="" />
          <div>
            <h3>Our Story</h3>
            <p>
              The Royal Raj Hotel and Restaurant, located on Delhi Road opposite NIMS University and Hospital, began its journey in early 2024 with a clear vision — to serve the growing university community with quality, comfort, and care.

              Unlike the historic heritage properties of Jaipur, Royal Raj is a modern establishment thoughtfully designed to meet the needs of students, families, and visitors connected to NIMS.

              As a women-owned business, we proudly focus on providing a safe, clean, and family-friendly environment, combining traditional North Indian hospitality with modern facilities. Our aim is to offer a comfortable stay and delicious food at affordable prices, making every guest feel welcomed and valued.
            </p>
          </div>
        </div>

        {/* NEW: ROOM QUALITY */}
        <div className="about-frame reverse room-highlight">
          <img src="/ch/r5.webp" alt="Room Quality" />
          <div>
            <h3>Our Room Quality</h3>
            <p>
              We provide clean, spacious, and well-maintained rooms designed for comfort and relaxation.
              With modern amenities and a peaceful environment, our rooms ensure a pleasant and stress-free stay for every guest.
            </p>
          </div>
        </div>

        {/* NEW: ROOM SERVICE */}
        <div className="about-frame room-highlight">
          <img src="/ch/r11.webp" alt="Room Service" />
          <div>
            <h3>Room Service</h3>
            <p>
              Our dedicated room service is always ready to assist you with quick response and care.
              From timely food delivery to daily assistance, we ensure a smooth, comfortable, and hassle-free stay experience.
            </p>
          </div>
        </div>

        <div className="about-frame reverse">
          <img src="/promisfront.jpg" alt="" />
          <div>
            <h3>Our Promise</h3>
            <p>
              We are committed to providing fresh and delicious food along with comfortable and well-maintained rooms for a relaxing stay.
              From quality dining to a peaceful environment, we ensure a smooth, enjoyable, and memorable experience for every guest.
            </p>
          </div>
        </div>

        <div className="about-frame">
          <img src="/cheiffront.jpg" alt="" />
          <div>
            <h3>Expert Chefs</h3>
            <p>
              Our experienced chefs bring years of expertise and passion to every dish, ensuring rich taste and consistent quality.
              From traditional flavors to modern recipes, every meal is carefully prepared to give you a delightful dining experience.
            </p>
          </div>
        </div>

        <div className="about-frame reverse">
          <img src="/ch/r3.webp" alt="" />
          <div>
            <h3>Luxury Ambience</h3>
            <p>
              Our space is designed to offer a perfect blend of comfort and elegance, creating a warm and relaxing atmosphere for dining and stay.
              Whether you are enjoying a meal or spending time in our rooms, every moment is crafted to feel special and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="why-section" id="why">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why-image-strip">
          <div className="why-image-track">
            {[...Array(13)].map((_, i) => (
              <img key={i} src={`/why${i + 1}.jpg`} alt="" />
            ))}
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>🍽️ Fresh Food</h3>
            <p>Prepared daily with premium ingredients</p>
          </div>
          <div className="feature-card">
            <h3>💰 No Commission</h3>
            <p>Direct order, no middleman</p>
          </div>
          <div className="feature-card">
            <h3>👨‍🍳 Hygienic</h3>
            <p>Safety & cleanliness first</p>
          </div>
          <div class="feature-card">
            <h3>Affordable Prices</h3>
            <p>Best quality food and rooms at budget-friendly prices.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;