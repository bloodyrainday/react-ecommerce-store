import React from "react";

import "./style.scss";

type Props = {
  image: string;
  name: string;
};

const Item = ({ image, name }: Props) => {
  return (
    <div className="item">
      <img src={image} alt="item-img" />
      <p>{name}</p>
      <div className="item__prices"></div>
    </div>
  );
};

export default Item;
