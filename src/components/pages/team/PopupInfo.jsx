import { useState } from "react";
import Popup from "./Popup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const PopupInfo = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      {/* <button >Open</button> */}
      <button onClick={() => setButtonPopup(true)}>
        <AddCircleOutlineIcon style={{ color: "#006400" }} />
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p>Information about head</p>
      </Popup>
    </div>
  );
};

export default PopupInfo;
