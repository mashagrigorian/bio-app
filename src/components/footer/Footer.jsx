import { Box, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const { t, i18n } = useTranslation();

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
          <Grid item xs={4} md={4}>
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
                width: "50%",
                justifyContent: "space-between",
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
        <Box>
          <Grid item xs={4} md={2} style={{ textAlign: "center" }}>
            {t("copyright")}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
