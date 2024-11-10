import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} width="50" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Final Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => alert('Proceeding to Checkout...')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
