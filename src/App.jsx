import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';
import About from './pages/About';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isAdmin } = useAuth();

  const renderPage = () => {
    if (isAdmin && currentPage !== 'home' && currentPage !== 'cart') {
      return <AdminDashboard />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'cart':
        return <CartPage />;
      case 'admin-login':
        return <AdminLogin onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminDashboard />;
      case 'about':
        return<About/>
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}
