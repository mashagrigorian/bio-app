import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
import { Nav, NavDropdown } from "react-bootstrap";
import Link from "@mui/material/Link";
import HandshakeSharpIcon from "@mui/icons-material/HandshakeSharp";
import { useNavigate } from "react-router-dom";

function OurPartners() {
  let navigate = useNavigate();
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
        onClick={() => navigate("/partners")}
        onMouseOver={handleClick}
      >
        <HandshakeSharpIcon style={{ color: "#556b2f" }} />
        {t("ourPartners")}
      </Button>
      <Menu
      // onClick={handleClose}
      // PaperProps={{
      //   elevation: 0,
      //   sx: {
      //     overflow: "visible",
      //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      //     mt: 2,
      //     "& .MuiAvatar-root": {
      //       width: 32,
      //       height: 32,
      //       ml: -0.5,
      //       mr: 1,
      //     },
      //     "&:before": {
      //       content: '""',
      //       display: "block",
      //       position: "absolute",
      //       top: 0,
      //       right: 0,
      //       width: 10,
      //       height: 10,
      //       bgcolor: "background.paper",
      //       transform: "translateY(-50%) rotate(45deg)",
      //       zIndex: 0,
      //     },
      //   },
      // }}
      // transformOrigin={{ horizontal: "right", vertical: "top" }}
      // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      // id="our-partners"
      // anchorEl={anchorEl}
      // open={Boolean(anchorEl)}
      // onClose={handleClose}
      // MenuListProps={{ onMouseLeave: handleClose }}
      // renderMenuOnMount={true}
      // title={t("ourPartners")}
      // className="nav-single-item"
      >
        {/* <Nav.Link href="/partners" className="nav-single-item">
          {t("ourPartners")}
        </Nav.Link> */}
        {/* <MenuItem
          containerElement={<Link to="/partners" />}
          primaryText={t("ourPartners")}
        /> */}
        {/* <MenuItem
          component={Link}
          to="/partners"
          primaryText={t("ourPartners")}
        >
          Our Partners
        </MenuItem> */}

        {/* <MenuItem onClick={handleClick}>
          <Link to="/partners">Partners</Link>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

export default OurPartners;
