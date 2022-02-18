import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemons }) => {
  return (
    <div>
      <h1 className="Pokedex-header">Pokedex</h1>
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
    </div>
  );
};

export default Pokedex;
