import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Character } from 'pages/home-page/components/search-bar';
import { Modal } from '../pages/home-page/components/modal/modal';
import React from 'react';

const server = setupServer(
  rest.get<Character>('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    const id = req.params.id;
    return res(
      ctx.status(200),
      ctx.json({
        created: '2017-11-04T19:26:56.301Z',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
        ],
        gender: 'Male',
        id: String(id),
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        name: 'Jerry Smith',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        species: 'Human',
        status: 'Alive',
        type: '',
        url: `https://rickandmortyapi.com/api/character/${id}`,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('handles episode search', async () => {
  render(
    <Modal
      character={{
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/6'],
        url: 'https://rickandmortyapi.com/api/character/5',
        created: '2017-11-04T19:26:56.301Z',
        type: '',
      }}
    />
  );

  const searchButton = screen.getByRole('button', { name: /what episodes ?/i });
  expect(searchButton).toBeInTheDocument();

  //   fireEvent.click(searchButton);
  //   await waitFor(() => expect(screen.getByTestId('episodes-list')).toBeInTheDocument());
});
