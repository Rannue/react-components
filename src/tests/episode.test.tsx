import { render, screen } from '@testing-library/react';
import { Modal } from '../pages/home-page/components/modal/modal';
import React from 'react';
import { Character } from '../pages/home-page/components/search-bar';

describe('Modal', () => {
  const character: Character = {
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
  };

  it('should render character name and image', () => {
    render(<Modal character={character} />);
    const name = screen.getByText('Jerry Smith');
    const image = screen.getByAltText('Jerry Smith');
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  // it('should not render episodes by default', () => {
  //   render(<Modal character={character} />);
  //   const episodes = screen.queryByTestId('episodes');
  //   expect(episodes).not.toBeInTheDocument();
  // });

  // it('should render episodes when button is clicked', async () => {
  //   render(<Modal character={character} />);
  //   const button = screen.getByText('WHAT EPISODES ?');
  //   fireEvent.click(button);

  //   const episode = await screen.findByTestId('episodes');
  //   expect(episode).toBeInTheDocument();
  // });
});
