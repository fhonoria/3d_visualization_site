import React from "react";
import "./Footer.css";
import logo from "../photos/Logo_white.png";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt={logo}></img>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <a href="tel:004916212345678">
                <BsIcons.BsTelephone className="icons" />
              </a>
              <a href="mailto:juhasz.sandor.1988@gmail.com">
                <GoIcons.GoMail className="icons" />
              </a>
              <a
                href="https://www.instagram.com/v_h_i_s_3d"
                target="_blank"
                rel="noreferrer"
              >
                <FaIcons.FaInstagram className="icons" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
