import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // 👈 Import icons

export default function AdminLogin({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      onNavigate('admin');
    } else {
      setError('Invalid credentials. Use admin/admin123');
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="password-wrapper" style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingRight: '40px' }} // space for icon
            />
            <span
              onClick={togglePassword}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '20px',
                color: '#555',
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="hint">Default: admin / admin123</p>
      </div>
    </div>
  );
}
