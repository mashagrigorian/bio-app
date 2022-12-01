// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     backend: {
//       // translation file path
//       loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
//     },
//     fallbackLng: "en",
//     // disabled in production
//     debug: false,
//     // can have multiple namespaces, in case you want to divide a huge
//     // translation into smaller pieces and load them on demand
//     ns: ["common", "home", "profile"],

//     interpolation: {
//       espaceValue: false,
//       formatSeparator: ",",
//     },
//     react: {
//       wait: true,
//     },
//   });

// export default i18n;

import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: localStorage.getItem("lng") || "en",
  });

export default i18n;
