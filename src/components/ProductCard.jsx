import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    // ✅ Show success popup
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      theme: "colored",
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-tags">
          <span className="tag category-tag">{product.category}</span>
          <span className="tag type-tag">{product.type}</span>
        </div>
        <p className="price">₹{product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
