import React, { useState } from 'react';
import { Character } from '../search-bar';
import { Episodes } from './episodes';
import { Spinner } from '../spinner';

interface ModalProps {
  character: Character;
}

export const Modal: React.FC<ModalProps> = ({ character }) => {
  const { name, status, image, species, gender, location, episode } = character;
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${episode}`);
      const data = await response.json();
      console.log(data);
      setResults(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
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
          <button className="modal-btn" onClick={handleSearch}>
            WHAT EPISODES ?
          </button>
          {/* {loading ? <Spinner /> : <Episodes characters={results} onCardClick={handleCardClick} />} */}
        </div>
      </div>
    </>
  );
};
