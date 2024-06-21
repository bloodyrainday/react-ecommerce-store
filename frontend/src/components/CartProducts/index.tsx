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
              <img
                className="cartproducts__icon"
                src={item.image}
                alt="cartitem-icon"
              />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className="cartproducts__btn-quantity">0</button>
              <p>$10</p>
              <img
                className="cartproducts__remove-icon"
                src={removeIcon}
                alt="remove-icon"
              />
            </div>
            <hr />
          </div>
        );
      })}

      <div className="cartproducts__down">
        <div className="cartproducts__total-list">
          <p>cart Totals</p>
          <div>
            <div className="cartproducts__total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>

            <hr />

            <div className="cartproducts__total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="cartproducts__total-item">
              <p>Total</p>
              <p>${0}</p>
            </div>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartproducts__promocode">
          <p>if you have a promocode, enter it here</p>
          <div className="cartproducts__promobox">
            <input type="text" placeholder="promo code" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
