import { Component } from "react";
import { emptyObj, cardProps } from "./../../types";
import "./card.styles.css";

class Card extends Component<cardProps, emptyObj> {
  constructor(props: cardProps) {
    super(props);
  }
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
