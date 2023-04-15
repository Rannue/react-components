import React, { useState } from 'react';
import { Cards } from './components/cards';
import { SearchBar } from './components/search-bar';

import '../style.css';
import { Spinner } from './components/spinner';
import { Modal } from './components/modal/modal';
import Overlay from './components/modal/overlay';
import noInternet from '../../assets/pngwing.com (1).png';
import responseStatus404 from '../../assets/pngmor.png';

export interface IErrors {
  errorStatus: number;
  text: string;
  image: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const HomePage = () => {
  const [results, setResults] = useState<Character[] | IErrors | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Character | null>(null);

  const handleSearch = async (value: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No such character!');
        }
        if (response.status === 500) {
          throw new Error('Server error. Please try again later.');
        }
        throw new Error('Unknown error.');
      }
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      if (error instanceof TypeError) {
        const obj: IErrors = {
          errorStatus: 0,
          text: 'Сheck internet connection',
          image: noInternet,
        };
        setResults(obj);
      } else {
        const obj: IErrors = {
          errorStatus: 0,
          text: 'No such character!',
          image: responseStatus404,
        };
        setResults(obj);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const handleCardClick = (card: Character): void => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading ? <Spinner /> : <Cards characters={results} onCardClick={handleCardClick} />}
      {isModalOpen && <Overlay onClick={handleModalClose} />}
      {isModalOpen && selectedCard && <Modal character={selectedCard} />}
    </>
  );
};

export { HomePage };
