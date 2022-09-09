<<<<<<< HEAD
import { Paper } from "@mui/material";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
=======
import {Box, Container, Grid, Paper} from "@mui/material";
import {useTranslation} from "react-i18next";
import {FiFacebook, FiLinkedin, FiYoutube} from "react-icons/fi";
>>>>>>> ced14840a704c382744a8211afeb7a1a11943b5f
import greenClimate from "./../pages/partners/partnersLogo/greenClimate.png";

const Footer = () => {
    const {t, i18n} = useTranslation();

<<<<<<< HEAD
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container
        width="100%"
        z-index="1"
        justifyContent="space-around"
        marginBottom="auto"
        flexDirection="row"
        textAlign="center"
        position="fixed"
        display="contents"
        maxWidth="lg"
        component={Paper}
        elevation={5}
        style={{ padding: 25 }}
      >
        <Grid container spacing={10}>
          <Grid item xs={2} sm={8}>
            <div>
              <a href="/">
                <img src="/assets/logo.png" alt="" className="logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={4} md={40}>
            <Box>
              <i className="fa fa-location-dot"></i>
              {t("street")}
            </Box>
            <Box>
              <i className="fa fa-phone"></i>+374 10 651-631
            </Box>
            <Box>
              <i className="fa fa-envelope"></i>info@cep.am antifraud@epiu.am
            </Box>
            <div
              className="social-media"
              style={{
                display: "flex",
                width: "30%",
                justifyContent: "space-around",
                fontSize: "1.3rem",
              }}
            >
              <a
                className="icon-circle"
                href="https://www.facebook.com/epiu.am/"
                target="_blank"
              >
                <FiFacebook />
              </a>
              <a
                className="icon-circle"
                href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a
                className="icon-circle"
                href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
                target="_blank"
              >
                <FiYoutube />
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={4} md={8}>
          {t("copyright")}
        </Grid>
      </Container>
    </Box>
  );
=======
    return (
        <Box
            sx={{marginTop: "25px"}}
            px={{xs: 3, sm: 10}}
            py={{xs: 5, sm: 10}}
            bgcolor="text.secondary"
            color="white"
        >
            <Container
                width="100%"
                z-index="1"
                justifyContent="space-around"
                marginBottom="auto"
                flexDirection="row"
                textAlign="center"
                position="fixed"
                display="contents"
                // flex-direction: row;
                // text-align: center;
                // position: fixed;
                //  display: contents;
                // align-items: center;
                // margin-bottom:50px;
                // position: relative;
                // width: 100%;
                // justify-content: space-around;
                // align-items: center;
                // text-align: center;
                //  position: fixed;
                // bottom: 0;
                //  margin: 10px;
                // min-height: 100%;
                // padding: 10px;
                maxWidth="lg"
                component={Paper}
                elevation={5}
                style={{padding: 25}}
            >
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            <b>{t("contactWithUs")}</b>
                        </Box>
                        <Box>
                            <i className="fa fa-location-dot"></i>
                            {t("street")}
                        </Box>
                        <Box>
                            <i className="fa fa-phone"></i>+374 10 651-631
                        </Box>
                        <Box>
                            <i className="fa fa-envelope"></i>info@cep.am antifraud@epiu.am
                        </Box>
                        <div className="footer-links-logo">
                            <div className="footer-links-icons">
                                <a href="https://www.facebook.com/epiu.am/" target="_blank">
                                    <FiFacebook/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
                                    target="_blank"
                                >
                                    <FiLinkedin/>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
                                    target="_blank"
                                >
                                    <FiYoutube/>
                                </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {t("copyright")}
                        <div className="logo">
                            <a href="/">
                                <img src="/assets/logo.png" alt=""/>
                            </a>
                            <a href="https://www.greenclimate.fund/" target="_blank">
                                <img src={greenClimate} alt=""/>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
>>>>>>> ced14840a704c382744a8211afeb7a1a11943b5f
};

export default Footer;
