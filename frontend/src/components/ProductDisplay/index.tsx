import React from "react";
import { TypeItem } from "../Popular";

import startIcon from "../../assets/star_icon.png";
import starDullIcon from "../../assets/star_dull_icon.png";

import "./style.scss";

type Props = {
  product: TypeItem | undefined;
};

const ProductDisplay = ({ product }: Props) => {
  return (
    <div className="product-display">
      <div className="product-display__left">
        <div className="product-display__images">
          <img src={product?.image} alt="img" />
          <img src={product?.image} alt="img" />
          <img src={product?.image} alt="img" />
          <img src={product?.image} alt="img" />
        </div>

        <div className="product-display__main-img">
          <img src={product?.image} alt="img" />
        </div>
      </div>

      <div className="product-display__right">
        <h2>{product?.name}</h2>
        <div className="product-display__rating">
          <img src={starDullIcon} alt="img" />
          <img src={starDullIcon} alt="img" />
          <img src={starDullIcon} alt="img" />
          <img src={starDullIcon} alt="img" />
          <img src={starDullIcon} alt="img" />
          <p>(132)</p>
        </div>

        <div className="product-display__prices">
          <div className="product-display-price-old">${product?.old_price}</div>
          <div className="product-display-price-new">${product?.new_price}</div>
        </div>

        <div className="product-display__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quae
          adipisci quisquam, voluptatum assumenda ipsam id sit numquam tempore
          quod omnis, in quos voluptatem necessitatibus voluptate est nemo
          aperiam culpa.
        </div>

        <div className="product-display__size">
          <h2>Select Size</h2>
          <div className="product-display__sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button>add to cart</button>
        <p className="product-display__category">
          <span>Category:</span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display__category">
          <span>Tags:</span>Modern, Lates
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
