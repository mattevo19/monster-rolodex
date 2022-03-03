import Card from "../card/card.components";

import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
export default CardList;

// const test = () => () implicit return
// const test = () => {} needs return()

// import { Component } from "react";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card key={monster.id} monster={monster} />
//         ))}
//       </div>
//     );
//   }
// }

// export default CardList;
