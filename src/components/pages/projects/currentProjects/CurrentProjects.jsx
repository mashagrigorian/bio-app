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
    <ImageList
      gap={12}
      sx={{
        mb: 8,
        gridTemplateColumns: "repeat(auto-fill, minmax(600px, 2fr))!important",
      }}
    >
      <ImageListItem key="Subheader">
        <ListSubheader component="div" style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "80px", fontStyle: "italic" }}>
            {t("currentProjects")}
          </h1>
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
                background: "white",
                opacity: "0.70",
                color: "black",
              }}
            >
              <div>{t(`allCurrentProject.${item.key}.funding`)}</div>
            </div>
            <div
              style={{
                position: "absolute",
                right: 10,
                top: 70,
                background: "white",
                opacity: "0.70",
                color: "black",
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
                left: 2,
                bottom: 30,
                background: "white",
                opacity: "0.70",
                color: "black",
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
