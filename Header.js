import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Heavenly_Bakes.png'; // Import the logo image

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Heavenly Bakes Logo" className="logo" />
        </div>
        <h1>Heavenly Bakes</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/gallery">Gallery</Link> {/* Link to Gallery */}
        <Link to="/about-us">About Us</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
