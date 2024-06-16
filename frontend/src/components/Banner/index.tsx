import React from "react";

import "./style.scss";

import handIcon from "../../assets/hand_icon.png";
import arrowIcon from "../../assets/arrow.png";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner">
      <div className="banner__left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="banner__hand">
            <p>new</p>
            <img src={handIcon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="banner__latest">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="hero-icon" />
        </div>
      </div>

      <div className="banner__right"></div>
    </div>
  );
};

export default Banner;
