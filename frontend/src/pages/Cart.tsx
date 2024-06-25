import React from "react";
import CartProducts from "../components/CartProducts";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div style={{ paddingTop: "97px" }}>
      <CartProducts />
    </div>
  );
};

export default Cart;
