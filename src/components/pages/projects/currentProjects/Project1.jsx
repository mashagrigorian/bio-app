import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const Project1 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
        {t("currentProject1")}
        <br />
        <br />
        <h3>{t("tags")}</h3>
        <h3>{t("project1tag")}</h3>
        <br />
        <h3>{t("funding")}</h3>
        <h3>{t("funding1")}</h3>
        <br />
        <h3>{t("budget")}</h3>
        <h3>{t("budget1")}</h3>
        <br />
        <h3>{t("dates")}</h3>
        <h3>{t("dates1")}</h3>
        <br />
        <h3>{t("areas")}</h3>
        <h3>{t("areas1")}</h3>
        <br />
        <h3>{t("objective")}</h3>
        <h3>{t("objective1")}</h3>
        <br />
        <h3>{t("projectActivities")}</h3>
        <h3>{t("projectActivities1")}</h3>
        <br />
        <h3>{t("documents")}</h3>
        <h3>{t("documentsDescription")}</h3>
      </div>
    </Container>
  );
};

export default Project1;
