import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import './CartPage.css'; // CSS file

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const adminWhatsAppNumber = '9952279211'; 

  const handleSendOrder = () => {
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please enter your name, phone number, and address');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    const orderDetails = cart.map(
      item => `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n');

    const total = getTotal();

    const message = `* New Order from Q Crackers *\n\n* Name:* ${customerName}\n* Phone:* ${customerPhone}\n* Address:* ${customerAddress}\n\n* Order Details:*\n${orderDetails}\n\n* Total Amount:* ₹${total}\n\n I have placed my order, please confirm.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;

    // Save order in localStorage
    const order = {
      id: Date.now(),
      customerName,
      customerPhone,
      customerAddress,
      items: cart,
      total,
      timestamp: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Clear cart and show success
    setShowSuccess(true);
    clearCart();
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');

    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (showSuccess) {
    return (
      <div className="success-message">
        <div className="success-box">
          <h2>✅ Order Sent Successfully!</h2>
          <p>Your order has been sent to our WhatsApp. Please tap “Send” to confirm.</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Add some crackers to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">🧨 Your Cart</h2>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="item-total">₹{item.price * item.quantity}</div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{getTotal()}</h3>
      </div>

      <div className="customer-details">
        <h3>Customer Details</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
        />
        <textarea
          placeholder="Your Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
        />
      </div>

      <button className="send-order-btn" onClick={handleSendOrder}>
        <FaWhatsapp className="whatsapp-icon" /> Send Order via WhatsApp
      </button>
    </div>
  );
}
