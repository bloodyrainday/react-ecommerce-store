import React from "react";

import "./style.scss";

import arrow_icon from "../../assets/breadcrum_arrow.png";
import { TypeItem } from "../Popular";
import { IContextValue } from "../..";

type Props = {
  product: TypeItem | undefined;
};

const ProductLinkPath = ({ product }: Props) => {
  return (
    <div className="productlinkpath">
      HOME <img src={arrow_icon} alt="arrow-icon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow-icon" /> {product?.category}{" "}
      <img src={arrow_icon} alt="arrow-icon" /> {product?.name}
    </div>
  );
};

export default ProductLinkPath;
