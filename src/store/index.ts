import { configureStore } from '@reduxjs/toolkit';
import { createRootReducer } from './rootReducer';

export const store = configureStore({
  reducer: createRootReducer,
  devTools: process.env.NODE_ENV === 'production' ? false : true
});
