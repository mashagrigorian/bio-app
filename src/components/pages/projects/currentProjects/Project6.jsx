import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const Project6 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
        {t("currentProject6")}
        <br />
        <br />
        <h3>{t("tags")}</h3>
        <h2>{t("project6tag")}</h2>
        <br />
        <h3>{t("funding")}</h3>
        <h3>{t("funding6")}</h3>
        <br />
        <h3>{t("budget")}</h3>
        <h3>{t("budget6")}</h3>
        <br />
        <h3>{t("dates")}</h3>
        <h3>{t("dates6")}</h3>
        <br />
        <h3>{t("areas")}</h3>
        <h3>{t("areas6")}</h3>
        <br />
        <h3>{t("objective")}</h3>
        <h3>{t("objective6")}</h3>
        <br />
        <h3>{t("projectActivities")}</h3>
        <h3>{t("projectActivities6")}</h3>
        <br />
        <h3>{t("documents")}</h3>
        <h3>{t("documentsDescription")}</h3>
      </div>
    </Container>
  );
};

export default Project6;
