import { Box, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }}>
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
      >
        <Grid
          container
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ padding: "10px" }}
        >
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            xs={12}
            md={6}
          >
            <a href="/">
              <img
                src="/assets/logo.png"
                alt=""
                className="logo"
                width="50"
                height="50"
              />
            </a>
            <span> {t("copyright")}</span>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="fa fa-location-dot"></i>
              <span>{t("street")}</span>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="fa fa-phone"></i>
              <span>+374 10 999-999</span>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="fa fa-envelope"></i>
              <span>info@99.am</span>
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
              >
                <FiFacebook />
              </a>
              <a
                className="icon-circle"
              >
                <FiLinkedin />
              </a>
              <a
                className="icon-circle"
              >
                <FiYoutube />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
