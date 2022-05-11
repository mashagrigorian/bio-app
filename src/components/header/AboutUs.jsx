import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
import { Nav, NavDropdown } from "react-bootstrap";
// import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Popover from "./Popover";

function AboutUs() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* {" "}
      <InfoIcon /> */}

      <Button
        aria-owns={anchorEl ? "about-us" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <HomeIcon style={{ color: "#006400" }} />
        {t("aboutUsLabel")}
      </Button>
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
              display: "block",
              position: "absolute",
              top: 0,
              right: 0,
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
        id="about-us"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        renderMenuOnMount={true}
        title={t("aboutUsLabel")}
        className="nav-parent-item"
      >
        {/* <MenuItem href="/about/history">{t("history")}</MenuItem>
        <MenuItem href="/about/our-capabilities">
          {t("ourCapabilities")}
        </MenuItem>
        <MenuItem href="/about/our-priorities">{t("ourPriorities")}</MenuItem>
        <MenuItem href="/about/our-team">{t("ourTeam")}</MenuItem> */}
        <Popover />
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
      </Menu>
    </div>
  );
}

export default AboutUs;
