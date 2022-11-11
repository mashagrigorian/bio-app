import { Container, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { itemData } from "./ItemData";

const Project = (props) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const data = itemData.find((i) => {
    return i.key === id;
  });

  const Areas = (props) => {
    const hasAreas = props.hasAreas;
    console.log(
      `allCurrentProject.${data.key}.allCurrentProject.${data.key.areas}`
    );
    if (hasAreas) {
      return <h5>{t(`allCurrentProject.${data.key}.areas`)}</h5>;
    }
    return null;
  };

  // const Areas = (props) => {
  //   if (`allCurrentProject.${data.key}`.hasOwnProperty("areas")) {
  //     return <h5>{t(`allCurrentProject.${data.key}.areas`)}</h5>;
  //   }
  //   return undefined;
  // };

  // const Areas = (areas) => {
  //   if (areas in `allCurrentProject.${data.key}`) {
  //     return <h5>{t(`allCurrentProject.${data.key}.areas`)}</h5>;
  //   }
  //   return undefined;
  // };

  return (
    <>
      <Container
        component={Paper}
        elevation={5}
        style={{
          padding: 25,
          marginTop: 40,
          lineHeight: "80px",
        }}
      >
        <div>
          <h3>{t(`allCurrentProject.${data.key}.currentProject`)}</h3>

          <h3>{t("projectTags")}</h3>

          <h4>{t(`allCurrentProject.${data.key}.projectTag`)}</h4>

          <h3>{t("projectFunding")}</h3>

          <h4>{t(`allCurrentProject.${data.key}.funding`)}</h4>

          <h3>{t("projectBudget")}</h3>

          <h4>{t(`allCurrentProject.${data.key}.budget`)}</h4>

          <h3>{t("projectDates")}</h3>

          <h4>{t(`allCurrentProject.${data.key}.dates`)}</h4>

          {/* <h3>{t("projectAreas")}</h3> */}

          <h4>
            <Areas />
          </h4>

          <h3>{t("projectObjective")}</h3>

          <h4>{t(`allCurrentProject.${data.key}.objective`)}</h4>

          <h3>{t("projectActivities")}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: t(`allCurrentProject.${data.key}.projectActivities`, {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <h4>{t("projectDocuments")}</h4>
        </div>
      </Container>
    </>
  );
};

export default Project;
