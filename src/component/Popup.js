import React from "react";
import classes from "../module/Popup.module.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classes.blackBack}
        id="black"
        onClick={this.props.togglePopup}
      >
        <div className={classes.card}>
          {" "}
          <button
            type="button"
            className={classes.button}
            onClick={this.props.toggleEditCard}
          >
            Edit Card
          </button>
          <button
            type="button"
            className={classes.button}
            onClick={this.props.removeCard}
          >
            Delete Card
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
