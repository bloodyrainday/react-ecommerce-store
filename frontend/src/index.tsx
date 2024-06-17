import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import all_product from "./assets/all_product";
import { TypeItem } from "./components/Popular";

export interface IContextValue {
  all_product: Array<TypeItem>;
}

export const ShopContext = React.createContext<IContextValue>({ all_product });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContext.Provider value={{ all_product }}>
        <App />
      </ShopContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
