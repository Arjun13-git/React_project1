import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CakeDetail({ cakesData, addToCart }) {
  const { id } = useParams();
  const cake = cakesData.find((cake) => cake.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!cake) {
    return <p>Cake not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...cake, quantity });
  };

  return (
    <div className="cake-detail">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Price: {cake.price}</p>

      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </label>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default CakeDetail;
