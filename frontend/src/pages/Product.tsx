import React from "react";
import { IContextValue, ShopContext } from "../App";
import { useParams } from "react-router-dom";
import ProductLinkPath from "../components/ProductLinkPath";
import { TypeItem } from "../components/Popular";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct";

type Props = {};

const Product = (props: Props) => {
  const { all_product } = React.useContext(ShopContext);

  const { productId } = useParams();
  const product =
    all_product &&
    all_product.find((e: TypeItem) => e.id === Number(productId));
  // console.log("product", product);
  return (
    <div className="product" style={{ paddingTop: "97px" }}>
      <ProductLinkPath product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
