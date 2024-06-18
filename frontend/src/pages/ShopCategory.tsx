import React from "react";
import { IContextValue, ShopContext } from "..";

import "./styles/ShopCategory.scss";

import dropDownIcon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

type Props = {
  category: string;
  banner: string;
};

const ShopCategory = ({ category, banner }: Props) => {
  const { all_product } = React.useContext<IContextValue>(ShopContext);
  console.log(all_product);
  return (
    <div className="shop-category">
      <img src={banner} alt="banner" />

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
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
