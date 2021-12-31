import React from "react";

export default function Card(props) {
  return (
    <>
      {props.cards.map((card) => (
        <button
          className="d-inline-flex p-3 justify-content-between"
          key={card.cardno}
          onClick={(event) => {
            if (props.attempts < 3) {
              alert("You Clicked: " + event.target.id);
              if (event.target.id === props.choice)
                event.target.style.background = "green";
              else event.target.style.background = "red";
              props.updateAttempts(props.attempts + 1);
            }
          }}
          id={card.cardno}
        > {card.title}</button>
      ))}
    </>
  );
}
