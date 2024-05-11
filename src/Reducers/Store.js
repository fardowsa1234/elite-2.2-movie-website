import { configureStore } from '@reduxjs/toolkit';
import currentViewReducer from './CurrentViewReducer'; // Assuming your reducer is in reducers/currentViewReducer.js

const store = configureStore({
  reducer: currentViewReducer,
});

export default store;
