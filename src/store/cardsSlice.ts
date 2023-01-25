import { createSlice } from '@reduxjs/toolkit';
import { CardInfoTypes } from 'types/types';

interface CardsInfo {
  cards: CardInfoTypes[];
}

const initialState: CardsInfo = {
  cards: []
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,

  reducers: {
    getCardsInfo(state, action) {
      state.cards = action.payload;
    }
  }
});

export const { getCardsInfo } = cardsSlice.actions;
export default cardsSlice.reducer;
