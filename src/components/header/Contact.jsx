// import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { useTranslation } from "react-i18next";
// import { Nav, NavDropdown } from "react-bootstrap";
// import Popover from "./Popover";
// import ContactsIcon from "@mui/icons-material/Contacts";

// function Contact() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   function handleClick(event) {
//     if (anchorEl !== event.currentTarget) {
//       setAnchorEl(event.currentTarget);
//     }
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   const { t, i18n } = useTranslation();

//   return (
//     <div>
//       <Button
//         aria-owns={anchorEl ? "about-us" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//         onMouseOver={handleClick}
//         // onMouseLeave={handleClose}
//       >
//         <ContactsIcon style={{ color: "#00fa9a" }} />
//         {t("contact")}
//       </Button>
//       <Menu
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: "visible",
//             filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//             mt: 2,
//             "& .MuiAvatar-root": {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             "&:before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 0,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//         id="about-us"
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         MenuListProps={{ onMouseLeave: handleClose }}
//         renderMenuOnMount={true}
//         title={t("contact")}
//         className="nav-parent-item"
//       >
//         <Popover />
//         <NavDropdown.Item href="/contact/contacts">
//           {t("letterExample")}
//         </NavDropdown.Item>
//         <NavDropdown.Item href="/contact/contacts">
//           {t("ourAddress")}
//         </NavDropdown.Item>
//         <NavDropdown.Item href="/contact/contacts">
//           {t("contacts")}
//         </NavDropdown.Item>
//         <NavDropdown.Item href="/contact/contacts">
//           {t("hotline")}
//         </NavDropdown.Item>
//       </Menu>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import Button from "@material-ui/core/Button";
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
