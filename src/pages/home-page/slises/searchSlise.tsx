import { createSlice } from '@reduxjs/toolkit';

export interface IInitialSearchState {
  search: string;
}

const initialState: IInitialSearchState = {
  search: '',
};

export interface IStateSearch {
  search: IInitialSearchState;
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
