import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const Project6 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
        <b>{t("currentProject6")}</b>
        <br />
        <br />
        <h4>{t("tags")}</h4>
        {t("project6tag")}
        <br />
        <br />
        <h4>{t("funding")}</h4>
        {t("funding6")}
        <br />
        <br />
        <h4>{t("budget")}</h4>
        {t("budget6")}
        <br />
        <br />
        <h4>{t("dates")}</h4>
        {t("dates6")}
        <br />
        <br />
        <h4>{t("areas")}</h4>
        {t("areas6")}
        <br />
        <br />
        <h4>{t("objective")}</h4>
        {t("objective6")}
        <br />
        <br />
        <h4>{t("projectActivities")}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: t("projectActivities6", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
        <br />
        <br />
        <h4>{t("documents")}</h4>
        {t("documentsDescription")}
      </div>
    </Container>
  );
};

export default Project6;
