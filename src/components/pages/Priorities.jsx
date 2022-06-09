import React from "react";
import { useTranslation } from "react-i18next";

const Priorities = () => {
  const { t, i18n } = useTranslation();

  return <div className="priorities">{t("our-priorities")}</div>;
};

export default Priorities;
