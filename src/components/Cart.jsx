import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './styles/cart.css';   // ← Add this line

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  
  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.plant.cost.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/plants">
            <button className="btn-continue">Browse Plants</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="total-amount">
              <span>Total Amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="cart-actions">
              <button 
                className="btn-checkout"
                onClick={() => alert('Checkout - Coming Soon!')}
              >
                Proceed to Checkout
              </button>
              
              <Link to="/plants">
                <button className="btn-continue">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;