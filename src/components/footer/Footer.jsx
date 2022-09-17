import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterContacts,
  Newsletter,
} from "./Footer.styled";
import Button from "../button/Button.styled";
import logo from "../../images/logo.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";
import { GrFacebook } from "react-icons/gr";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContacts>
          <img src={logo} alt="logo" className="filter-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            explicabo facilis aspernatur, ut dolores perferendis!
          </p>
          <div>
            <img src={phone} alt="phone" />
            <span>Phone: +918700393617</span>
          </div>
          <div>
            <img src={email} alt="email" className="email" />
            <span>sunil121ml@example.com</span>
          </div>
          <ul>
            <li>
              <GrFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </FooterContacts>
        <Newsletter>
          <h2>NEWSLETTER</h2>
          <p>
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <div className="form">
            <input type="email" name="email" id="email" />
            <Button btnColor="hsl(322, 100%, 66%)" textColor="#fff">
              Subscribe
            </Button>
          </div>
        </Newsletter>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
