// import React from "react";

// import all_product from "../assets/all_product";
// import Shop from "../pages/Shop";

// export const ShopContext = React.createContext(null);

// const ShopContextProvider = (props) => {
//   const contextValue = { all_product };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React from "react";

type Props = {};

const ShopContext = (props: Props) => {
  return <div>ShopContext</div>;
};

export default ShopContext;
