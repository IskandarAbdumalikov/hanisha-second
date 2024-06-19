import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logoIskandar.svg";
import instagram from "../../../assets/images/instagramFooter.svg";
import facebook from "../../../assets/images/facebookFooter.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer__top container">
        <div className="footer__left__list">
          <Link>ALL PRODUCTS</Link>
          <Link>ABOUT SEEDRA</Link>
          <Link className="no-border">OUR BLOG</Link>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__right__list">
          <Link>Terms&Conditions</Link>
          <Link className="no-border">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer__bottom container">
        <div className="footer__bottom__left">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="footer__bottom__right">
          <Link>All rights reserved</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
