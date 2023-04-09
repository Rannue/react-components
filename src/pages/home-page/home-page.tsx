import React, { useState } from 'react';
import { Cards } from './components/cards';
import { Character, SearchBar } from './components/search-bar';

import '../style.css';
import { Spinner } from './components/spinner';
import { Modal } from './components/modal/modal';
import Overlay from './components/modal/overlay';

const HomePage = () => {
  const [results, setResults] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Character | null>(null);

  const handleSearch = async (value: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
      const data = await response.json();
      console.log(data);
      setResults(data.results);
    } catch (error) {
      console.error(error);
      setResults(null);
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
