import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Rooms = () => {
    const navigate = useNavigate();

    const images1 = ["/ch/r1.webp", "/ch/r4.webp", "/ch/r7.webp", "/ch/r8.webp"];
    const images2 = ["/ch/r3.webp", "/ch/r5.webp", "/ch/r9.webp", "/ch/r10.webp"];
    const images3 = ["/ch/r13.webp", "/ch/r14.webp", "/ch/r12.webp", "/ch/r3.webp"];

    const [i1, setI1] = useState(0);
    const [i2, setI2] = useState(0);
    const [i3, setI3] = useState(0);

    useEffect(() => {
        const t1 = setInterval(() => setI1(p => (p + 1) % images1.length), 3000);
        const t2 = setInterval(() => setI2(p => (p + 1) % images2.length), 3200);
        const t3 = setInterval(() => setI3(p => (p + 1) % images3.length), 3400);

        return () => {
            clearInterval(t1);
            clearInterval(t2);
            clearInterval(t3);
        };
    }, []);

    return (
        <div className="rooms-page">

            {/* HERO */}
        <header className="rooms-hero">
  <div className="overlay"></div>

  <div className="glass-boxe">
    <div className="hero-content">
      <h1>Luxury Stay at Royal Raj</h1>
      <p>✨ Comfort • 🍽️ Dining • 🛎️ Best Service</p>

      <div className="hero-buttons">
        <button className="btn-gold" onClick={() => navigate("/booking")}>
          📞 Book Now
        </button>

        <button className="btn-outline" onClick={() => navigate("/contact")}>
          📍 View Location
        </button>
      </div>
    </div>
  </div>
</header>











            {/* SECTION 1 */}
            <section className="room-section">
                <div className="room-grid">

                    <div className="image-slider">
                        <div className="slider-track" style={{ transform: `translateX(-${i1 * 100}%)` }}>
                            {images1.map((img, i) => <img src={img} key={i} />)}
                        </div>

                        <button className="nav left" onClick={() => setI1((i1 - 1 + images1.length) % images1.length)}>‹</button>
                        <button className="nav right" onClick={() => setI1((i1 + 1) % images1.length)}>›</button>

                        <div className="dots">
                            {images1.map((_, i) => (
                                <span key={i} className={i === i1 ? "dot active" : "dot"} onClick={() => setI1(i)}></span>
                            ))}
                        </div>
                    </div>

                    <div className="room-content">
                        <h2>Deluxe Room</h2>
                        <p>
                            Experience a perfect blend of comfort and elegance in our Deluxe Room.
                            Designed with modern interiors, soft lighting, and premium furnishings,
                            this room offers a relaxing atmosphere for both leisure and business travelers.
                            Enjoy a peaceful stay with top-class amenities and a cozy environment.
                        </p>

                        <ul>
                            <li>King Size Bed with Premium Mattress</li>
                            <li>Air Conditioning</li>
                            <li>High-Speed Free WiFi</li>
                            <li>Smart LED TV with OTT</li>
                            <li>24/7 Room Service</li>
                            <li>Attached Bathroom with Hot & Cold Water</li>
                            <li>Wardrobe & Work Desk</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* SECTION 2 */}
            <section className="room-section reverse">
                <div className="room-grid">

                    <div className="image-slider">
                        <div className="slider-track" style={{ transform: `translateX(-${i2 * 100}%)` }}>
                            {images2.map((img, i) => <img src={img} key={i} />)}
                        </div>

                        <button className="nav left" onClick={() => setI2((i2 - 1 + images2.length) % images2.length)}>‹</button>
                        <button className="nav right" onClick={() => setI2((i2 + 1) % images2.length)}>›</button>

                        <div className="dots">
                            {images2.map((_, i) => (
                                <span key={i} className={i === i2 ? "dot active" : "dot"} onClick={() => setI2(i)}></span>
                            ))}
                        </div>
                    </div>

                    <div className="room-content">
                        <h2>Family Room</h2>
                        <p>
                            Our Family Room is specially designed for guests traveling with loved ones.
                            With extra space, comfortable bedding, and modern amenities, it ensures
                            a convenient and enjoyable stay. The room provides a warm and welcoming
                            environment where families can relax and spend quality time together.
                        </p>

                        <ul>
                            <li>Spacious Room with Multiple Beds</li>
                            <li>Smart TV with Entertainment Channels</li>
                            <li>High-Speed WiFi</li>
                            <li>24/7 Room Service</li>
                            <li>Air Conditioning</li>
                            <li>Large Bathroom with Premium Fittings</li>
                            <li>Extra Seating Area</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* SECTION 3 */}
            <section className="room-section">
                <div className="room-grid">

                    <div className="image-slider">
                        <div className="slider-track" style={{ transform: `translateX(-${i3 * 100}%)` }}>
                            {images3.map((img, i) => <img src={img} key={i} />)}
                        </div>

                        <button className="nav left" onClick={() => setI3((i3 - 1 + images3.length) % images3.length)}>‹</button>
                        <button className="nav right" onClick={() => setI3((i3 + 1) % images3.length)}>›</button>

                        <div className="dots">
                            {images3.map((_, i) => (
                                <span key={i} className={i === i3 ? "dot active" : "dot"} onClick={() => setI3(i)}></span>
                            ))}
                        </div>
                    </div>

                    <div className="room-content">
                        <h2>Premium Room</h2>
                        <p>
                            Indulge in luxury and sophistication with our Premium Room.
                            Featuring stylish interiors, elegant décor, and high-end amenities,
                            this room is crafted to provide a premium hospitality experience.
                            Perfect for guests who seek comfort, privacy, and a touch of luxury.
                        </p>

                        <ul>
                            <li>Luxury Interior Design</li>
                            <li>King Size Bed with Soft Bedding</li>
                            <li>Private Modern Bathroom</li>
                            <li>Tea & Coffee Maker</li>
                            <li>Mini Fridge</li>
                            <li>Smart TV & WiFi</li>
                            <li>Daily Housekeeping Service</li>
                        </ul>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Rooms;