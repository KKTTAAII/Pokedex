import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  let pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <div className="Pokecard-img-container">
        <img src={pic} className="Pokecard-img"></img>
      </div>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">Exp: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
