import React from "react";
import { IContextValue, ShopContext } from "..";
import { useParams } from "react-router-dom";
import ProductLinkPath from "../components/ProductLinkPath";
import { TypeItem } from "../components/Popular";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";

type Props = {};

const Product = (props: Props) => {
  const { all_product } = React.useContext<IContextValue>(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log("product", product);
  return (
    <div className="product">
      <ProductLinkPath product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
};

export default Product;
