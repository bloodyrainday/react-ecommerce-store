import React from "react";

import "./style.scss";

import { TypeItem } from "../Popular";

type Props = {
  item: TypeItem;
};

const Item = ({ item }: Props) => {
  return (
    <div className="item">
      <img src={item.image} alt="item-img" />
      <p>{item.name}</p>
      <div className="item__prices">
        <span className="item__price-new">${item.new_price}</span>
        <span className="item__price-old">${item.old_price}</span>
      </div>
    </div>
  );
};

export default Item;
