import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    setSearchValue(state, action) {
      state.search = action.payload;
    }
  }
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
