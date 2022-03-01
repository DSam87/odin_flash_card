import React from "react";
import Form from "./Form";
import CardGrid from "./CardGrid";
import classes from "../module/App.module.css";
import CardContianer from "../ui/CardContainer";
import Popup from "./Popup";
import EditPopup from "./EditPopup.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      popup: false,
      editPopup: false,
      selectedCard: "",
      selectedCardInfo: {},
    };

    this.updateCardState = this.updateCardState.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.changeSelectedCard = this.changeSelectedCard.bind(this);
    this.toggleEditCard = this.toggleEditCard.bind(this);

    this.selectedCardInfoFunction = this.selectedCardInfoFunction.bind(this);
    this.toggleFormPopup = this.toggleFormPopup.bind(this);
    this.returnEdit = this.returnEdit.bind(this);
  }

  changeSelectedCard(key) {
    this.setState({ selectedCard: key });
  }

  updateCardState(cardObj) {
    this.setState((preState) => {
      return { cards: [...preState.cards, cardObj] };
    });
  }

  removeCard() {
    const newList = this.state.cards.filter(
      (item) => item.key !== this.state.selectedCard
    );
    this.setState({ cards: newList });
  }

  toggleEditCard() {
    const selectedCardInfo = this.state.cards.filter(
      (item) => item.key === this.state.selectedCard
    );

    this.setState({ popup: true });
    this.setState((preState) => {
      return {
        editPopup: !preState.editPopup,
      };
    });
    this.selectedCardInfoFunction(selectedCardInfo);
  }

  selectedCardInfoFunction(selectedCardInfoo) {
    this.setState({
      selectedCardInfo: selectedCardInfoo,
    });
  }

  togglePopup(event) {
    if (
      event.target.id === "black" ||
      event.target.id === "option" ||
      event.target.type === "button"
    ) {
      this.setState((preState) => {
        return { popup: !preState.popup };
      });
    }
  }

  toggleFormPopup(event) {
    if (
      event.target.id === "black" ||
      event.target.id === "option" ||
      event.target.type === "button"
    ) {
      this.setState((preState) => {
        return { editPopup: !preState.editPopup };
      });
    }
  }

  returnEdit(title, detail, key) {
    const selectedCardInfo = this.state.cards.map((item) => {
      if (item.key === key) {
        // return item.key === this.state.selectedCard;
        return { keyword: title, detail: detail, key: key };
      }

      if (item.key !== key) {
        return item;
      }
    });
    console.log(selectedCardInfo);
    this.setState({ cards: selectedCardInfo });
  }

  render() {
    return (
      <div className={classes.grid}>
        <CardContianer>
          <Form addCardState={this.updateCardState} />
        </CardContianer>
        <CardContianer isCard={true}>
          <CardGrid
            cardsInfo={this.state.cards}
            removeCard={this.removeCard}
            togglePopup={this.togglePopup}
            changeSelectedCard={this.changeSelectedCard}
          />
        </CardContianer>
        {this.state.popup ? (
          <Popup
            togglePopup={this.togglePopup}
            removeCard={this.removeCard}
            toggleEditCard={this.toggleEditCard}
          />
        ) : null}
        {!this.state.popup && this.state.editPopup && (
          <EditPopup
            cardInfo={this.state.selectedCardInfo}
            toggleFormPopup={this.toggleFormPopup}
            returnEdit={this.returnEdit}
          />
        )}
      </div>
    );
  }
}

export default App;
