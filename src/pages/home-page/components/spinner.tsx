import React from 'react';

export const Spinner = () => {
  return (
    <>
      <div className="prompt-container">
        <div className="loading-dots" data-testid="spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
