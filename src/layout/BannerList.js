import React, { Component } from "react";
import ban2 from "../assets/banner/ban7.png";
import ban1 from "../assets/banner/ban6.PNG";
import ban3 from "../assets/banner/ban8.PNG";


class BannerList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <h1>Select a banner</h1>
          <img
            name="ban1"
            className="banner__button--img"
            onClick={this.props.onBannerSubmit}
            alt="banner 1"
            src={ban1}
          ></img>
          <img
            name="ban2"
            className="banner__button--img"
            onClick={this.props.onBannerSubmit}
            alt="banner 2"
            src={ban2}
          ></img>
          {/* <img
            name="ban3"
            className="banner__button--img"
            onClick={this.props.onBannerSubmit}
            alt="banner 3"
            src={ban3}
          ></img> */}
          {/* <button className='banner__button'><img name='ban4' onClick={this.onBannerSubmit} alt="banner 4"  src={ban4}></img></button> 
          <button className='banner__button'><img name='ban5' onClick={this.onBannerSubmit} alt="banner 5"  src={ban5}></img></button> 
          <button className='banner__button'><img name='ban6' onClick={this.onBannerSubmit} alt="banner 6"  src={ban6}></img></button>  */}
        </div>
        <div className="banner__ad"></div>
      </div>
    );
  }
}

export default BannerList;
