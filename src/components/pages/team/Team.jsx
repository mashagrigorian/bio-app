import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import images from "./TeamPhotos";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles((theme) => ({
  teamMemberAvatar: {
    width: 250,
    height: 250,
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 100,
    },
  },
}));

const Team = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const avatarStyles = {
    width: {
      xs: 100,
      md: 250,
    },
    height: {
      xs: 100,
      md: 250,
    },
  };

  return (
    <Container
      className={classes.logoSm}
      component={Paper}
      elevation={5}
      style={{
        padding: "10px 5px",
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
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src={images.photo} sx={avatarStyles} />
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: 13,
                  md: 20,
                },
              }}
              align="center"
            >
              <b>{t("member")} </b>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: 12,
                  md: 15,
                },
              }}
              align="center"
            >
              {t("headPosition")}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justify: "center",
                gap: "5px",
                textAlign: "justify",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src={images.photo} sx={avatarStyles} />
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: 13,
                  md: 20,
                },
              }}
              align="center"
            >
              <b>{t("member")}</b>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: 12,
                  md: 15,
                },
              }}
              align="center"
            >
              {t("headPosition2")}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justify: "center",
                gap: "5px",
                textAlign: "center",
                xs: 12,
                md: 20,
              }}
            ></div>
          </div>
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
                      <Avatar src={memberInfo.img} sx={avatarStyles} />
                      <Typography
                        sx={{
                          fontSize: {
                            xs: 12,
                            md: 20,
                          },
                        }}
                      >
                        {memberInfo.name}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: {
                            xs: 12,
                            md: 15,
                          },
                        }}
                      >
                        {memberInfo.position}
                      </Typography>
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
        name: <b>{t("member")}</b>,
        position: t("member1Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("member2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("member3Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("member4Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("member5Position"),
        img: images.photo,
      },
    ],
  },
  {
    label: <b>{t("teamName2")}</b>,
    members: [
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Member1Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Member6Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName2Member7Position"),
        img: images.photo,
      },
    ],
  },
  {
    label: <b>{t("teamName3")}</b>,
    members: [
      {
        name: <b>{t("member")}</b>,
        position: t("teamName3Member1Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName3Member2Position"),
        img: images.photo,
      },

      {
        name: <b>{t("member")}</b>,
        position: t("teamName3Member4Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName3Member5Position"),
        img: images.photo,
      },
    ],
  },
  {
    label: <b>{t("teamName4")}</b>,
    members: [
      {
        name: <b>{t("member")}</b>,
        position: t("teamName4Member1Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName4Member2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName4Member2Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName4Member3Position"),
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        position: t("teamName4Member3Position"),
        img: images.photo,
      },
    ],
  },
  {
    label: <b>{t("experts")}</b>,
    members: [
      {
        name: <b>{t("member")}</b>,
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        img: images.photo,
      },
      {
        name: <b>{t("member")}</b>,
        img: images.photo,
      },
    ],
  },
];

export default Team;
