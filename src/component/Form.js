import React from "react";
import classes from "../module/Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "", detail: "" };

    this.submitForm = this.submitForm.bind(this);
    this.keywordInputValue = this.keywordInputValue.bind(this);
    this.detailInputValue = this.detailInputValue.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    this.props.addCardState({
      keyword:
        this.state.keyword.slice(0, 1).toUpperCase() +
        this.state.keyword.slice(1),
      detail: this.state.detail,
      key: Math.random(),
    });
    this.setState({ keyword: "", detail: "" });
  }

  keywordInputValue(event) {
    this.setState({ keyword: event.target.value });
  }

  detailInputValue(event) {
    this.setState({ detail: event.target.value });
  }

  render() {
    return (
      <div className={classes.formContainer}>
        <form>
          <label htmlFor="keyword">Keyword:</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={this.state.keyword}
            onChange={this.keywordInputValue}
          ></input>
          <label htmlFor="detail">Detail:</label>
          <textarea
            type="textarea"
            rows="5"
            id="detail"
            name="detail"
            className={classes.detail}
            value={this.state.detail}
            onChange={this.detailInputValue}
          ></textarea>
          <input
            className={classes.submitInput}
            type="submit"
            value="Add Flash Card"
            onClick={this.submitForm}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;
