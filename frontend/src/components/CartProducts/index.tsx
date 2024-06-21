import React from "react";

import "./style.scss";
import { ShopContext } from "../../App";

import removeIcon from "../../assets/cart_cross_icon.png";

type Props = {};

const CartProducts = (props: Props) => {
  const { all_product, cartProducts, setCartProducts } =
    React.useContext(ShopContext);

  return (
    <div className="cartproducts">
      <div className="cartproducts__item-titles">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {cartProducts.map((item) => {
        return (
          <div>
            <div className="cartproducts__item">
              <img src={item.image} alt="cartitem-icon" />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className="cartitems-btn-quantity"></button>
              <p></p>
              <img src={removeIcon} alt="remove-icon" />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
