import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useTranslation } from "react-i18next";
import projects from "./CurrentProjectsImages";
import { Link } from "react-router-dom";
import { itemData } from "./ItemData";

function CurrentProjects() {
  const { t, i18n } = useTranslation();

  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" style={{ textAlign: "center" }}>
          {t("currentProjects")}
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <Link to={"/projects/current-projects/" + item.key}>
          <ImageListItem
            key={item.img}
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 30,
                background: "green",
              }}
            >
              <div>{t(`allCurrentProject.${item.key}.funding`)}</div>
            </div>
            <div
              style={{
                position: "absolute",
                right: 10,
                top: 70,
                background: "green",
              }}
            >
              <div>{t(`allCurrentProject.${item.key}.projectTag`)}</div>
            </div>
            <img
              style={{
                float: "left",
                width: "870px",
                height: "500px",
                objectFit: "cover",
              }}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
            <div
              style={{
                position: "absolute",
                left: 8,
                bottom: 30,
                background: "green",
              }}
            >
              <div>{t(`allCurrentProject.${item.key}.currentProject`)}</div>
            </div>
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default CurrentProjects;
