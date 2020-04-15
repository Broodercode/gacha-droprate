import React, { Component } from "react";
import {deckA} from "../components/deckGen"

class PortDisplay extends Component {
  render() {
    let portMap;
    let value = 0;
    const d1 = deckA()
    if (this.props.sample !== null) {
  
      portMap = this.props.sample.map((i) => {
        value++;

        const chance = this.props.result[value - 1].chance.toFixed(2);

        if (i.value > 0) {
          return (
            <li className="unit__won" key={i.name}>
              <img
                className="unit__port"
                src={i.port}
                alt="Character portrait"
              />{" "}
              <span className="unit__port--valgood">{`${i.value}`}</span>
              <span className="unit__port--chancebox">{`${chance}%`}</span>
            </li>
          );
        } else if (i.value === 0) {
          return (
            <li className="unit__won" key={i.name}>
              <img
                className="unit__port"
                src={i.port}
                alt="Character portrait"
              />{" "}
              <p className="unit__port--valbad">{`${i.value}`}</p>
              <p className="unit__port--chancebox">{`${chance}%`}</p>
            </li>
          );
        } else {
          return null;
        }
      });
    } else {
      portMap = d1.map((i) => {
        return (
          <li className="unit__won" key={i.name}>
            <img
              className="unit__port"
              src={i.port}
              alt="Character portrait"
            />{" "}
            <p className="unit__port--valbad">{`${i.value}`}</p>
            <p className="unit__port--chancebox">{`0%`}</p>
          </li>
        ); 
      })
    }

    return (
      <div>
        <div className="unit__heading">
          <h2>&#8595; Units won &#8595;</h2>
        </div>

        <div>{portMap}</div>
      </div>
    );
  }
}

export default PortDisplay;
