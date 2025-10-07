import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    const loadOrders = () => {
      const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const reversedOrders = savedOrders.reverse();
      setOrders(reversedOrders);

      // Calculate total profit
      const profit = reversedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
      setTotalProfit(profit);
    };

    loadOrders();
    const interval = setInterval(loadOrders, 2000);
    return () => clearInterval(interval);
  }, []);

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(updatedOrders.reverse()));
    setOrders(updatedOrders);

    // Update total profit
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

      {/* Top corner summary */}
      <div className="dashboard-summary" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div><strong>Total Orders:</strong> {orders.length}</div>
        <div><strong>Total Profit:</strong> ₹{totalProfit}</div>
      </div>

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

            <div className="order-items">
              <h4>Items:</h4>
              {order.items.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name}</span>
                  <span>₹{item.price} x {item.quantity}</span>
                  <span>= ₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="order-total">
              <strong>Total: ₹{order.total}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
