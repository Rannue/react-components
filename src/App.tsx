import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { NotFound } from './pages/404-page';
import { AboutPage } from './pages/about-page';
import { HomePage } from './pages/home-page';

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <h4>KEYBOARDS</h4>
        </div>
        <div className="pages">
          <NavLink end to="/">
            Main page
          </NavLink>
          <NavLink to="/about-us">About us</NavLink>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
