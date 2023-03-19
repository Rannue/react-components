import React from "react";
import { products } from "../assets/data";
import "../components/card.css";
import { Cards } from "../components/cards";
import { SearchBar } from "../components/search-bar";

const HomePage = () => {
  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar />
      </div>
      <Cards {...products} />
    </>
  );
};

export { HomePage };
