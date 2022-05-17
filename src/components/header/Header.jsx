import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown } from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

import "./header.css";
import AboutUs from "./AboutUs";
import OurPartners from "./OurPartners";
import OurAchievements from "./OurAchievements";
import Projects from "./Projects";
import Results from "./Results";
import Procurements from "./Procurements";
import News from "./News";
import Contact from "./Contact";
import LanguageButton from "./LanguageButton";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <a href="/">
              <img src="/assets/logo.png" alt="" />
            </a>
          </div>
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            <div className="App">
              <Nav>
                <AboutUs />
                <OurPartners />
                <OurAchievements />
                <Projects />
                <Results />
                <Procurements />
                <News />
                <Contact />
              </Nav>
            </div>
          </ul>
          <LanguageButton />
        </div>
      </header>
    </>
  );
};

export default Header;
