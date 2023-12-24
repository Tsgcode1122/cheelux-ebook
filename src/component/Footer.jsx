// Footer.jsx
import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <h2>Get in Touch</h2>
      <ul className="social-icons">
        <li className="insta">
          <a
            href="https://www.instagram.com/chee_lux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="whats">
          <a
            href="https://api.whatsapp.com/send?phone=2349127850605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li className="email">
          <a href="mailto:cheeluxstore@gmail.com">
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <p>Copyright &copy; 2023 Cheelux | All right Reserved </p>
    </section>
  );
};

export default Footer;
