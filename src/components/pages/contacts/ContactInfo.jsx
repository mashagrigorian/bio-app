import React from "react";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer" id="login">
      <div className="footer-links">
        <div className="footer-links-contact">
          <div className="icon">
            <h5>{t("contacts")}</h5>
            <i className="fa fa-phone"></i>
            <label htmlFor=""> +374 10 999-999</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="/"> info@99.am </label>
          </div>
        </div>
        <div className="footer-links-logo">
          <div className="footer-links-icons">
            <a>
              <FiFacebook />
            </a>
            <a>
              <FiLinkedin />
            </a>
            <a>
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
