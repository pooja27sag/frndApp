import React from "react";
import { useState, useEffect } from "react";
import GameOver from "./GameOver";
import Card from "./Card";

export default function ShowCards(props) {
  const [cards, setCards] = useState([
    {
      cardno: 1,
      title: "Card 1",
    },
    {
      cardno: 2,
      title: "Card 2",
    },
    {
      cardno: 3,
      title: "Card 3",
    },
    {
      cardno: 4,
      title: "Card 4",
    },
    {
      cardno: 5,
      title: "Card 5",
    },
    {
      cardno: 6,
      title: "Card 6",
    },
    {
      cardno: 7,
      title: "Card 7",
    },
    {
      cardno: 8,
      title: "Card 8",
    },
    {
      cardno: 9,
      title: "Card 9",
    },
  ]);

  const clearState = () => {
    console.log("Retry clicked");
    setCards(cards);
  };

  const [attempts, updateAttempts] = useState(0);
  const [closegame, updateCloseGame] = useState(false);

  useEffect(() => {
    if (attempts >= 3) {
      alert("Your Attempts are Over!! Thank You");
      updateCloseGame(true);
    }
  });

  const onRetry = () => {
    clearState();
    updateAttempts(0);
    updateCloseGame(false);
  };

  return (
    <>
      <h5> No of Attempts: {attempts}</h5>
        <Card
          cards={cards}
          attempts={attempts}
          choice={props.choice}
          updateAttempts={updateAttempts}
        />
      {closegame && (
        <GameOver onRetry={onRetry} changeStatus={props.changeStatus} />
      )}
    </>
  );
}
