import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, IErrors } from './data';

export interface SearchState {
  searchText: string;
  searchResults: Character[] | IErrors;
  modalStatus: boolean;
  modalCardResult: Character | null;
  loading: boolean;
  //   formSubmissions: Card[];
}

export const initialState = (): SearchState => ({
  searchText: '',
  searchResults: [],
  modalStatus: false,
  modalCardResult: null,
  loading: false,
  //   formSubmissions: [],
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Character[] | IErrors>) => {
      state.searchResults = action.payload;
    },
    setModalStatus: (state, action: PayloadAction<boolean>) => {
      state.modalStatus = action.payload;
    },
    setModalCardResult: (state, action: PayloadAction<Character | null>) => {
      state.modalCardResult = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.modalStatus = action.payload;
    },
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

function searchResultsReducer(
  state: IErrors | Character[] = [],
  action: AnyAction
): Character[] | IErrors {
  switch (action.type) {
    case 'search/setSearchResults':
      return action.payload;
    default:
      return state;
  }
}

function modalStatusReducer(state = false, action: AnyAction): boolean {
  switch (action.type) {
    case 'search/setModalStatus':
      return action.payload;
    default:
      return state;
  }
}

function modalCardResultReducer(
  state: Character | null = null,
  action: AnyAction
): Character | null {
  switch (action.type) {
    case 'search/setModalCardResult':
      return action.payload;
    default:
      return state;
  }
}

function loadingReducer(state = false, action: AnyAction): boolean {
  switch (action.type) {
    case 'search/setLoading':
      return action.payload;
    default:
      return state;
  }
}

export const store: Store<SearchState, AnyAction> = configureStore({
  reducer: {
    searchText: searchReducer,
    searchResults: searchResultsReducer,
    modalStatus: modalStatusReducer,
    modalCardResult: modalCardResultReducer,
    loading: loadingReducer,
    // formSubmissions: formSubmissionsReducer,
  },
});

export const { setSearchText, setSearchResults, setModalStatus, setModalCardResult, setLoading } =
  searchSlice.actions;
