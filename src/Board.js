import { useState } from "react";
import { getRandomFlags } from "./flagList";
import Card from "./Card";
import "./Board.css";
import { shuffleArray } from "./utiles";


function Board() {
  const CARDS_NUMBER = 12;
  const [flags, setFlags] = useState(getRandomFlags(CARDS_NUMBER));

  const [score, setScore] = useState(0);

  const incrementScore = () => { setScore(score + 1) };

  const [bestScore, setBestScore] = useState(0);

  const [clickedCountries, setClickedCountries] = useState([]);

  const cardClicked = (countryName) => {
    console.log({ clickedCountries, countryName });
    console.log(clickedCountries.includes(countryName));
    if (clickedCountries.includes(countryName)) {
      resetGame();
    } else {
      incrementScore();
      setClickedCountries([...clickedCountries, countryName]);
    }
  };

  const resetGame = () => { 
    if (score > bestScore) setBestScore(score);
    setFlags(getRandomFlags(CARDS_NUMBER));
    setClickedCountries([])
    setScore(0);
  };

  const shuffleCardsList = () => {
    return shuffleArray(Object.keys(flags)).map((countryName) => (
      <Card
        key={countryName}
        countryName={countryName}
        flag={flags[countryName]}
        cardClicked={cardClicked}
        resetGame={resetGame}
      />
    ))
  };

  return (
    <div className="Board">
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
      <div className="cards">
        {shuffleCardsList()}
      </div>
    </div>
  );
}

export default Board;