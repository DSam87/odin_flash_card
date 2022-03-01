import React from "react";
import classes from "../module/EditPopup.module.css";

class EditPopup extends React.Component {
  constructor(props) {
    super(props);

    this.card = this.props.cardInfo[0];
    this.state = { keyword: this.card.keyword, detail: this.card.detail };

    this.keywordUpdate = this.keywordUpdate.bind(this);
    this.detailUpdate = this.detailUpdate.bind(this);
  }

  keywordUpdate(event) {
    this.setState({ keyword: event.target.value });
  }

  detailUpdate(event) {
    this.setState({ detail: event.target.value });
  }

  render() {
    return (
      <div
        className={classes.blackBack}
        id="black"
        onClick={this.props.toggleFormPopup}
      >
        <div className={classes.card}>
          <form className={classes.form}>
            <label htmlFor="keyword">Keyword:</label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={this.state.keyword}
              onChange={this.keywordUpdate}
            ></input>
            <label htmlFor="detail">Detail:</label>
            <textarea
              type="textarea"
              rows="5"
              id="detail"
              name="detail"
              onChange={this.detailUpdate}
              value={this.state.detail}
            ></textarea>
            <input
              type="button"
              value="Edit Card"
              onClick={() =>
                this.props.returnEdit(
                  this.state.keyword,
                  this.state.detail,
                  this.props.cardInfo[0].key
                )
              }
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPopup;
