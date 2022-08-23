import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";

const Project1 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
        <b>{t("currentProject1")}</b>

        <br />
        <br />
        <h4>{t("tags")}</h4>
        {/* {t("project1tag")} */}
        <div
          dangerouslySetInnerHTML={{
            __html: t("project1tag", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
        <br />
        <br />
        <h4>{t("funding")}</h4>
        {t("funding1")}
        <br />
        <br />
        <h4>{t("budget")}</h4>
        {t("budget1")}
        <br />
        <br />
        <h4>{t("dates")}</h4>
        {t("dates1")}
        <br />
        <br />
        <h4>{t("areas")}</h4>
        {t("areas1")}
        <br />
        <br />
        <h4>{t("objective")}</h4>
        {t("objective1")}
        <br />
        <br />
        <h4>{t("projectActivities")}</h4>
        {/* {t("projectActivities1")} */}
        <div
          dangerouslySetInnerHTML={{
            __html: t("projectActivities1", {
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

export default Project1;
