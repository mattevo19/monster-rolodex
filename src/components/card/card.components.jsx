import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set4`}
        alt="monster"
      />
      <h1 key={props.monster.id}>{props.monster.name}</h1>
      <h2>{props.monster.email}</h2>
    </div>
  );
};
