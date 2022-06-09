import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const OurPartners = () => {
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
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "about-us" : undefined}
        aria-haspopup="true"
        onClick={() => navigate("/partners")}
        onMouseOver={handleClick}
      >
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
};

export default OurPartners;
