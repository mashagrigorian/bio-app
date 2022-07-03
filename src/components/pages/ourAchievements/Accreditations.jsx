import React from "react";
import adaptionFundLogo from "./logos/adaptationFundLogo.png";
import greenClimateLogo from "./logos/greenClimateFundLogo.png";
import "./accreditations.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accreditations = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="logo-styles-1">
        <img src={greenClimateLogo} />
        <Typography align="center">
          <span className="name">
            <b>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("accreditationsGreenClimate", {
                          interpolation: { escapeValue: false },
                        }),
                      }}
                    ></div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("aboutGreenClimate", {
                          interpolation: { escapeValue: false },
                        }),
                      }}
                    ></div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </b>
          </span>
        </Typography>
      </div>
      <div className="logo-styles-2">
        <img src={adaptionFundLogo} />
        <Typography align="center">
          <span className="name">
            <b>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("accreditationsAdaptationFund", {
                          interpolation: { escapeValue: false },
                        }),
                      }}
                    ></div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("aboutAdaptionFund", {
                          interpolation: { escapeValue: false },
                        }),
                      }}
                    ></div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </b>
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Accreditations;
