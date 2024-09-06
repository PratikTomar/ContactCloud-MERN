import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-copyright">
        Copyright 2024 | All rights reserved
      </section>
      <section className="footer-social-icons">
        <Link to="#" aria-label="Facebook" className="footer-icon-link">
          <BsFacebook />
        </Link>
        <Link to="#" aria-label="LinkedIn" className="footer-icon-link">
          <BsLinkedin />
        </Link>
        <Link to="#" aria-label="Instagram" className="footer-icon-link">
          <BsInstagram />
        </Link>
        <Link to="#" aria-label="Twitter" className="footer-icon-link">
          <BsTwitter />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
