import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div
          className="coat-of-arms"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            justifyItems: "center",
            padding: "10px",
          }}
        >
          <div>
            {" "}
            <img src="http://mnp.am/images/arm.png" alt="" title="" />
          </div>
          <div>
            <div className="header-title" style={{ color: " black" }}>
              Header title
            </div>
          </div>
          <div>
            <a href="/">
              <img
                src="/assets/logo.png"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </a>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
