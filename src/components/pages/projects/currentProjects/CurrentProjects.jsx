import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { itemData } from "./ItemData";
import { Container, Paper, Grid } from "@mui/material";

const CurrentProjects = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container
        component={Paper}
        elevation={10}
        style={{
          padding: 25,
          marginTop: 60,
        }}
      >
        <ImageList
          gap={20}
          sx={{
            mb: 8,
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {itemData.map((item) => (
            <Link to={"/projects/current-projects/" + item.key}>
              <ImageListItem
                key={item.img}
                style={{
                  position: "relative",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    left: 7,
                    top: 5,
                    background: "white",
                    opacity: "0.70",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "3px",
                  }}
                >
                  <div>{t(`allCurrentProject.${item.key}.funding`)}</div>
                </div> */}
                <div
                  style={{
                    position: "absolute",
                    left: 7,
                    top: 5,
                    background: "white",
                    opacity: "0.70",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "3px",
                    padding: "3px 5px",
                  }}
                >
                  <div>{t(`allCurrentProject.${item.key}.projectTag`)}</div>
                </div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                  }}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 7,
                    bottom: 30,
                    background: "white",
                    opacity: "0.70",
                    color: "black",
                    borderRadius: "3px",
                    fontWeight: "bold",
                    padding: "3px 5px",
                  }}
                >
                  <div>{t(`allCurrentProject.${item.key}.currentProject`)}</div>
                </div>
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default CurrentProjects;

// sx={
//   {
//     mb: 8,
//     gridTemplateColumns: "repeat(auto-fill, minmax(600px, 3fr))!important",
//   }
// }

{
  /* <ImageListItem key="Subheader">
        <ListSubheader component="div" style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "80px", fontStyle: "italic" }}>
            {t("currentProjects")}
          </h1>
        </ListSubheader>
      </ImageListItem> */
}
