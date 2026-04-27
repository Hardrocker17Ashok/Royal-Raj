const Orders = () => {
  const orders = [
    {
      id: "ORD1023",
      name: "Ashok Sharma",
      total: 240,
      status: "Pending",
      items: 3
    },
    {
      id: "ORD1024",
      name: "Rahul Verma",
      total: 180,
      status: "Cooking",
      items: 2
    },
    {
      id: "ORD1025",
      name: "Priya Singh",
      total: 320,
      status: "Delivered",
      items: 4
    }
  ];

  return (
    <div className="orders-table">

      <div className="orders-head">
        <span>Order ID</span>
        <span>Customer</span>
        <span>Items</span>
        <span>Total</span>
        <span>Status</span>
      </div>

      {orders.map(order => (
        <div className="orders-row" key={order.id}>
          <span>{order.id}</span>
          <span>{order.name}</span>
          <span>{order.items}</span>
          <span>₹{order.total}</span>
          <span className={`status ${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </div>
      ))}

    </div>
  );
};

export default Orders;
