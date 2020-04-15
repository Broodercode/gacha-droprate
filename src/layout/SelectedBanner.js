import React, { Component } from "react";

class SelectedBanner extends Component {
  bannerToggle = () => {
    if (this.props.banner === null) {
      return <h1 className="main__deck--noselect">&#8592; Please select a banner</h1>;
    } else {
      return (
        <img
          className="main__deck--select"
          alt="Selected Banner"
          src={this.props.banner}
        ></img>
      );
    }
  };
  render() {
    return <div>{this.bannerToggle()}</div>;
  }
}

export default SelectedBanner;
