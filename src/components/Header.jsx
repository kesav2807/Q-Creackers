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
            src="https://ik.imagekit.io/wgoylquru/New%20Folder/New%20Folder/img/Gemini_Generated_Image_g4cneig4cneig4cn.png?updatedAt=1760016526067" 
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
                onClick={() => onNavigate('about')}
              >
                About
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
