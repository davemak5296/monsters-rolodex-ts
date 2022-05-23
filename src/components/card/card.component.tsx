import { cardProps } from "./../../types";
import "./../../index.css";
// import "./card.styles.css";

const Card = (props: cardProps) => {
  const { name, id, email } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
// class Card extends Component<cardProps, emptyObj> {
//   constructor(props: cardProps) {
//     super(props);
//   }
//   render() {
//     const { name, id, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
