import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Cards } from '../pages/home-page/components/cards';
import { Character } from '../pages/home-page/components/search-bar';

const characters: Character[] = [
  {
    created: '2017-11-04T19:26:56.301Z',
    episode: [
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/10',
    ],
    gender: 'Male',
    id: 5,
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
    url: 'https://rickandmortyapi.com/api/character/5',
  },
  {
    created: '2017-12-29T16:46:41.345Z',
    episode: ['https://rickandmortyapi.com/api/episode/18'],
    gender: 'Male',
    id: 163,
    image: 'https://rickandmortyapi.com/api/character/avatar/163.jpeg',
    location: { name: 'Nuptia 4', url: 'https://rickandmortyapi.com/api/location/13' },
    name: 'Ideal Jerry',
    origin: { name: 'Nuptia 4', url: 'https://rickandmortyapi.com/api/location/13' },
    species: 'Mythological Creature',
    status: 'Dead',
    type: 'Mytholog',
    url: 'https://rickandmortyapi.com/api/character/163',
  },
];

test('Character name', () => {
  render(
    <Cards
      characters={characters}
      onCardClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  const characterName = screen.getByText(/Ideal Jerry/i);
  expect(characterName).toBeInTheDocument();
});
