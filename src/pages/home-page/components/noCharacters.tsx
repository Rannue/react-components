import React from 'react';
import mortyIMG from '../../../../src/assets/pngmor.png';

interface Props {
  searchText: string;
}

export const NoCharacter: React.FC<Props> = ({ searchText }) => {
  return (
    <>
      <div className="prompt-container">
        <h3>No results found for &quot;{searchText}&quot;</h3>
        <img className="prompt-img" src={mortyIMG} alt="Morty" />
      </div>
    </>
  );
};
