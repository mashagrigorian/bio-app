import React from "react";
import { useTranslation } from "react-i18next";

const Abilities = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="abilities">
        <span>{t("outCapabilities")}</span>
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
              <span>{t("mineral-resources")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/6502/6502964.png"
              />
            </li>
            <li>
              <span>{t("land-resources")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn3.iconfinder.com/data/icons/science-116/64/Biology-natural-science-organism-physical-512.png"
              />
            </li>
            <li>
              <span>{t("water-resources")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/1073/1073086.png"
              />
            </li>
            <li>
              <span>{t("atmosphere")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/1741/1741986.png"
              />
            </li>
            <li>
              <span>{t("biodiversity")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/1233/1233855.png"
              />
            </li>
            <li>
              <span>{t("protected-areas")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/2201/2201544.png"
              />
            </li>
            <li>
              <span>{t("natural-resources")}</span>
              <br />
              <img
                className="our-abilities-images"
                src="https://cdn-icons-png.flaticon.com/512/4462/4462955.png"
              />
            </li>
            <li>
              <span>{t("environment")}</span>
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
        <span>{t("abilities")}</span>
        <ol>
          <li>
            <span>{t("point-one")}</span>
          </li>
          <li>
            <span>{t("point-two")}</span>
          </li>
          <li>
            <span>{t("point-three")}</span>
          </li>
          <li>
            <span>{t("point-four")}</span>
          </li>
          <li>
            <span>{t("point-five")}</span>
          </li>
          <li>
            <span>{t("point-six")}</span>
          </li>
          <li>
            <span>{t("point-seven")}</span>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Abilities;
