import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <Banner />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
