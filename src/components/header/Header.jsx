import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown } from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";

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
            <img src="/assets/logo.png" alt="" />
          </div>
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            <div className="App">
              <Nav>
                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("aboutUsLabel")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/about/history">
                    {t("history")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/our-capabilities">
                    {t("ourCapabilities")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/our-priorities">
                    {t("ourPriorities")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/our-team">
                    {t("ourTeam")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Button
                  aria-owns={anchorEl ? "about-us" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                >
                  {t("aboutUsLabel")}
                </Button>
                <Menu
                  id="about-us"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  renderMenuOnMount={true}
                  title={t("aboutUsLabel")}
                  className="nav-parent-item"
                >
                  <MenuItem onClick={handleClose} href="/about/history">
                    {t("history")}
                  </MenuItem>
                  <MenuItem href="/about/our-capabilities">
                    {t("ourCapabilities")}
                  </MenuItem>
                  <MenuItem onClick={handleClose} href="/about/our-priorities">
                    {t("ourPriorities")}
                  </MenuItem>
                  <MenuItem onClick={handleClose} href="/about/our-team">
                    {t("ourTeam")}
                  </MenuItem>
                </Menu> */}
                <AboutUs />
                <OurPartners />

                {/* <Nav.Link href="/partners" className="nav-single-item">
                  {t("ourPartners")}
                </Nav.Link> */}

                {/* <NavDropdown
                  title={t("ourAchievements")}
                  className="nav-parent-item"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/achievements/accreditations">
                    {t("accreditations")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/achievements/capacity-assessment">
                    {t("ourCapacities")}
                  </NavDropdown.Item>
                </NavDropdown> */}

                <OurAchievements />
                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("projects")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/projects/completed-projects">
                    {t("implementedProjects")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/projects/current-projects">
                    {t("currentProjects")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/projects/planned-projects">
                    {t("plannedProjects")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Projects />

                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("results")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/results/beneficiaries">
                    {t("projectStakeholders")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Results />

                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("procurements")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/procurement/procurement-under-the-programs">
                    {t("procurementForProjects")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/procurement/procurement-for-the-office-needs">
                    {t("officeProcurement")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/procurement/announcements">
                    {t("announcements")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Procurements />

                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("news")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/news/news">
                    {t("allNews")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/news/the-press-about-us">
                    {t("pressAboutUs")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/news/media-gallery">
                    {t("mediaGallery")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                <News />

                {/* <NavDropdown
                  renderMenuOnMount={true}
                  title={t("contact")}
                  className="nav-parent-item"
                >
                  <NavDropdown.Item href="/contact/contacts">
                    {t("letterExample")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact/contacts">
                    {t("ourAddress")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact/contacts">
                    {t("contacts")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact/contacts">
                    {t("hotline")}
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Contact />
              </Nav>
            </div>
          </ul>
          {/* <div>
            <IconButton onClick={handleClick}>
              <LanguageIcon />
            </IconButton>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
            ></Button>
            <Menu
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 2,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    //   display: "block",
                    position: "absolute",
                    top: 0,
                    right: 80,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={() => i18n.changeLanguage("arm")}>
                Armenian
              </MenuItem>
              <MenuItem onClick={() => i18n.changeLanguage("rus")}>
                Russian
              </MenuItem>
              <MenuItem onClick={() => i18n.changeLanguage("en")}>
                English
              </MenuItem>
            </Menu>
          </div> */}
          <LanguageButton />
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
