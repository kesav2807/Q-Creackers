import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Header({ onNavigate, currentPage }) {
  const { getItemCount } = useCart();
  const { isAdmin, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => onNavigate('home')}>
          <img 
            src="/attached_assets/Gemini_Generated_Image_g4cneig4cneig4cn_1759810759665.png" 
            alt="Q Crackers Logo" 
            className="logo"
          />
          <h1>Q CRACKERS</h1>
        </div>
        
        <nav className="nav-links">
          {!isAdmin ? (
            <>
              <button 
                className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
              >
                Home
              </button>
              <button 
                className={`nav-btn ${currentPage === 'cart' ? 'active' : ''}`}
                onClick={() => onNavigate('cart')}
              >
                Cart ({getItemCount()})
              </button>
              <button 
                className="nav-btn"
                onClick={() => onNavigate('admin-login')}
              >
                Admin
              </button>
            </>
          ) : (
            <>
              <button 
                className={`nav-btn ${currentPage === 'admin' ? 'active' : ''}`}
                onClick={() => onNavigate('admin')}
              >
                Orders
              </button>
              <button 
                className="nav-btn logout-btn"
                onClick={() => {
                  logout();
                  onNavigate('home');
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
