import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set4`} alt="monster" />
      <h1 key={monster.id}>{monster.name}</h1>
      <h2>{monster.email}</h2>
    </div>
  );
};
