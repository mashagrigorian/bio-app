// import * as React from "react";
// import { useState, useCallback } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { useTranslation } from "react-i18next";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import LanguageButton from "./LanguageButton";
// import { Grid, Hidden, SwipeableDrawer, Divider } from "@mui/material";
// import NavLinks from "./NavLinks";
// import { ArrowRight } from "@mui/icons-material";
// import NavigationData from "./Navigation.jsx";

// const pages = ["Products", "Pricing", "Blog"];

// function ResponsiveAppBar() {
//   const { t, i18n } = useTranslation();

//   const [expanded, setExpanded] = useState(false);
//   const [open, setOpen] = useState(false);

//   const expandHeight = useCallback((bool) => {
//     setExpanded(bool);
//   }, []);
//   const openDrawer = useCallback((bool) => {
//     setOpen(true);
//   }, []);
//   const closeDrawer = useCallback((bool) => {
//     setOpen(false);
//   }, []);

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             fontSize="0.8rem"
//             sx={{
//               color: "white",
//               fontWeight: "bold",
//               wordSpacing: "2px",
//               paddingLeft: "800px",
//               letterSpacing: "0.1em",
//             }}
//           >
//             <div>
//               <LocalPhoneIcon
//                 style={{ marginBottom: "-7px", padding: "1px" }}
//               />
//               {t("hotline")} +374 10 651-631, info@cep.am antifraud@epiu.am
//             </div>
//           </Typography>
//           <Box>
//             <Grid
//               container
//               justifyContent="flex-end"
//               style={{ marginLeft: "88px" }}
//             >
//               <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
//                 <LanguageButton isDrawerReady={open} />
//               </Box>
//             </Grid>
//             <Hidden lgUp>
//               <IconButton onClick={openDrawer}>
//                 <MenuIcon />
//               </IconButton>
//             </Hidden>
//             <SwipeableDrawer
//               open={open}
//               anchor="right"
//               onOpen={openDrawer}
//               onClose={closeDrawer}
//             >
//               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                 <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
//                   <LanguageButton isDrawerReady={open} />
//                 </Box>
//                 <IconButton onClick={closeDrawer}>
//                   <ArrowRight />
//                 </IconButton>
//               </Box>
//               <Divider />
//               <Box sx={{ display: "flex", flexDirection: "column" }}>
//                 {NavigationData.map((item, index) => {
//                   return (
//                     <>
//                       <NavLinks
//                         key={index}
//                         expand={expandHeight}
//                         title={item.title}
//                         links={item.links}
//                         type={item.type}
//                         isDrawerReady={open}
//                       />
//                       <Divider />
//                     </>
//                   );
//                 })}
//               </Box>
//             </SwipeableDrawer>
//           </Box>
//           {/* <Box sx={{ flexGrow: 0 }}>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             ></Menu>
//           </Box> */}
//         </Toolbar>
//       </Container>
//       <div className="header-middle">
//         <div className="custom-container">
//           <div className="coat-of-arms">
//             <img
//               src="http://mnp.am/images/arm.png"
//               alt=""
//               title=""
//               style={{ marginLeft: "100px" }}
//             />
//             <div className="header-title" style={{ marginLeft: "800px" }}>
//               Header title
//             </div>{" "}
//             <Grid item>
//               <div className="logo">
//                 <a href="/">
//                   <img
//                     src="/assets/logo.png"
//                     alt=""
//                     style={{
//                       width: "100px",
//                       height: "100px",
//                       left: "85%",
//                       top: "40px",
//                       marginLeft: "1500px",
//                     }}
//                   />
//                 </a>
//               </div>
//             </Grid>
//           </div>{" "}
//         </div>
//       </div>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useTranslation } from "react-i18next";
import MiddleHeader from "./MiddleHeader";

export default function ButtonAppBar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#138B43" }}>
        <Toolbar
          style={{
            display: "grid",
            flexDirection: "row",
            gridTemplateColumns: "1fr auto",
            justifyItems: "right",
            gap: "10px",
          }}
        >
          <LocalPhoneIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ padding: "1px", fontSize: "15px", textAlign: "right" }}
          >
            {t("hotline")} +374 10 651-631, info@cep.am antifraud@epiu.am
          </Typography>
        </Toolbar>
      </AppBar>
      <MiddleHeader />
    </Box>
  );
}
