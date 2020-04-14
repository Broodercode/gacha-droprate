import React, { Component } from "react";

class DeckResults extends Component {
  render() {
    const results = this.props.result.map((i) => {
      let chance = i.chance;

      if (i.grade) {
        return (
          <li key={i.grade} className="grade__item">
            <h1 className="grade__name">{i.grade}</h1>
            <p className="grade__percent">{chance}%</p>
          </li>
        );
      } else {
        return null;
      }
    });

    return <div>{results}</div>;
  }
}

export default DeckResults;
