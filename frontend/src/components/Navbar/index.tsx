import React from "react";

import "./style.scss";

import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [isLinkClicked, setIsLinkClicked] = React.useState(0);

  const clickLink = (number: number) => {
    setIsLinkClicked(number);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </Link>
      </div>

      <ul className="navbar__menu">
        <Link to="/">
          <li onClick={() => clickLink(0)}>
            shop{isLinkClicked === 0 && <span></span>}
          </li>
        </Link>

        <Link to="/men">
          <li onClick={() => clickLink(1)}>
            men{isLinkClicked === 1 && <span></span>}
          </li>
        </Link>

        <Link to="/women">
          <li onClick={() => clickLink(2)}>
            women
            {isLinkClicked === 2 && <span></span>}
          </li>
        </Link>

        <Link to="/kids">
          <li onClick={() => clickLink(3)}>
            kids{isLinkClicked === 3 && <span></span>}
          </li>
        </Link>
      </ul>

      <div className="navbar__login">
        <Link to="/login">
          <button>login</button>
        </Link>
        <div className="navbar__cart">
          <Link to="/cart">
            <img src={cartIcon} alt="cart-icon" />
            <span>0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
