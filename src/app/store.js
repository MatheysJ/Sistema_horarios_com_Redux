import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import horasReducer from '../features/horas/horasSlice';
import toolBarReducer from '../features/toolBar/toolBarSlice';

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
      const result = next(action)
      localStorage.setItem('horarios', JSON.stringify(getState()))
      return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem('horarios') !== null) {
      return JSON.parse(localStorage.getItem('horarios'))
  }
}

export const store = configureStore({
  reducer: {    
    horas: horasReducer,
    toolbar: toolBarReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});
