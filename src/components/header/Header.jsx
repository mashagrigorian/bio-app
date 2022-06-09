import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AboutUs from "./AboutUs";
import OurPartners from "./OurPartners";
import OurAchievements from "./OurAchievements";
import Projects from "./Projects";
import Results from "./Results";
import Procurements from "./Procurements";
import News from "./News";
import Contact from "./Contact";
import LanguageButton from "./LanguageButton";
import "./header.css";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = {
  logo: {
    maxWidth: 160,
  },
};

const Header = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ background: "white", textIndent: "50px" }}>
          <Toolbar>
            <div className="logo">
              <a href="/">
                <img src="/assets/logo.png" alt="" />
              </a>
            </div>
            <Typography variant="h6" component="div">
              <AboutUs />
            </Typography>
            <Typography variant="h6" component="div">
              <OurPartners />
            </Typography>
            <Typography variant="h6" component="div">
              <OurAchievements />
            </Typography>
            <Typography variant="h6" component="div">
              <Projects />
            </Typography>
            <Typography variant="h6" component="div">
              <Results />
            </Typography>
            <Typography variant="h6" component="div">
              <Procurements />
            </Typography>
            <Typography variant="h6" component="div">
              <News />
            </Typography>
            <Typography variant="h6" component="div">
              <Contact />
            </Typography>
            <LanguageButton />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
