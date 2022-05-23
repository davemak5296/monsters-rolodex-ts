import { cardListProps } from "../../types";
import Card from "./../card/card.component";
import "./../../index.css";
// import "./card-list.styles.css";

const CardList = (props: cardListProps) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
// class CardList extends Component<cardListProps, emptyObj> {
//   constructor(props: cardListProps) {
//     super(props);
//   }
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
