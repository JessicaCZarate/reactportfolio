import React from "react";
import PHINMA from "../../assets/img/upang 2.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_container container">
        <img src={PHINMA} alt="logo" className="phinmalogo" />
        <h4 className="footer_title">Phinma- University of Pangasinan</h4>
        <h5 className="footer_subtitle">Colllege of Information Technology</h5>
      </div>
    </footer>
  );
};

export default Footer;
