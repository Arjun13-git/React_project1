import React from 'react';

const CakeCard = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="cake-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeCard;
