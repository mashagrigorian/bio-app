import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="about">{t("ourHistory")}</div>
    </>
  );
};

export default About;
