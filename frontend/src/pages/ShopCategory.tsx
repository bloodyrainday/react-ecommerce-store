import React from "react";
import { IContextValue, ShopContext } from "../App";

import "./styles/ShopCategory.scss";

import dropDownIcon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

type Props = {
  category: string;
  banner: string;
};

const ShopCategory = ({ category, banner }: Props) => {
  const { all_product } = React.useContext(ShopContext);

  console.log("usecontext", all_product);
  return (
    <div className="shop-category">
      <img className="shop-category__banner" src={banner} alt="banner" />

      <div className="shop-category__indexSort">
        <p>
          <span>Show 1-12</span> out of 36 products
        </p>

        <div className="shop-category__sort">
          Sort by <img src={dropDownIcon} alt="drop-down-icon" />
        </div>
      </div>

      <div className="shop-category__products">
        {all_product.map((item) => {
          if (item.category === category) {
            return <Item item={item} key={item.id} />;
          }
          return null;
        })}
      </div>

      <div className="shop-category__loadmorebtn">explore more</div>
    </div>
  );
};

export default ShopCategory;
