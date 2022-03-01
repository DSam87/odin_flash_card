import React from "react";

class CardOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.togglePopup}
        onMouseEnter={() => this.props.changeSelectedCard(this.props.keyz)}
        id="option"
      >
        =<br></br>=
      </div>
    );
  }
}

export default CardOptions;
