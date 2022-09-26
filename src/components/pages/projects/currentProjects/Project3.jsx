import { Container, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Project3 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container
      component={Paper}
      elevation={5}
      style={{ padding: 25, marginTop: 40 }}
    >
      <div>
        <b>{t("currentProject3")}</b>
        <br />
        <br />
        <h4>{t("tags")}</h4>
        {t("project3tag")}
        <br />
        <br />
        <h4>{t("funding")}</h4>
        {t("funding3")}
        <br />
        <br />
        <h4>{t("budget")}</h4>
        {t("budget3")}
        <br />
        <br />
        <h4>{t("dates")}</h4>
        {t("dates3")}
        <br />
        <br />
        <h4>{t("objective")}</h4>
        {t("objective3")}
        <br />
        <br />
        <h4>{t("projectActivities")}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: t("projectActivities3", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
        <br />
        <h4>{t("documents")}</h4>
        {t("documentsDescription")}
      </div>
    </Container>
  );
};

export default Project3;
