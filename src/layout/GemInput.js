import React, { Component } from "react";
import gemIcon from "../assets/misc/gem.png";

class GemInput extends Component {
  state = {
    errorMessage: "",
  };
  gemCheck = () => {
    if (this.props.gems % 200 !== 0 || this.props.gems === null) {
      return this.setState({
        errorMessage: "Please enter a quantity of gems divisible by 200",
      });
    } else if (this.props.gems > 500000) {
      return this.setState({
        errorMessage: "Please enter a quantity less than 500,000",
      });
    } else {
      this.props.onSubmit();
      this.setState({
        errorMessage: "",
      });
    }
  };
  render() {
    return (
      <div className="gem">
        <form>
          <label htmlFor="gem__input" className="gem__label">
            Please enter a quantity of gems then summon
          </label>
          {this.state.errorMessage && (
            <p className="gem__error">{this.state.errorMessage}</p>
          )}
          <input
            name="gem__input"
            className="gem__input"
            type="number"
            onChange={this.props.onGemChange}
            step={200}
            min={200}
            max={500000}
          ></input>
        </form>

        <button className="gem__button" onClick={this.gemCheck}>
          <span>{`${this.props.gems / 200}x Summon`}</span>
          <div className="gem__button__readout">
            <img
              className="gem__button__readout__icon"
              src={gemIcon}
              alt="Gem icon"
            />
            <p>{this.props.gems}</p>
          </div>
        </button>
      </div>
    );
  }
}

export default GemInput;
