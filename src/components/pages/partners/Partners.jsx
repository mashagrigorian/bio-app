import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logos from "./PartnerLogos";
import gsap from "gsap";
import { Divider, Grid } from "@mui/material";

const Partners = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const divs = document.querySelectorAll(".partners-info");
    // gsap.set(divs[1], { x: 100, opacity: 1 });

    // gsap
    //   .timeline({ defaults: { duration: 3 } })
    //   .add("three")
    //   .to(divs[0], { y: 0, x: 200, opacity: 1 }, "three")
    //   .to(divs[1], { y: 0, x: 0, opacity: 0.05 }, "three")
    //   .to(divs[2], { y: 0, x: 200, opacity: 0.05 }, "three")
    //   .to(divs[3], { y: 0, x: 0, opacity: 0.05 }, "three")
    //   .to(divs[4], { y: 0, x: 200, opacity: 0.07 }, "three")
    //   .to(divs[5], { y: 0, x: 200, opacity: 0.07 }, "three")
    //   .to(divs[6], { y: 0, x: 0, opacity: 0.07 }, "three")
    //   .to(divs[7], { y: 0, x: 200, opacity: 1.02 }, "three")
    //   .to(divs[8], { y: 0, x: 0, opacity: 1.02 }, "three");
  });

  const partnersInfo = [
    {
      href: "https://www.adaptation-fund.org/",
      key: "adaptionFund",
    },
    {
      href: "https://www.thegef.org/",
      key: "globalEnvironmentFacility",
    },
    {
      href: "https://www.greenclimate.fund/",
      key: "greenClimate",
    },
    {
      href: "https://www.unep.org/",
      key: "unitedNationsEnvProg",
    },
    {
      href: "https://www.undp.org/",
      key: "unitedNationsDevProg",
    },
    {
      href: "https://www.unido.org/",
      key: "unitedNationsInduDevOrg",
    },
    {
      href: "https://www.worldbank.org/en/home",
      key: "theWorldBank",
    },
    {
      href: "https://www.osce.org/",
      key: "orgForSec",
    },
  ];

  return (
    <div className="content">
      <div className="partners-info">
        <div
          className="container"
          style={{
            margin: "50px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            gap: "25px",
            height: "600px",
          }}
        >
          {partnersInfo.map((info) => {
            return (
              <div key={info.key}>
                <a
                  href={info.href}
                  className="partnerInfoWrapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <img
                    className="image"
                    src={logos[info.key]}
                    alt={t(info.key)}
                    style={{
                      display: "block",
                      maxWidth: "200px",
                      maxHeight: "70px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <b> {t(info.key)}</b>
                </a>
              </div>
            );
          })}
        </div>
        <Grid container spacing={10}>
          <Grid item xs={2} sm={10}>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Divider
                orientation="vertical"
                style={{ height: "100%", width: "1px" }}
              />
            </Grid>
            <Grid
              item
              xs={2}
              container
              direction="row"
              justifyContent="right"
              alignItems="center"
            ></Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Partners;
