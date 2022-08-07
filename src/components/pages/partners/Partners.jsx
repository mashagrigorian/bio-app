import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./partners.module.css";
import logos from "./PartnerLogos";
// import gsap from "gsap";

const Partners = () => {
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   const divs = document.querySelectorAll(".partners-info");
  //   gsap.set(divs[1], { x: 100, opacity: 1 });

  //   gsap
  //     .timeline({ repeat: -1, defaults: { duration: 3 } })

  //     .add("one")
  //     .to(divs[0], { y: 300, x: 0, opacity: 0.05 }, "one")
  //     .to(divs[1], { y: -350, x: 0, opacity: 0.05 }, "one")
  //     .to(divs[2], { y: -450, x: 0, opacity: 1 }, "one")
  //     .to(divs[3], { y: -500, x: 0, opacity: 1 }, "one")
  //     .to(divs[4], { y: -540, x: 0, opacity: 1 }, "one")
  //     .to(divs[5], { y: -570, x: 0, opacity: 1.05 }, "one")
  //     .to(divs[6], { y: -600, x: 0, opacity: 1.05 }, "one")
  //     .to(divs[7], { y: -620, x: 0, opacity: 2 }, "one")
  //     .to(divs[8], { y: -650, x: 0, opacity: 2 }, "one")

  //     .add("two")
  //     .to(divs[0], { y: 300, x: 100, opacity: 1 }, "two")
  //     .to(divs[1], { y: 300, x: 0, opacity: 0.05 }, "two")
  //     .to(divs[2], { y: -600, x: 100, opacity: 0.05 }, "two")
  //     .to(divs[3], { y: -620, x: 0, opacity: 0.05 }, "two")
  //     .to(divs[4], { y: -500, x: 100, opacity: 0.07 }, "two")
  //     .to(divs[5], { y: -520, x: 100, opacity: 0.07 }, "two")
  //     .to(divs[6], { y: -200, x: 0, opacity: 0.07 }, "two")
  //     .to(divs[7], { y: -650, x: 100, opacity: 1.02 }, "two")
  //     .to(divs[8], { y: -680, x: 0, opacity: 1.02 }, "two")

  //     .add("three")
  //     .to(divs[0], { y: 0, x: 100, opacity: 1 }, "three")
  //     .to(divs[1], { y: 0, x: 0, opacity: 0.05 }, "three")
  //     .to(divs[2], { y: 0, x: 100, opacity: 0.05 }, "three")
  //     .to(divs[3], { y: 0, x: 0, opacity: 0.05 }, "three")
  //     .to(divs[4], { y: 0, x: 100, opacity: 0.07 }, "three")
  //     .to(divs[5], { y: 0, x: 100, opacity: 0.07 }, "three")
  //     .to(divs[6], { y: 0, x: 0, opacity: 0.07 }, "three")
  //     .to(divs[7], { y: 0, x: 100, opacity: 1.02 }, "three")
  //     .to(divs[8], { y: 0, x: 0, opacity: 1.02 }, "three");
  // });

  return (
    <div className={styles.content}>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={logos.adaptionFond}
              alt="adaptionFondLogo"
            />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.adaptation-fund.org/ ">
                <b> {t("adaptionFund")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={logos.greenClimate}
              alt="greenClimate"
            />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.greenclimate.fund/">
                <b> {t("greenClimate")}</b>
              </a>
            </h2>
          </div>
        </div>
        <div className="partners-info">
          <div className={styles.container}>
            <div>
              <img
                className={styles.image}
                src={logos.globalEnv}
                alt="globalEnv"
              />
            </div>
            <div className={styles.text}>
              <h2>
                <a href="https://www.thegef.org/">
                  <b> {t("globalEnviromentFacility")}</b>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img className={styles.image} src={logos.unep} alt="unep" />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.unep.org/">
                <b> {t("unitedNationsEnvProg")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img className={styles.image} src={logos.undp} alt="undp" />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.undp.org/">
                <b> {t("unitedNationsDevProg")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img className={styles.image} src={logos.unido} alt="unido" />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.unido.org/">
                <b> {t("unitedNationsInduDevOrg")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={logos.theWorldBank}
              alt="theWorldBank"
            />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.worldbank.org/en/home">
                <b> {t("theWorldBank")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img className={styles.image} src={logos.osce} alt="osce" />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.osce.org/">
                <b> {t("orgForSec")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div className="partners-info">
        <div className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={logos.climateChange}
              alt="climateChange"
            />
          </div>
          <div className={styles.text}>
            <h2>
              <a href="https://www.greenclimate.fund/">
                <b> {t("climChangeInfCenter")}</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
