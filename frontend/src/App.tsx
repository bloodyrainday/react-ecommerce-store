import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import menBanner from "./assets/banner_mens.png";
import womenBanner from "./assets/banner_women.png";
import kidsBanner from "./assets/banner_kids.png";

import all_product from "./assets/all_product";
import { TypeItem } from "./components/Popular";

export interface IContextValue {
  all_product: Array<TypeItem>;
  cartItems: Array<TypeItem>;
  setCartProducts: React.Dispatch<React.SetStateAction<TypeItem[]>>;
}

export const ShopContext = React.createContext({} as IContextValue);

function App() {
  const [cartItems, setCartProducts] = React.useState<Array<TypeItem>>([]);

  return (
    <div className="app">
      <ShopContext.Provider value={{ all_product, cartItems, setCartProducts }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={menBanner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={womenBanner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kidsBanner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
