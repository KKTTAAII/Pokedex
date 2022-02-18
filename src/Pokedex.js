import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemons, totalScore, isWinner }) => {
  return (
    <div>
      <div className="Pokedex-all-pokemon-container">
        {pokemons.map(pokemon => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
      <h2 className="Pokedex-score">Total Score: {totalScore}</h2>
      {isWinner ? <h2 className="Pokedex-winner">This hand Wins!</h2> : ""}
    </div>
  );
};

export default Pokedex;
