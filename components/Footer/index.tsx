import React from "react";

import "./style.scss";

import footerLogo from "../../assets/logo_big.png";
import instagram from "../../assets/instagram_icon.png";
import pintester from "../../assets/pintester_icon.png";
import whatsapp from "../../assets/whatsapp_icon.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="footer__links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer__socials">
        <div>
          <img src={instagram} alt="icon" />
        </div>

        <div>
          <img src={pintester} alt="icon" />
        </div>

        <div>
          <img src={whatsapp} alt="icon" />
        </div>
      </div>

      <div className="footer__copyright">
        <span></span>
        <p>Copyright @ 2024 - All right resolved</p>
      </div>
    </footer>
  );
};

export default Footer;
