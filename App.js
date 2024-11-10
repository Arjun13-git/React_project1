import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Categories from './Categories';
import Cart from './Cart';
import Gallery from './Gallery';  // Gallery Page Import
import AboutUs from './AboutUs';  // About Us Page Import
import Header from './Header';
import Footer from './Footer';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  // Function to add cakes to the cart
  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/gallery" element={<Gallery />} />  {/* Gallery Route */}
        <Route path="/about" element={<AboutUs />} />  {/* About Us Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
