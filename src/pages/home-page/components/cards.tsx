import React from 'react';
import { CardItem } from './card-item';
import { Character } from './search-bar';
import cucmber from '../../../assets/pngwing.com.png';

interface CardsProps {
  characters: Character[] | null;
  onCardClick: (character: Character) => void;
}

export const Cards: React.FC<CardsProps> = ({ characters, onCardClick }) => {
  console.log(typeof characters);
  if (characters) {
    return (
      <div className="card-container">
        {characters.map((card) => (
          <div className="card" key={card.id}>
            <CardItem character={card} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="no-characters-container">
        <h3>There are no such characters!</h3>
        <img className="cucmber" src={cucmber} alt="cucmber" />
      </div>
    );
  }
};
