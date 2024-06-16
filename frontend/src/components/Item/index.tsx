import React from "react";

import "./style.scss";

type Props = {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const Item = ({ image, name, new_price, old_price }: Props) => {
  return (
    <div className="item">
      <img src={image} alt="item-img" />
      <p>{name}</p>
      <div className="item__prices">
        <span className="item__price-new">{new_price}</span>
        <span className="item__price-old">{old_price}</span>
      </div>
    </div>
  );
};

export default Item;
