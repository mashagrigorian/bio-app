import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { CssBaseline } from "@mui/material";
import englishTranslations from "./translations/english.json";
import russianTranslations from "./translations/russian.json";
import armenianTranslations from "./translations/armenian.json";

i18n.use(initReactI18next).init({
  resources: {
    en: englishTranslations,
    rus: russianTranslations,
    arm: armenianTranslations,
  },
  lng: localStorage.getItem("lng"),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
