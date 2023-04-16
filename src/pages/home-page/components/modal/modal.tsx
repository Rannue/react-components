import React, { useState } from 'react';
import { Character } from '../data';
import { useSelector } from 'react-redux';
import { SearchState } from '../store';

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
  const character = useSelector((state: SearchState) => {
    return state.modalCardResult;
  });

  // const [loading, setLoading] = useState(false);
  // const [buttonStatus, setButtonStatus] = useState(false);
  // const [results, setResults] = useState<Episode[] | null>([]);

  if (character) {
    console.log(character);

    const { name, status, image, species, gender, location, episode } = character;

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
              {/* {!buttonStatus && <button className="modal-btn">WHAT EPISODES ?</button>} */}
            </div>
            {/* {loading && results ? <Spinner /> : <Episodes episodes={results} />} */}
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

  // const handleEpisodeSearch = async () => {
  //   setLoading(true);
  //   try {
  //     setLoading(true);
  //     const responses = await Promise.all(
  //       episode.map(async (item) => {
  //         const response = await fetch(`${item}`);
  //         return response.json();
  //       })
  //     );
  //     setResults(responses);
  //     setButtonStatus(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
};

// onClick={handleEpisodeSearch}
