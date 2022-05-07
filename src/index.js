import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

// import "./components/header/i18n";

// axios.defaults.baseURL = "http://localhost:3000/";
// axios.defaults.headers.common["Accept-Language"] =
//   localStorage.getItem("lang") || "en";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
