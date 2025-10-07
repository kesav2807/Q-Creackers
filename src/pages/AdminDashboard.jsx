import { useState, useEffect } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  // Load orders from localStorage and calculate total profit
  useEffect(() => {
    const loadOrders = () => {
      const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const reversedOrders = savedOrders.reverse();
      setOrders(reversedOrders);

      const profit = reversedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
      setTotalProfit(profit);
    };

    loadOrders();
    const interval = setInterval(loadOrders, 2000); // Auto-refresh every 2s
    return () => clearInterval(interval);
  }, []);

  // Delete an order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(updatedOrders.reverse()));
    setOrders(updatedOrders);

    const profit = updatedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
    setTotalProfit(profit);
  };

  if (orders.length === 0) {
    return (
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <p className="no-orders">No orders yet</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard - All Orders</h2>

      {/* Summary */}
      <div className="dashboard-summary">
        <div>Total Orders: {orders.length}</div>
        <div>Total Profit: ₹{totalProfit}</div>
      </div>

      {/* Orders list */}
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <button className="delete-btn" onClick={() => deleteOrder(order.id)}>Delete</button>
            </div>

            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Phone:</strong> {order.customerPhone}</p>
            <p><strong>Address:</strong> {order.customerAddress || 'Not provided'}</p>
            <p><strong>Time:</strong> {order.timestamp}</p>

            {/* Items */}
            <div className="order-items">
              <h4>Items:</h4>
              {order.items.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image || 'https://via.placeholder.com/50'} alt={item.name} />
                  <span style={{ flex: 1 }}>{item.name}</span>
                  <span>₹{item.price} x {item.quantity}</span>
                  <span>= ₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Order total */}
            <div className="order-total">Total: ₹{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
