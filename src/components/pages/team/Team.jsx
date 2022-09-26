import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import images from "./teamPhotos";
import HeadInfoPopover from "./HeadInfoPopover";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Team = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <Container
      className={classes.logoSm}
      component={Paper}
      elevation={5}
      style={{
        padding: 5,
        marginTop: 30,
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ textAlign: "justify" }}>
        <Stack
          direction="row"
          justifyContent="space-around"
          margin="20px"
          spacing={2}
        >
          <Typography>
            <Avatar
              src={images.ArmenYesoyan}
              sx={{ width: 250, height: 250 }}
            />
            <Typography align="center">
              <span className="name" style={{ fontSize: "20px" }}>
                <b>{t("ourTeamHead")} </b>
              </span>
              <br />
              {t("headPosition")}
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textAlign: "justify",
                }}
              >
                <HeadInfoPopover />
              </div>
            </Typography>
          </Typography>
          <Typography>
            <Avatar
              src={images.ArmenKhojoyan}
              sx={{ width: 250, height: 250 }}
            />
            <Typography align="center">
              <span className="name" style={{ fontSize: "20px" }}>
                <b>{t("ourTeamHead2")}</b>
              </span>
              <br />
              {t("headPosition2")}
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  textAlign: "justify",
                }}
              >
                <HeadInfoPopover />
              </div>
            </Typography>
          </Typography>
        </Stack>
      </div>
      <div>
        {getData(t).map((departmentInfo) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{departmentInfo.label}</Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "grid",
                  height: "100%",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "20px",
                }}
              >
                {departmentInfo?.members.map((memberInfo) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <Avatar
                        src={memberInfo.img}
                        sx={{ width: 250, height: 250 }}
                      />
                      <span className="name" style={{ fontSize: "20px" }}>
                        {memberInfo.name}{" "}
                      </span>
                      <div className="position" style={{ textAlign: "center" }}>
                        {memberInfo.position}
                      </div>
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Container>
  );
};

const getData = (t) => [
  {
    label: <b>{t("teamName")}</b>,
    members: [
      {
        name: <b>{t("member1")}</b>,
        position: t("member1Position"),
        img: images.AniMkrtchyan,
      },
      {
        name: <b>{t("member2")}</b>,
        position: t("member2Position"),
        img: images.AnjelaManukyan,
      },
      {
        name: <b>{t("member3")}</b>,
        position: t("member3Position"),
        img: images.GurgenBadalyan,
      },
      {
        name: <b>{t("member4")}</b>,
        position: t("member4Position"),
        img: images.VarduhiManukyan,
      },
      {
        name: <b>{t("member5")}</b>,
        position: t("member5Position"),
        img: images.KhanumAbrahamyan,
      },
    ],
  },
  {
    label: <b>{t("teamName2")}</b>,
    members: [
      {
        name: <b>{t("teamName2Member1")}</b>,
        position: t("teamName2Member1Position"),
        img: images.RubikShahazizyan,
      },
      {
        name: <b>{t("teamName2Member2")}</b>,
        position: t("teamName2Position"),
        img: images.AnushTadevosyan,
      },
      {
        name: <b>{t("teamName2Member3")}</b>,
        position: t("teamName2Position"),
        img: images.DavitNikoghosyan,
      },
      {
        name: <b>{t("teamName2Member4")}</b>,
        position: t("teamName2Position"),
        img: images.KoryunBznuni,
      },
      {
        name: <b>{t("teamName2Member5")}</b>,
        position: t("teamName2Position"),
        img: images.ArmenAjamoghlyan,
      },
      {
        name: <b>{t("teamName2Member6")}</b>,
        position: t("teamName2Member6Position"),
        img: images.TorosTorosyan,
      },
      {
        name: <b>{t("teamName2Member7")}</b>,
        position: t("teamName2Member7Position"),
        img: images.GagikMelkonyan,
      },
    ],
  },
  {
    label: <b>{t("teamName3")}</b>,
    members: [
      {
        name: <b>{t("teamName3Member1")}</b>,
        position: t("teamName3Member1Position"),
        img: images.MargaritaGasparyan,
      },
      {
        name: <b>{t("teamName3Member2")}</b>,
        position: t("teamName3Member2Position"),
        img: images.LiaApikyan,
      },

      {
        name: <b>{t("teamName3Member4")}</b>,
        position: t("teamName3Member4Position"),
        img: images.MilenaKiramijyan,
      },
      {
        name: <b>{t("teamName3Member5")}</b>,
        position: t("teamName3Member5Position"),
        img: images.SonaGalstyan,
      },
    ],
  },
  {
    label: <b>{t("teamName4")}</b>,
    members: [
      {
        name: <b>{t("teamName4Member1")}</b>,
        position: t("teamName4Member1Position"),
        img: images.JannaDadiyan,
      },
      {
        name: <b>{t("teamName4Member2")}</b>,
        position: t("teamName4Member2Position"),
        img: images.AniTadevosyan,
      },
      {
        name: <b>{t("teamName4Member3")}</b>,
        position: t("teamName4Member2Position"),
        img: images.IrmaYuzbashyan,
      },
      {
        name: <b>{t("teamName4Member4")}</b>,
        position: t("teamName4Member3Position"),
        img: images.HovhannesKarakhanyan,
      },
      {
        name: <b>{t("teamName4Member5")}</b>,
        position: t("teamName4Member3Position"),
        img: images.MikayelVardanyan,
      },
    ],
  },
  {
    label: <b>{t("experts")}</b>,
    members: [
      {
        name: <b>{t("expert1")}</b>,
        img: images.AlbertArutunian,
      },
      {
        name: <b>{t("expert2")}</b>,
        img: images.MisakHovakimyan,
      },
      {
        name: <b>{t("expert3")}</b>,
        img: images.LianaNersisyan,
      },
      {
        name: <b>{t("expert4")}</b>,
        img: images.KarineMovsisyan,
      },
    ],
  },
];

export default Team;
