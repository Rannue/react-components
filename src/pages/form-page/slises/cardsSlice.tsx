import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'pages/form-page/components/form-card';

export interface IInitialCardsState {
  cards: Card[];
  id: number;
}

const initialState: IInitialCardsState = {
  cards: [],
  id: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const data = action.payload;
      state.cards.push({
        id: state.id++,
        name: data.name,
        email: data.email,
        date: data.date,
        select: data.select,
        image: data.image,
        checkbox: data.checkbox,
        radio: data.gender,
      });
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice.reducer;
