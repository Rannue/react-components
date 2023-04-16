import React from 'react';
import { CardItem } from './card-item';
import cucmber from '../../../assets/pngegg.png';
import morty from '../../../assets/pngmor.png';
import { useSelector } from 'react-redux';
import { SearchState } from './store';

export const Cards = () => {
  const searchText = useSelector((state: SearchState) => state.searchText);
  const searchResults = useSelector((state: SearchState) => state.searchResults);

  if (Array.isArray(searchResults)) {
    if (searchResults.length > 0) {
      return (
        <div className="card-container">
          {searchResults.map((card) => (
            <div className="card" key={card.id}>
              <CardItem character={card} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="prompt-container">
          <h3>It&#39;s time to start searching!</h3>
          <img className="prompt-img" width="30px" src={cucmber} alt="img" />
        </div>
      );
    }
  } else if (searchText) {
    return (
      <div className="prompt-container">
        <h3>No results found for &quot;{searchText}&quot;</h3>
        <img className="prompt-img" src={morty} alt="cucmber" />
      </div>
    );
  } else {
    return (
      <div className="prompt-container">
        <h3>It&#39;s time to start searching!</h3>
        <img className="prompt-img" width="30px" src={cucmber} alt="img" />
      </div>
    );
  }
};
