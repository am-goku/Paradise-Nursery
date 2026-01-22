import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/CartItem';
import AboutUs from './components/AboutUs';   // ← imported here

const Home = () => {
  return (
    <div className="landing">
      <div className="home-content">
        {/* Left side */}
        <div className="left-column">
          <h1>Welcome to Paradise Nursery</h1>

          <Link to="/plants">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>

        {/* Right side - About Us with blurred bg */}
        <div className="right-column">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;