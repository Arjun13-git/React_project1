import React, { useState } from 'react';
import chocolateImg from '../images/chocolate.jpg';
import chocolateFudgeImg from '../images/chocolate_fudge.jpeg';
import fruitImg from '../images/fruit.jpeg';
import vanillaImg from '../images/vanilla.jpeg';
import pineappleImg from '../images/pineapple.jpg';
import butterscotchImg from '../images/butterscotch.jpg';
import redVelvetImg from '../images/red_velvet.jpeg';
import berryBlastImg from '../images/berry_blast.jpeg';

const cakes = [
  { id: 1, name: 'Chocolate Cake', price: 20, image: chocolateImg },
  { id: 2, name: 'Chocolate Fudge Cake', price: 25, image: chocolateFudgeImg },
  { id: 3, name: 'Fruit Cake', price: 15, image: fruitImg },
  { id: 4, name: 'Vanilla Cake', price: 18, image: vanillaImg },
  { id: 5, name: 'Pineapple Cake', price: 22, image: pineappleImg },
  { id: 6, name: 'Butterscotch Cake', price: 24, image: butterscotchImg },
  { id: 7, name: 'Red Velvet Cake', price: 26, image: redVelvetImg },
  { id: 8, name: 'Berry Blast Cake', price: 23, image: berryBlastImg }
];

function Categories({ addToCart }) {
  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantity((prevQuantity) => ({ ...prevQuantity, [id]: parseInt(value) }));
  };

  const handleAddToCart = (cake) => {
    alert(`${cake.name} has been added to your cart!`); // Alert notification
    addToCart({ ...cake, quantity: quantity[cake.id] || 1 });
  };

  return (
    <div className="categories">
      <h2>Our Cakes</h2>
      <div className="cake-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h3>{cake.name}</h3>
            <p>Price: ${cake.price}</p>
            <label htmlFor={`quantity-${cake.id}`}>Quantity:</label>
            <select
              id={`quantity-${cake.id}`}
              value={quantity[cake.id] || 1}
              onChange={(e) => handleQuantityChange(cake.id, e.target.value)}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
            <button 
              onClick={() => handleAddToCart(cake)} 
              style={{ backgroundColor: '#ff5722', color: 'white' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
