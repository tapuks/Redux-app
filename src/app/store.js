import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {moviesApi} from '../redux/apiFetch/movies'

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer 
    
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
