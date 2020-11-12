import React from "react";
import "./footer.styles.css";
import logo from '../../assets/AKTURK.svg';

const FooterPanel = () => {
  return (
    <div className="footer">
      <div className="py-2 text-center footer-style"><strong><i>Created by</i>&nbsp;<img className="logo" src={logo} alt='My Portfolio Logo' /></strong></div>
    </div>
  );
};

export default FooterPanel;