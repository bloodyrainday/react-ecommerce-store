import React from "react";

import "./style.scss";

import data_product from "../../assets/data";
import Item from "../Item";

type Props = {};

export type TypeItem = {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const Popular = (props: Props) => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <span className="popular__underline"></span>

      <div className="popular__item">
        {data_product.map((item: TypeItem) => {
          return <Item item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
