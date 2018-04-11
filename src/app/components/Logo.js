import React from "react";
import logo from "../../assets/images/Logo.svg";
import "../../assets/css/components/Logo.css";

const Logo = () => (
  <div className="logo-wrapper">
    <img src={logo} className="logo-main" alt="logo" />
  </div>
);

export default Logo;
