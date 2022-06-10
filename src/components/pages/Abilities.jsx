import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

const Abilities = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <div className="abilities">
          <div
            dangerouslySetInnerHTML={{
              __html: t("outCapabilities", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <div className="abilities-images">
            <ul
              style={{
                margin: "25px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <li>
                <span>
                  <b> {t("mineral-resources")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/6502/6502964.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("land-resources")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn3.iconfinder.com/data/icons/science-116/64/Biology-natural-science-organism-physical-512.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("water-resources")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/1073/1073086.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("atmosphere")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/1741/1741986.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("biodiversity")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/1233/1233855.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("protected-areas")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/2201/2201544.png"
                />
              </li>
              <li>
                <span>
                  <b>{t("natural-resources")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://cdn-icons-png.flaticon.com/512/4462/4462955.png"
                />
              </li>
              <li>
                <span>
                  <b> {t("environment")}</b>
                </span>
                <br />
                <img
                  className="our-abilities-images"
                  src="https://lozanoisla.com/logo.png"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="abilities">
          <div
            dangerouslySetInnerHTML={{
              __html: t("abilities", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Abilities;
