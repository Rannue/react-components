import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rickandmortyApi } from './pages/home-page/slises/apiSlise';
import searchSlice from './pages/home-page/slises/searchSlise';
import modalStatusSlice from './pages/home-page/slises/modalSlise';
import characterSlice from './pages/home-page/slises/characterSlice';
import cardsSlice from './pages/form-page/slises/cardsSlice';

const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
    search: searchSlice,
    modalStatus: modalStatusSlice,
    character: characterSlice,
    cards: cardsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([rickandmortyApi.middleware]),
});

const rootReducer = combineReducers({
  search: searchSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
