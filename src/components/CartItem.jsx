import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/cart.css';   // ← Add this line
import Navbar from './Navbar';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
    const items = useSelector(state => state.cart.items);

    const totalAmount = items.reduce((total, item) => {
        const price = parseFloat(item.plant.cost.replace('$', ''));
        return total + price * item.quantity;
    }, 0);

    return (
        <div className="cart">
            <Navbar />
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
                            <CartItemCard key={index} item={item} />
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




const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { plant, quantity } = item;
  const totalCost = parseFloat(plant.cost.slice(1)) * quantity; // e.g., "$15" -> 15

  return (
    <div className="cart-item">
      <img src={plant.image} alt={plant.name} />

      <div className="cart-item-details">
        <h3>{plant.name}</h3>
        <div className="price">Unit Price: {plant.cost}</div>
        <div className="total">Item Total: ${totalCost.toFixed(2)}</div>

        <div className="quantity-controls">
          <button onClick={() => dispatch(updateQuantity({ name: plant.name, type: 'decrease' }))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ name: plant.name, type: 'increase' }))}>+</button>
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