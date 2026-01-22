import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/navbar.css';   // ← Add this import

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation(); // to highlight active link

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>🌿</span> Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/plants" 
            className={location.pathname === '/plants' ? 'active' : ''}
          >
            Plants
          </Link>
          <Link 
            to="/cart" 
            className={location.pathname === '/cart' ? 'active' : ''}
          >
            Cart
          </Link>

          <div className="cart-icon-wrapper">
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;