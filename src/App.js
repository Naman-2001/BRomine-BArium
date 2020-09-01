import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/header";
import CharacterGrid from "./components/characters/Grid";
import Search from "./components/ui/Search";
import Pagination from "./components/ui/Pagination";

const App = () => {
  const [casts, setCasts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [castsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(result.data);

      setCasts(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const indexOfLastCast = currentPage * castsPerPage;
  const indexOfFirstCast = indexOfLastCast - castsPerPage;
  const currentCasts = casts.slice(indexOfFirstCast, indexOfLastCast);

  const getQuery = (query) => {
    setQuery(query);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid isLoading={isloading} casts={currentCasts} />
      <Pagination
        castsPerPage={castsPerPage}
        totalCasts={casts.length}
        paginate={paginate}
      />
      <p>This is just for testing the git branching</p>
    </div>
  );
};

export default App;
