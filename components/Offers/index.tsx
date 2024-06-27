import React from "react";

import "./style.scss";

import exclusiveImage from "../../assets/exclusive_image.png";

type Props = {};

const Offers = (props: Props) => {
  return (
    <div className="offers">
      <div className="offers__left">
        <h2>Exclusive</h2>
        <h2>Offers for you</h2>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers__right">
        <img src={exclusiveImage} alt="exclusive-img" />
      </div>
    </div>
  );
};

export default Offers;
