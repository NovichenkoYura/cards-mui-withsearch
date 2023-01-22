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

  // extraReducers: (builder) => {
  //   builder.addCase(loginThunk.pending, (state) => {
  //     state.isFetching = true;
  //   });
  //   builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
  //     state.token = action.payload.token;
  //     state.login = action.payload.login;
  //     state.password = action.payload.password;
  //   });
  //   builder.addCase(loginThunk.rejected, (state) => {
  //     state.isFetching = false;
  //   });
  // },

  reducers: {
    getCardsInfo(state, action) {
      console.log(action.payload);
      state.cards = action.payload;
    }
  }
});

export const { getCardsInfo } = cardsSlice.actions;
export default cardsSlice.reducer;
