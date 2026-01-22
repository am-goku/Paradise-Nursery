import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { plant, quantity }
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.plant.name === plant.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ plant, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.plant.name !== name);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find(item => item.plant.name === name);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find(item => item.plant.name === name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(i => i.plant.name !== name);
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;