import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutUsLabel: "About us",
        history: "EPIU in Brief",
        ourCapabilities: "Our capacities",
        ourPriorities: "Our priorities",
        ourTeam: "Our Team",
        ourPartners: "Our Partners",
        ourAchievements: "Our Achievements",
        accreditations: "Our Accreditations",
        ourCapacities: "Evalution of Our Capacities",
        projects: "Project Portfolio",
        implementedProjects: "Implemented Projects",
        currentProjects: "Current Projects",
        plannedProjects: "Planned Projects",
        results: "Deliverables",
        projectStakeholders: "Project Stakeholders",
        procurements: "Procurement",
        procurementForProjects: "Procurement for Projects",
        officeProcurement: "Procurement for EPIU",
        announcements: "Announcements",
        news: "Newsroom",
        allNews: "News",
        pressAboutUs: "Media Coverage",
        mediaGallery: "Media Gallery",
        contact: "Contact",
        letterExample: "Example of a letter",
        ourAddress: "Our address",
        contacts: "Contacts",
        hotline: "Hotline",
        contactWithUs: "Contact Us",
        street: "129 Armenakyan Street, Yerevan",
        copyright: "Copyright @ 2022 All rights reserved.",
      },
    },
    rus: {
      translation: {
        aboutUsLabel: "О нас",
        history: "История",
        ourCapabilities: "Наши возможности",
        ourPriorities: "Наши приоритеты",
        ourTeam: "Наша команда",
        ourPartners: "Наши партнеры",
        ourAchievements: "Наши достижения",
        accreditations: "Наши аккредитации",
        ourCapacities: "Оценка наших возможностей",
        projects: "Проекты",
        implementedProjects: "Реализованные проекты",
        currentProjects: "Текущие проекты",
        plannedProjects: "Планируемые проекты",
        results: "Результаты",
        projectStakeholders: "Бенефициары проектов",
        procurements: "Закупки",
        procurementForProjects: "Закупки для проектов",
        officeProcurement: "Закупки для БРЭП",
        announcements: "Объявления",
        news: "Ньюзрум",
        allNews: "Новости",
        pressAboutUs: "СМИ о Нас",
        mediaGallery: "Медиягалерея",
        contact: "Контакты",
        letterExample: "Пример письма",
        ourAddress: "Наш Адрес",
        contacts: "Контакты",
        hotline: "Горячая линия",
        contactWithUs: "Связаться с нами",
        street: "улица Арменакяна 129, Ереван",
        copyright: "Copyright © 2022 Все права защищены.",
      },
    },
    arm: {
      translation: {
        aboutUsLabel: "Մեր մասին",
        history: "Պատմություն",
        ourCapabilities: "Մեր կարողությունները",
        ourPriorities: "Մեր առաջնահերթությունները",
        ourTeam: "Մեր թիմը",
        ourPartners: "Մեր գործընկերները",
        ourAchievements: "Մեր ձեռքբերումները",
        accreditations: "Մեր հավատարմագրումները",
        ourCapacities: "Մեր կարողությունների գնահատումները",
        projects: "Ծրագրեր",
        implementedProjects: "Իրականացված",
        currentProjects: "Ընթացիկ",
        plannedProjects: "Նախատեսվող",
        results: "Արդյունքներ",
        projectStakeholders: "Շահառուներ",
        procurements: "Գնումներ",
        procurementForProjects: "Ծրագրերի շրջանակներում իրականացվող գնումներ",
        officeProcurement: "Գնումներ գրասենյակի կարիքների համար",
        announcements: "Հայտարարություններ",
        news: "Նորություններ",
        allNews: "Լրահոս",
        pressAboutUs: "Մամուլը մեր մասին",
        mediaGallery: "Տեսադարան",
        contact: "Կապ",
        letterExample: "Նամակի ձև",
        ourAddress: "Մեր հասցեն",
        contacts: "Կոնտակտներ",
        hotline: "Թեժ գիծ",
        contactWithUs: "Կապ մեզ հետ",
        street: "Արմենակյան 129, Երևան",
        copyright:
          "Հեղինակային իրավունք @2022 Բոլոր իրավունքները պաշտպանված են:",
      },
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
