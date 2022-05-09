import React from "react";
// import "./components/header/i18n";
// axios.defaults.baseURL = "http://localhost:3000/";
// axios.defaults.headers.common["Accept-Language"] =
//   localStorage.getItem("lang") || "en";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";


i18n
    .use(initReactI18next)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources     : {
            en  : {
                translation : {

                    aboutUsLabel : 'About us'
                }
            },
            rus : {
                translation : {
                    aboutUsLabel : 'О нас'
                }
            },
            arm : {
                translation : {
                    aboutUsLabel : 'Մեր մասին'
                }
            }
        },
        lng           : "en", // if you're using a language detector, do not define the lng option
        fallbackLng   : "en",
        interpolation : {
            escapeValue : false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
