import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ isLoading, casts }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {casts.map((cast) => (
        <CharacterItem key={cast.char_id} cast={cast} />
      ))}
    </section>
  );
};

export default CharacterGrid;
