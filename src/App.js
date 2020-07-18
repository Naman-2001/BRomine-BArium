import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/header";
import CharacterGrid from "./components/characters/Grid";
import Search from "./components/ui/Search";

const App = () => {
  const [casts, setCasts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

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

  const getQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid isLoading={isloading} casts={casts} />
    </div>
  );
};

export default App;
