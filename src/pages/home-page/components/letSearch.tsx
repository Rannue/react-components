import React from 'react';
import cucmberIMG from '../../../../src/assets/pngegg.png';

export const LetSearch = () => {
  return (
    <>
      <div className="prompt-container">
        <h3>It&#39;s time to start searching!</h3>
        <img className="prompt-img" width="30px" src={cucmberIMG} alt="img" />
      </div>
    </>
  );
};
