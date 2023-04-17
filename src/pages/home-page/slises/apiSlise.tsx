import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TResult } from 'pages/home-page/components/cards';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCard: builder.query<TResult, string>({
      query: (card) => `character/?name=${card}`,
    }),
  }),
});

export const { useGetCardQuery } = rickandmortyApi;
