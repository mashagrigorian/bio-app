import React from "react";
import adaptionFundLogo from "./logos/adaptionFond.png";
import greenClimateLogo from "./logos/greenClimate.png";
import { useTranslation } from "react-i18next";
import { Container, Divider, Grid } from "@mui/material";

const Accreditations = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          justifyItems: "center",
          textAlign: "center",
          columnGap: "60px",
          marginTop: "10%",
        }}
      >
        <div
          className="logo-style"
          style={{
            display: "block",
            marginTop: "70px",
            height: "auto",
            maxWidth: "100%",
          }}
        >
          <a
            target="_blank"
            href="https://www.greenclimate.fund/countries/armenia"
          >
            <img src={greenClimateLogo} />
          </a>
        </div>
        <div
          className="logo-style"
          style={{
            display: "block",
            marginTop: "100px",
            width: "100%",
          }}
        >
          <a
            target="_blank"
            href="https://www.adaptation-fund.org/ie/environmental-project-implementation-unit-epiu/"
          >
            <img style={{ width: "100%" }} src={adaptionFundLogo} />
          </a>
        </div>

        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: t("accreditationsGreenClimate", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <Grid item sx={{ pt: 1 }}>
            <Divider
              orientation="vertical"
              style={{ height: "100%", width: "1px" }}
            />
          </Grid>
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutGreenClimate", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: t("accreditationsAdaptationFund", {
                interpolation: { escapeValue: false },
              }),
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutAdaptionFund", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Accreditations;
