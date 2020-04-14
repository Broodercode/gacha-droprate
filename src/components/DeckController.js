import React, { Component } from "react";
import { finalResult, sampleDraw, sample } from "./deckStats";
import { deckA, deckB } from "./deckGen";
import PortDisplay from "../layout/PortDisplay";
import BannerList from "../layout/BannerList";
import SelectedBanner from "../layout/SelectedBanner";
import DeckResults from "../layout/DeckResults";
import GemInput from "../layout/GemInput";
import ban2 from "../assets/banner/ban7.png";
import ban1 from "../assets/banner/ban6.PNG";

let sd = sampleDraw;

const d1 = deckA();
const d2 = deckB();

class DeckController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gems: null,
      sample: null,
      deck: [],
      banner: null,
      result: [],
    };
    this.onGemChange = this.onGemChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBannerSubmit = this.onBannerSubmit.bind(this);
  }
  onSubmit() {
    try {
      if (this.state.deck.length === 0)
        throw new Error("Please select a banner");
    } catch (err) {
      return alert(err);
    }
    let deck = [...this.state.deck];
    deck.forEach((i) => {
      i.neg = 0;
      i.pos = 0;
    });
    let result = [...this.state.result];
    if (result.length > 0) {
      result[0].total = 0;
      result[0].pos = 0;
      result[0].neg = 0;
      result[0].chance = 0;
      result.forEach((i) => {
        i.pos = 0;
        i.neg = 0;
      });
    }

    sample(1000, this.state.gems, this.state.deck);

    this.setState({
      sample: sampleDraw,
      result: finalResult,
      deck: deck,
    });
  }
  sampleList() {
    sd.map((i) => {
      return (
        <li key={i.name}>
          <img src={i.port} alt="character portrait" />{" "}
          {`Name: ${i.name} Value: ${i.value}`}
        </li>
      );
    });
  }

  onBannerSubmit(e) {
    let d = e.target.name;

    if (d === "ban1") {
      this.setState({
        deck: d1,
        banner: ban1,
        sample: null,
        result: [],
      });
    } else if (d === "ban2") {
      this.setState({
        deck: d2,
        banner: ban2,
        sample: null,
        result: [],
      });
    }
  }
  onGemChange(e) {
    this.setState({
      gems: e.target.value,
    });
  }
  render() {
    return (
      <div className="row">
        <div className="section-leftside">
        <div className="col-1-of-3">
          <div className="leftside">
          <div className="banner">
            <ul>
              <BannerList onBannerSubmit={this.onBannerSubmit} />
            </ul>
          </div>
           
            <div className="leftside__ad"></div>
           
          </div>
        </div>
        </div>
 
        <div className="section-center">
        <div className="col-1-of-3">
        <div className="center">
            <div className="center__deck">
              <SelectedBanner banner={this.state.banner} />
              {/* <img className="main__select" onClick={this.props.onBannerSubmit} alt="Selected Banner"  src={this.state.banner}></img> */}
            </div>

            <div className="center__input">
              <GemInput
                gems={this.state.gems}
                onGemChange={this.onGemChange}
                onSubmit={this.onSubmit}
              />
            </div>
            <div>
              <ul>
                <PortDisplay
                  sample={this.state.sample}
                  result={this.state.deck}
                />
              </ul>
            </div>
          </div>
        </div>
        </div>
      <div className="section-rightside">
      <div className="col-1-of-3">
        <div className="rightside">
        <h2 className="u-margin-top-small">
              Note: Each time you submit for a result the server is doing an
              additional 1000 rolls behind the scenes to calculate the
              percentages. The percentage result vary because they are
              calculated in real time with very small numbers.
            </h2>
            <br />
            <h3>
              Note: Gem cap is for the app is 500,000 because the ratio hits
              ~99% for individual URs.
            </h3>
            <div className="rightside__ad"></div>
            <div className="grade">
              <DeckResults result={this.state.result} />
            </div>
        </div>
 
        </div>
      </div>
   
      </div>
    );
  }
}

export default DeckController;
