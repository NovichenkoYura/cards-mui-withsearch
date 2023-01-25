import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import searchReducer from './searhSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    search: searchReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
