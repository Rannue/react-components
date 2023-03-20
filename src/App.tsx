import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

import { NotFound } from './pages/404-page';
import { AboutPage } from './pages/about-page';
import { HomePage } from './pages/home-page';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
