import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {moviesApi} from '../redux/apiFetch/movies'
import MoviesReducers from '../redux/reducers/movies';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    MoviesReducers,
    
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
