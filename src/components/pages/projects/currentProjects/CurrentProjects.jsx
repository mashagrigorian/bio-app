import React from "react";
import { useTranslation } from "react-i18next";
import { Routes, Router, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import "./currentProjects.css";
import projects from "./currentProjectsImages";

const CurrentProjects = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-project">
      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project1} />
          <a href="./current-projects/project1" target="_blank">
            <img src={projects.project1} alt="background" className="photo" />{" "}
          </a>
          <h1 className="tag">{t("project1tag")}</h1>{" "}
          <h1 className="description">{t("currentProject1")}</h1>
          <h1 className="funding">{t("funding1")}</h1>
        </picture>
      </article>

      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project2} />
          <a href="./current-projects/project2" target="_blank">
            <img src={projects.project2} alt="background" className="photo" />
          </a>
          <h1 className="tag2">{t("project2tag")}</h1>
          <h1 className="description2">{t("currentProject2")}</h1>
          <h1 className="funding2">{t("funding2")}</h1>
        </picture>
      </article>

      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project3} />
          <a href="./current-projects/project3" target="_blank">
            <img src={projects.project3} alt="background" className="photo" />
          </a>
          <h1 className="tag3">{t("project3tag")}</h1>
          <h1 className="description3">{t("currentProject3")}</h1>
          <h1 className="funding3">{t("funding3")}</h1>
        </picture>
      </article>

      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project4} />
          <a href="./current-projects/project4" target="_blank">
            <img src={projects.project4} alt="background" className="photo" />
          </a>
          <h1 className="tag4">{t("project4tag")}</h1>
          <h1 className="description4">{t("currentProject4")}</h1>
          <h1 className="funding4">{t("funding4")}</h1>
        </picture>
      </article>

      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project5} />
          <a href="./current-projects/project5" target="_blank">
            <img src={projects.project5} alt="background" className="photo" />
          </a>
          <h1 className="tag5">{t("project5tag")}</h1>
          <h1 className="description5">{t("currentProject5")}</h1>
          <h1 className="funding5">{t("funding5")}</h1>
        </picture>
      </article>

      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={projects.project6} />
          <a href="./current-projects/project6" target="_blank">
            <img src={projects.project6} alt="background" className="photo" />
          </a>
          <h1 className="tag6">{t("project6tag")}</h1>
          <h1 className="description6">{t("currentProject6")}</h1>
          <h1 className="funding6">{t("funding6")}</h1>
        </picture>
      </article>
    </div>
  );
};

export default CurrentProjects;
