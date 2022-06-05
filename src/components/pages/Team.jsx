import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import images from "./teamPhotos";
import "./team.css";

const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div>
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
              {t("ourTeamHead")}
              <br />
              {t("headPosition")}
              <br />
              View Bio <AddCircleOutlineIcon style={{ color: "#006400" }} />
            </Typography>
          </Typography>
          <Typography>
            <Avatar
              src={images.ArmenKhojoyan}
              sx={{ width: 250, height: 250 }}
            />
            <Typography align="center">
              {t("ourTeamHead2")}
              <br />
              {t("headPosition2")}
              <br />
              View Bio <AddCircleOutlineIcon style={{ color: "#006400" }} />
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
                      <div>{memberInfo.name}</div>
                      <div>{memberInfo.position}</div>
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
    label: t("teamName"),
    members: [
      {
        name: t("member1"),
        position: t("member1Position"),
        img: images.AniMkrtchyan,
      },
      {
        name: t("member2"),
        position: t("member2Position"),
        img: images.AnjelaManukyan,
      },
      {
        name: t("member3"),
        position: t("member3Position"),
        img: images.GurgenBadalyan,
      },
      {
        name: t("member4"),
        position: t("member4Position"),
        img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
      },
      {
        name: t("member5"),
        position: t("member5Position"),
        img: images.KhanumAbrahamyan,
      },
    ],
  },
  {
    label: t("teamName2"),
    members: [
      {
        name: t("teamName2Member1"),
        position: t("teamName2Member1Position"),
        img: images.RubikShahazizyan,
      },
      {
        name: t("teamName2Member2"),
        position: t("teamName2Position"),
        img: images.AnushTadevosyan,
      },
      {
        name: t("teamName2Member3"),
        position: t("teamName2Position"),
        img: images.DavitNikoghosyan,
      },
      {
        name: t("teamName2Member4"),
        position: t("teamName2Position"),
        img: images.KoryunBznuni,
      },
      {
        name: t("teamName2Member5"),
        position: t("teamName2Position"),
        img: images.ArmenAjamoghlyan,
      },
      {
        name: t("teamName2Member6"),
        position: t("teamName2Member6Position"),
        img: images.TorosTorosyan,
      },
      {
        name: t("teamName2Member7"),
        position: t("teamName2Member7Position"),
        img: images.GagikMelkonyan,
      },
    ],
  },
  {
    label: t("teamName3"),
    members: [
      {
        name: t("teamName3Member1"),
        position: t("teamName3Member1Position"),
        img: images.MargaritaGasparyan,
      },
      {
        name: t("teamName3Member2"),
        position: t("teamName3Member2Position"),
        img: images.LiaApikyan,
      },

      {
        name: t("teamName3Member4"),
        position: t("teamName3Member4Position"),
        img: images.MilenaKiramijyan,
      },
      {
        name: t("teamName3Member5"),
        position: t("teamName3Member5Position"),
        img: images.SonaGalstyan,
      },
    ],
  },
  {
    label: t("teamName4"),
    members: [
      {
        name: t("teamName4Member1"),
        position: t("teamName4Member1Position"),
        img: images.JannaDadiyan,
      },
      {
        name: t("teamName4Member2"),
        position: t("teamName4Member2Position"),
        img: images.AniTadevosyan,
      },
      {
        name: t("teamName4Member3"),
        position: t("teamName4Member2Position"),
        img: images.IrmaYuzbashyan,
      },
      {
        name: t("teamName4Member4"),
        position: t("teamName4Member3Position"),
        img: images.HovhannesKarakhanyan,
      },
      {
        name: t("teamName4Member5"),
        position: t("teamName4Member3Position"),
        img: images.MikayelVardanyan,
      },
    ],
  },
  {
    label: t("experts"),
    members: [
      {
        name: t("expert1"),
        img: images.AlbertArutunian,
      },
      {
        name: t("expert2"),
        img: images.MisakHovakimyan,
      },
      {
        name: t("expert3"),
        img: images.LianaNersisyan,
      },
      {
        name: t("expert4"),
        img: images.KarineMovsisyan,
      },
    ],
  },
];

export default Team;
