import React from "react";
import classes from "../module/Card.module.css";
import CardOptions from "./CardOptions";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.cardClicked = this.cardClicked.bind(this);
    this.clickCheck = this.clickCheck.bind(this);
    this.state = { flip: true, selectedCard: "" };
  }

  cardClicked(event) {
    if (
      event.target.className === classes.card ||
      event.target.className === classes.text
    ) {
      this.setState((preState) => {
        return { flip: !preState.flip };
      });
    } else {
      return;
    }
  }

  clickCheck() {
    if (this.state.flip) {
      return <h2 className={classes.text}>{this.props.cardInfo.keyword}</h2>;
    } else {
      return <h4 className={classes.text}>{this.props.cardInfo.detail}</h4>;
    }
  }

  render() {
    return (
      <div className={classes.card} onClick={this.cardClicked}>
        <CardOptions
          changeSelectedCard={this.props.changeSelectedCard}
          keyz={this.props.cardInfo.key}
          className={classes.options}
          togglePopup={this.props.togglePopup}
        />
        {this.clickCheck()}
      </div>
    );
  }
}

export default Card;
