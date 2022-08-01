import { configureStore } from '@reduxjs/toolkit';
// reducer
import products from './slices/products/ProductsRedux';
import basket from  './slices/products/Basket.Redux'

export default configureStore({
  reducer: {
    products,
    basket
  }
});