import "./Booking.css";
import { useState, useEffect } from "react";

const Booking = () => {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    room: "Deluxe Room",
    checkin: "",
    checkout: "",
    guests: 1
  });

  useEffect(() => {
    setShow(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!form.name || form.phone.length !== 10) {
      alert("Enter valid details");
      return;
    }

    const message = `Hello, I want to book a room:
Name: ${form.name}
Phone: ${form.phone}
Room: ${form.room}
Check-in: ${form.checkin}
Check-out: ${form.checkout}
Guests: ${form.guests}`;

    const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="booking-page">

      {/* HERO */}
      <header className="booking-hero">

        <div className={`hero-text ${show ? "show" : ""}`}>
          <h1>Luxury Room Booking</h1>
          <p>Experience comfort like never before</p>
        </div>

      </header>

      {/* FORM */}
      <section className="booking-section">

        <div className={`booking-card ${show ? "card-show" : ""}`}>

          <h2>Reserve Your Room</h2>

          <div className="form-grid">

            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />

            <select name="room" onChange={handleChange}>
              <option>Deluxe Room</option>
              <option>Family Room</option>
              <option>Premium Room</option>
              <option>Standard Room</option>
            </select>

            <input type="number" name="guests" min="1" placeholder="Guests" onChange={handleChange} />
            <div className="date-group">

              <div className="date-box">
                <label>Check-In</label>
                <input
                  type="date"
                  name="checkin"
                  onChange={handleChange}
                />
              </div>

              <div className="date-box">
                <label>Check-Out</label>
                <input
                  type="date"
                  name="checkout"
                  onChange={handleChange}
                />
              </div>

            </div>
            <input type="date" name="checkout" onChange={handleChange} />

          </div>

          <button className="book-btn" onClick={handleBooking}>
            Confirm Booking
          </button>

        </div>

      </section>

    </div>
  );
};

export default Booking;