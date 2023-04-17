import React from 'react';
import { Character } from '../../data';
import { useSelector } from 'react-redux';
import { IStateCharacter } from 'pages/home-page/slises/characterSlice';

export interface ModalProps {
  character: Character;
}

export interface Episode {
  id: number;
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  name: string;
  url: string;
}

export const Modal = () => {
  const characterD = useSelector((state: IStateCharacter) => state.character.character);

  if (characterD) {
    const { name, status, image, species, gender, location } = characterD;
    return (
      <>
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="modal-container__main-info">
              <div className="entity">
                <div className="entity-name">
                  <h4>{name}</h4>
                </div>
                <img src={image} alt={name} />
              </div>
              <div className="entity-info">
                <div className="info-block">
                  <h5>Gender:</h5>
                  <h5 className="modal-text__bold">{gender}</h5>
                </div>
                <div className="info-block">
                  <h5>Live status:</h5>
                  <h5 className="modal-text__bold">{status}</h5>
                </div>
                <div className="info-block">
                  <h5>Species:</h5>
                  <h5 className="modal-text__bold">{species}</h5>
                </div>
                <div className="info-block">
                  <h5>Location:</h5>
                  <h5 className="modal-text__bold">{location.name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="modal-wrapper"></div>
      </>
    );
  }
};
