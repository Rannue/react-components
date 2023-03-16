import React from "react";
import { SearchBar } from "../components/search-bar";

const HomePage = () => {
  return (
    <>
      {" "}
      <div>
        <h1>Main page</h1>
      </div>
      <SearchBar message={null} />
    </>
  );
};

export { HomePage };
