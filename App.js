import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Cart from './components/Cart';
import Gallery from './pages/Gallery';  // Gallery Page Import
import AboutUs from './pages/AboutUs';  // About Us Page Import
import Header from './components/Header';
import Footer from './components/Footer';

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
