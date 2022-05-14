import { Button, Popover, Typography } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [anchor, setAnchor] = useState(null);

  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        // style={{ marginTop: 300, marginLeft: 300 }}
        // variant="contained"
        // color="secondary"
        onClick={openPopover}
      ></Button>
      {/* <Popover open={true} anchorEl={anchor}>
        <Typography variant="h6"></Typography>
      </Popover> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
      </Popover>
    </div>
  );
};

export default App;
