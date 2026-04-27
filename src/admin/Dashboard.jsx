import "./Admin.css";
import Orders from "./Orders";

const Dashboard = () => {
  return (
    <div className="admin-panel">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Waah Admin</h2>
        <ul>
          <li className="active">Orders</li>
          <li>Menu</li>
          <li>Customers</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="admin-main">

        {/* Header */}
        <div className="admin-header">
          <h1>Orders Dashboard</h1>
          <span>Today Orders</span>
        </div>

        {/* Stats */}
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Today Orders</h3>
            <p>12</p>
          </div>

          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>₹8,450</p>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <p>4</p>
          </div>
        </div>

        {/* Orders */}
        <Orders />

      </main>

    </div>
  );
};

export default Dashboard;
