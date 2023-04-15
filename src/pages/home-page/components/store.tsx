import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchText: string;
  //   searchResults: Character[];
  //   formSubmissions: Card[];
}

export const initialState = (): SearchState => ({
  searchText: '',
  //   searchResults: [],
  //   formSubmissions: [],
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    // setSearchResults: (state, action: PayloadAction<Character[]>) => {
    //   state.searchResults = action.payload;
    // },
    // setFormSubmissions: (state, action: PayloadAction<Card[]>) => {
    //   state.formSubmissions = action.payload;
    // },
  },
});

function searchReducer(state = '', action: AnyAction): string {
  switch (action.type) {
    case 'search/setSearchText':
      return action.payload;
    default:
      return state;
  }
}

export const store: Store<SearchState, AnyAction> = configureStore({
  reducer: {
    searchText: searchReducer,
    // searchResults: searchResultsReducer,
    // formSubmissions: formSubmissionsReducer,
  },
});

export const { setSearchText } = searchSlice.actions;
