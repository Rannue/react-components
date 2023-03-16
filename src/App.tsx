import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { NotFound } from "./pages/404-page";
import { AboutPage } from "./pages/about-page";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <>
      <header>
        <Link to="/">Main page</Link>
        <Link to="/about-us">About us</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
