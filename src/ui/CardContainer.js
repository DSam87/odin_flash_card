import React from "react";
import "./CardContainer.css";

class CardContianer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div hover className="Card">
        {this.props.children}
      </div>
    );
  }
}

export default CardContianer;
