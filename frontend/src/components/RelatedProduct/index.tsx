import React from "react";

import "./style.scss";

import data_product from "../../assets/data";
import Item from "../Item";

type Props = {};

const RelatedProduct = (props: Props) => {
  return (
    <div className="relatedproduct">
      <h2>Related Products</h2>
      <hr />
      <div className="relatedproduct__item">
        {data_product.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
