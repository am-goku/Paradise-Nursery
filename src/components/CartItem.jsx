import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { plant, quantity } = item;
  const totalCost = parseFloat(plant.cost.slice(1)) * quantity; // e.g., "$15" -> 15

  return (
    // Inside CartItem.jsx render:
    <div className="cart-item">
      <img src={plant.image} alt={plant.name} />

      <div className="cart-item-details">
        <h3>{plant.name}</h3>
        <div className="price">Unit Price: {plant.cost}</div>
        <div className="total">Item Total: ${totalCost.toFixed(2)}</div>

        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(plant.name))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(plant.name))}>+</button>
        </div>
      </div>

      <div className="cart-item-actions">
        <button onClick={() => dispatch(removeItem(plant.name))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;