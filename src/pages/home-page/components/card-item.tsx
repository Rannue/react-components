import React from 'react';
import { Character } from './search-bar';

interface CardItemProps {
  character: Character;
  onCardClick: (character: Character) => void;
}

export const CardItem: React.FC<CardItemProps> = ({ character, onCardClick }) => {
  const { name, image } = character;

  return (
    <>
      <div className="card-img__wrapper" onClick={() => onCardClick(character)}>
        <img className="card-img" src={image} alt={name} />
      </div>
      <div className="card-text__wrapper">
        <div className="card-title">
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
};
