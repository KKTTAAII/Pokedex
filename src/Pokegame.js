import React from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

function dealCard(arr) {
  let card;
  const cards = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * arr.length);
    card = arr.splice(random, 1);
    cards.push(card[0]);
  }
  return cards;
}

function calculateScore(arr) {
  return arr.map(pokemon => pokemon.base_experience).reduce((a, b) => a + b, 0);
}

const Pokegame = ({ pokemons }) => {
  const firstHand = dealCard(pokemons);
  const firstHandScore = calculateScore(firstHand);
  const secondHand = pokemons;
  const SecondHandScore = calculateScore(secondHand);
  return (
    <div>
      <div>
        <h2 className="Pokegame-hand">First Hand</h2>
        <Pokedex
          pokemons={firstHand}
          totalScore={firstHandScore}
          isWinner={firstHandScore > SecondHandScore ? true : false}
        />
      </div>
      <div>
        <h2 className="Pokegame-hand">Second Hand</h2>
        <Pokedex
          pokemons={secondHand}
          totalScore={SecondHandScore}
          isWinner={SecondHandScore > firstHandScore ? true : false}
        />
      </div>
    </div>
  );
};

export default Pokegame;
