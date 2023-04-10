import React from 'react';

export const Spinner = () => {
  return (
    <>
      <div className="loading-dots" data-testid="spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
