import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Paper } from "@mui/material";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container component={Paper} elevation={5} style={{ padding: 25 }}>
      <img
        src="https://cdn.unenvironment.org/s3fs-public/styles/article_billboard_image/public/2019-08/countryside-2326787_1920.jpg?itok=45Cf7I6D"
        style={{ width: 1150 }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: t("ourHistory", { interpolation: { escapeValue: false } }),
        }}
      />
    </Container>
  );
};

export default About;
