import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import { FormPage } from './pages/form-page/form-page';

import { NotFound } from './pages/404-page/404-page';
import { AboutPage } from './pages/about-page/about-page';
import { HomePage } from './pages/home-page/home-page';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about-us" element={<AboutPage />}></Route>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </>
    </Provider>
  );
}

export default App;
