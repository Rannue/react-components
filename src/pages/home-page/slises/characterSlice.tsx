import { createSlice } from '@reduxjs/toolkit';
import { Character } from 'pages/home-page/components/data';

export interface IInitialStateCharacter {
  character: Character | null;
}

const initialState: IInitialStateCharacter = {
  character: null,
};

export interface IStateCharacter {
  character: IInitialStateCharacter;
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const characterActions = characterSlice.actions;

export default characterSlice.reducer;
