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

  return (
    <>
      <Container
        component={Paper}
        elevation={5}
        style={{
          padding: 25,
          marginTop: 40,
          lineHeight: "400%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 8,
            top: 30,
            background: "green",
          }}
        ></div>
        <div>
          <h4>{t("projectTags")}</h4>
          {/* {t("allCurrentProject.project1.currentProject")} */}
          {itemData.filter((project) => {
            <div>{t(`allCurrentProject.${project.key}.projectTag`)}</div>;
          })}

          <h4>{t("projectFunding")}</h4>

          <h4>{t("projectBudget")}</h4>

          <h4>{t("projectDates")}</h4>

          <h4>{t("projectAreas")}</h4>

          <h4>{t("projectObjective")}</h4>

          <h4>{t("projectActivities")}</h4>

          <h4>{t("projectDocuments")}</h4>
        </div>
      </Container>
    </>
  );
};

export default Project;
