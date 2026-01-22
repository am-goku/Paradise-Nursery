import React, { useState } from 'react';
import { plantsArray } from '../data/plants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './styles/ProductList.css';   // ← import here

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => [...prev, plant.name]);
  };

  const isInCart = (plantName) => 
    cartItems.some(item => item.plant.name === plantName) || 
    addedItems.includes(plantName);

  return (
    <div className="plants-page">
      <h1>Our House Plants Collection</h1>

      {plantsArray.map((category, catIndex) => (
        <div key={catIndex} className="category-section">
          <h2 className="category-title">{category.category}</h2>
          
          <div className="plant-grid">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="plant-card">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="plant-image" 
                />
                
                <div className="plant-info">
                  <h3 className="plant-name">{plant.name}</h3>
                  <div className="plant-price">{plant.cost}</div>
                  
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.name)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;