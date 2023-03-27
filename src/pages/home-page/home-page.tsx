import React from 'react';
import { products } from '../../assets/data';
import { Cards } from './cards';
import { SearchBar } from './search-bar';
import '../style.css';

const HomePage = () => {
  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar />
      </div>
      <Cards {...products} />
    </>
  );
};

export { HomePage };
