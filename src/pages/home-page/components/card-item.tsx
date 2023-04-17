import React from 'react';
import { useDispatch } from 'react-redux';
import { characterActions } from '../slises/characterSlice';
import { modalActions } from '../slises/modalSlise';
import { Character } from './data';

interface CardItemProps {
  character: Character;
}

export const CardItem: React.FC<CardItemProps> = ({ character }) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(characterActions.addValue(character));
    dispatch(modalActions.addValue(true));
  };

  const { name, image } = character;

  return (
    <>
      <div className="card-wrapper">
        <div className="card-img__wrapper" onClick={handleCardClick}>
          <img className="card-img" src={image} alt={name} />
        </div>
        <div className="card-text__wrapper">
          <div className="card-title">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
