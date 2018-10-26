import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer'

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  filters: filterReducer
});
