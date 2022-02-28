import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster" />
      <h2 key={monster.id}>{monster.name}</h2>
      <h2>{monster.email}</h2>
    </div>
  );
};