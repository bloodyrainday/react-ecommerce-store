import React from "react";

import "./style.scss";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <div className="newsletter">
      <h2>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h2>
      <p>Subscribe to our newsletter and stay updated</p>

      <div className="newsletter__emailform">
        <input type="email" placeholder="your email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
