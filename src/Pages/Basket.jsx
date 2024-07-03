import React, { useEffect } from "react";
import "../Styles/Basket.css";

export default function Basket({ cart, setCart }) {
  useEffect(() => {
    // Remove localStorage logic
  }, [setCart]);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.amount > 1) {
        return { ...product, amount: product.amount - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart
    .reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
    .toFixed(2);

  return (
    <article className="basket">
      <div className="scroll">
        {cart.map((product) => (
          <div className="cart-box" key={product.id}>
            <div className="cart-img">
              <img src={product.image} alt="img" />
              <p>{product.name}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleIncrement(product.id)}>+</button>
              <button>{product.amount}</button>
              <button onClick={() => handleDecrement(product.id)}>-</button>
            </div>
            <div className="priceRemove">
              <span>${product.price}</span>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalPrice">
        <p>Your Basket:</p>
        <br />
        <div className="naming">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Second Name" required />
          <input type="text" placeholder="Address" required />
        </div>
        <div className="date">
          <input type="date" required />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            minLength="3"
            maxLength="4"
            title="Enter a 3 or 4 digit CVV"
            required
          />
        </div>
        <span className="TM">Total amount:</span>
        <span>
          <b> ${totalPrice}</b>
        </span>
        <div className="order">
          <button>Order</button>
        </div>
      </div>
    </article>
  );
}
