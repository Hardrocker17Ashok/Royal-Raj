import { useState } from "react";
import { useCart } from "../store/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [note, setNote] = useState("");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ PLACE ORDER (PRO VERSION)
  const handlePlaceOrder = () => {
    if (!name || mobile.length !== 10) {
      alert("Enter valid name & 10 digit mobile");
      return;
    }

    if (!roomNo && !tableNo) {
      alert("Enter Room No or Table No");
      return;
    }

    const orderData = {
      customerName: name,
      mobile,
      roomNo,
      tableNo,
      note,
      items: cartItems,
      total: totalPrice,
      time: new Date().toLocaleString()
    };

    console.log("ORDER DATA 👉", orderData);

    // future: send to backend / firebase
    window.location.href = "/order-status";
  };

  const handleRemove = (id) => {
    const el = document.getElementById("item-" + id);
    if (el) {
      el.classList.add("remove-anim");
      setTimeout(() => removeFromCart(id), 300);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Order Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart-ui">
          <div className="empty-cart-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Chef"
            />
            <h2>No items added yet 🍽️</h2>
            <p>Select your favorite dishes or room services</p>

            <button onClick={() => window.history.back()}>
              Explore Menu
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-layout">

          {/* LEFT */}
          <div className="cart-left">

            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} id={"item-" + item.id} className="cart-item">
                  
                  <img src={item.image} alt={item.name} />

                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>

                    <div className="qty-control">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>

                  <div className="item-actions">
                    <h4>₹{item.price * item.qty}</h4>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="add-more-btn"
              onClick={() => window.history.back()}
            >
              + Add More Items
            </button>
          </div>

          {/* RIGHT – ORDER FORM */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="summary-row">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="divider"></div>

            <div className="grand-total-box">
              <p>Total Payable</p>
              <h2>₹{totalPrice}</h2>
            </div>

            {/* CUSTOMER DETAILS */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            {/* 🔥 NEW FIELDS */}
            <input
              type="text"
              placeholder="Room No (if staying)"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />

            <input
              type="text"
              placeholder="Table No (if dining)"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
            />

            <textarea
              placeholder="Special Instructions (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order ₹{totalPrice}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;