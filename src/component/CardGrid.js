import React from "react";
import classes from "../module/CardGrid.module.css";
import Card from "./Card";

class CardGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={classes.test} key={this.props.cardsInfo.key}>
        {this.props.cardsInfo.map((el) => {
          return (
            <Card
              cardInfo={el}
              key={el.key}
              togglePopup={this.props.togglePopup}
              changeSelectedCard={this.props.changeSelectedCard}
            ></Card>
          );
        })}
      </div>
    );
  }
}

export default CardGrid;
