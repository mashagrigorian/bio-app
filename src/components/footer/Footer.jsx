import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import "./footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer" id="login">
      <div className="footer-links">
        <div className="footer-links-contact">
          <h1 className="footer-text">{t("contactWithUs")}</h1>
          <div className="icon">
            <i className="fa fa-location-dot"></i>
            <label htmlFor=""> {t("street")}</label>
          </div>
          <div className="icon">
            <i className="fa fa-phone"></i>
            <label htmlFor=""> +374 10 651-631</label>
          </div>
          <div className="icon">
            <i className="fa fa-envelope"></i>
            <label htmlFor="/"> info@cep.am antifraud@epiu.am</label>
          </div>
        </div>
        <div className="footer-links-logo">
          <div className="footer-links-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p className="p-opensans">{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
