import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const Project2 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
        {t("currentProject2")}
        <br />
        <br />
        <h3>{t("tags")}</h3>
        <h2>{t("project2tag")}</h2>
        <br />
        <h3>{t("funding")}</h3>
        <h3>{t("funding2")}</h3>
        <br />
        <h3>{t("budget")}</h3>
        <h3>{t("budget2")}</h3>
        <br />
        <h3>{t("dates")}</h3>
        <h3>{t("dates2")}</h3>
        <br />
        <h3>{t("areas")}</h3>
        <h3>{t("areas2")}</h3>
        <br />
        <h3>{t("objective")}</h3>
        <h3>{t("objective2")}</h3>
        <br />
        <h3>{t("projectActivities")}</h3>
        <h3>{t("projectActivities2")}</h3>
        <br />
        <h3>{t("documents")}</h3>
        <h3>{t("documentsDescription")}</h3>
      </div>
    </Container>
  );
};

export default Project2;
