import "./card.styles.css";

// Can also be like this const Card = ({ monster: { id, name, email } }) => {
const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${id}`} />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

// import { Component } from "react";

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${id}`}
//         />
//         <h2 key={id}>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// export default Card;
