import React, { useState, useEffect } from 'react';
import { products } from '../../assets/data';
import { Cards } from './cards';
import { SearchBar } from './search-bar';
import '../style.css';

const HomePage = () => {
  const [cardsArr, setCardsArr] = useState(products);

  useEffect(() => {
    setCardsArr(Object.values(products));
  }, []);

  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar />
      </div>
      <Cards {...cardsArr} />
    </>
  );
};

export { HomePage };
