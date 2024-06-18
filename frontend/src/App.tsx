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

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
