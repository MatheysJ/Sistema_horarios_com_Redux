import { configureStore } from '@reduxjs/toolkit';
import horasReducer from '../features/horas/horasSlice';

export const store = configureStore({
  reducer: {    
    horas: horasReducer,
  },
});
