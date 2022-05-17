import React from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
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

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "about-us" : undefined}
        aria-haspopup="true"
        onClick={() => navigate("/contacts")}
        onMouseOver={handleClick}
      >
        <ContactsIcon style={{ color: "#00fa9a" }} />
        {t("contact")}
      </Button>
    </div>
  );
};

export default Contact;
