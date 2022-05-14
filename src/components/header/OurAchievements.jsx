import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { Nav, NavDropdown } from "react-bootstrap";
import Popover from "./Popover";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function OurAchievements() {
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
      <Button
        aria-owns={anchorEl ? "about-us" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <AutoAwesomeIcon style={{ color: "#008000" }} />
        {t("ourAchievements")}
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
        title={t("ourAchievements")}
        className="nav-parent-item"
      >
        <Popover />
        {/* <MenuItem href="/about/history">{t("history")}</MenuItem>
        <MenuItem href="/about/our-capabilities">
          {t("ourCapabilities")}
        </MenuItem>
        <MenuItem href="/about/our-priorities">{t("ourPriorities")}</MenuItem>
        <MenuItem href="/about/our-team">{t("ourTeam")}</MenuItem> */}
        <NavDropdown.Item href="/achievements/accreditations">
          {t("accreditations")}
        </NavDropdown.Item>
        <NavDropdown.Item href="/achievements/capacity-assessment">
          {t("ourCapacities")}
        </NavDropdown.Item>
      </Menu>
    </div>
  );
}

export default OurAchievements;
