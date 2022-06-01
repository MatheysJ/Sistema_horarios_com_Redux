import { configureStore } from '@reduxjs/toolkit';
import horasReducer from '../features/horas/horasSlice';
import toolBarReducer from '../features/toolBar/toolBarSlice';

export const store = configureStore({
  reducer: {    
    horas: horasReducer,
    toolbar: toolBarReducer,
  },
});
