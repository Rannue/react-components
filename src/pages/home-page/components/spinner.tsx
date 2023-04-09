import React from 'react';
import { useState } from 'react';

export const Spinner = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="loading-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
