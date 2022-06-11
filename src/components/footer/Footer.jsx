import React from "react";
import { useTranslation } from "react-i18next";

import "./footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer" id="login">
      {/* <div className="footer-links"> */}
      <div className="footer-links-contact">
        <div className="icons">
          <i className="fa fa-location-dot"></i>
          <label htmlFor=""> {t("street")}</label>
          <i className="fa fa-phone"></i>
          <label htmlFor=""> +374 10 651-631</label>
          <i className="fa fa-envelope"></i>
          <label htmlFor="/"> info@cep.am antifraud@epiu.am</label>
          <label htmlFor=""> {t("copyright")}</label>
        </div>
        {/* </div> */}
      </div>

      {/* <div className="footer-copyright">
        <p className="p-opensans">{t("copyright")}</p>
      </div> */}
    </div>
  );
};

export default Footer;
