import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { IconButton } from "@mui/material";

const LanguageButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <IconButton onClick={handleClick} onMouseOver={handleClick}>
        <LanguageIcon />
      </IconButton>
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
              right: 10,
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
        <MenuItem onClick={() => i18n.changeLanguage("arm")}>Armenian</MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("rus")}>Russian</MenuItem>
        <MenuItem onClick={() => i18n.changeLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageButton;
