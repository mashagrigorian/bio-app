import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";

const Procurements = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "about-us" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {t("procurements")}
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
              right: 40,
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
        title={t("procurements")}
        className="nav-parent-item"
      >
        {/* <MenuItem
          component={Link}
          href="/procurement/procurement-under-the-programs"
        >
          {t("procurementForProjects")}
        </MenuItem>
        <MenuItem
          component={Link}
          href="/procurement/procurement-for-the-office-needs"
        >
          {t("officeProcurement")}
        </MenuItem> */}
        <MenuItem component={Link} href="/procurement/announcements">
          {t("announcements")}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Procurements;
