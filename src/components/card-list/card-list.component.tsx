import { Component } from "react";
import { emptyObj, cardListProps } from "../../types";
import Card from "./../card/card.component";
import "./card-list.styles.css";
class CardList extends Component<cardListProps, emptyObj> {
  constructor(props: cardListProps) {
    super(props);
  }
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
