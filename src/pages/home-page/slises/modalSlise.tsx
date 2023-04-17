import { createSlice } from '@reduxjs/toolkit';

export interface IInitialModalState {
  modalStatus: boolean;
}

const initialState: IInitialModalState = {
  modalStatus: false,
};

export interface IStateModal {
  modalStatus: IInitialModalState;
}

const modalStatusSlice = createSlice({
  name: 'modalStatus',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.modalStatus = action.payload;
    },
  },
});

export const modalActions = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
