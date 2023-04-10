import React from 'react';
import { CardItem } from './card-item';
import { Character } from '../home-page';
import cucmber from '../../../assets/pngegg.png';
import { IErrors } from '../home-page';

interface CardsProps {
  characters: Character[] | IErrors | null;
  onCardClick: (character: Character) => void;
}

export const Cards: React.FC<CardsProps> = ({ characters, onCardClick }) => {
  if (Array.isArray(characters)) {
    return (
      <div className="card-container">
        {characters.map((card) => (
          <div className="card" key={card.id}>
            <CardItem character={card} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    );
  } else if (characters) {
    return (
      <div className="prompt-container">
        <h3>{characters.text}</h3>
        <img className="prompt-img" src={characters.image} alt="cucmber" />
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
