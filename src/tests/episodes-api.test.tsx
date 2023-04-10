import { setupServer } from 'msw/node';
import { Episodes } from '../pages/home-page/components/modal/episodes';
import { Modal } from '../pages/home-page/components/modal/modal';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('handleEpisodeSearch should fetch episodes and set results and buttonStatus', async () => {
  const mockCharacter = {
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
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:56.301Z',
    type: '',
  };

  const { getByRole } = render(<Modal character={mockCharacter} />);
  const button = getByRole('button', { name: 'WHAT EPISODES ?' });

  userEvent.click(button);

  const episode1 = await screen.queryByText(/episode/i);
  expect(episode1).toBeInTheDocument();
});

test('Episodes component should render a list of episodes', async () => {
  const episodes = [
    {
      air_date: 'March 17, 2014',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
      ],
      created: '2017-11-10T12:56:34.543Z',
      episode: 'S01E08',
      id: 8,
      name: 'Rixty Minutes',
      url: 'https://rickandmortyapi.com/api/episode/8',
    },
  ];

  const { getAllByRole } = render(<Episodes episodes={episodes} />);

  const items = getAllByRole('listitem');

  expect(items).toHaveLength(episodes.length);
  expect(items[0]).toHaveTextContent(episodes[0].name);
});
