import React from "react";
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

    {
      href: "http://www.nature-ic.am/",
      key: "climateChange",
    },
  ];

  return (
    <div className={styles.content}>
      <div className="partners-info">
        <div className={styles.container}>
          {partnersInfo.map((info) => {
            return (
              <div key={info.key}>
                <a href={info.href} className={styles.partnerInfoWrapper}>
                  <img
                    className={styles.image}
                    src={logos[info.key]}
                    alt={t(info.key)}
                  />
                  <b> {t(info.key)}</b>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
