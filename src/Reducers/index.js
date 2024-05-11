import { combineReducers } from 'redux';
import currentViewReducer from './CurrentViewReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  currentView: currentViewReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
