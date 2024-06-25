import React from "react";

import "./style.scss";

import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";

// import { IContextValue } from "../../index";

type Props = {};

const Navbar = (props: Props) => {
  const { cartItems } = React.useContext(ShopContext);
  // // console.log(all_product);
  const [isLinkClicked, setIsLinkClicked] = React.useState(0);

  const clickLink = (number: number) => {
    setIsLinkClicked(number);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link
          to="/"
          onClick={() => {
            clickLink(0);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </Link>
      </div>

      <ul className="navbar__menu">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <li onClick={() => clickLink(0)}>
            shop{isLinkClicked === 0 && <span></span>}
          </li>
        </Link>

        <Link to="/men" onClick={() => window.scrollTo(0, 0)}>
          <li onClick={() => clickLink(1)}>
            men{isLinkClicked === 1 && <span></span>}
          </li>
        </Link>

        <Link to="/women" onClick={() => window.scrollTo(0, 0)}>
          <li onClick={() => clickLink(2)}>
            women
            {isLinkClicked === 2 && <span></span>}
          </li>
        </Link>

        <Link to="/kids" onClick={() => window.scrollTo(0, 0)}>
          <li onClick={() => clickLink(3)}>
            kids{isLinkClicked === 3 && <span></span>}
          </li>
        </Link>
      </ul>

      <div className="navbar__login">
        <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
          <button>login</button>
        </Link>
        <div className="navbar__cart">
          <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
            <img src={cartIcon} alt="cart-icon" />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
