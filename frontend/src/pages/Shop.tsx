import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Offers from "../components/Offers";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div>
      <Banner />
      <Popular />
      <Offers />
    </div>
  );
};

export default Shop;
