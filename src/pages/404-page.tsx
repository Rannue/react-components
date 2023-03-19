import React from 'react';
import { NavLink } from 'react-router-dom';
import './404-page.css';

const NotFound = () => {
  return (
    <>
      <div className="unknown-page__container">
        <div className="unknown-page__text">
          <h1 data-testid="unknown-page">404</h1>
          <h2>Page is not Found</h2>
        </div>
        <NavLink end to="/">
          <button>GO BACK HOME</button>
        </NavLink>
      </div>
    </>
  );
};

export { NotFound };
