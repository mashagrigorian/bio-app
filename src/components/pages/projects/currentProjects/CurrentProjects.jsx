import React from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./currentProjects.css";
import projects from "./currentProjectsImages";

const CurrentProjects = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <img src={projects.project1} alt="" className="photo" />
      <img src={projects.project2} alt="" className="photo" />
      <img src={projects.project3} alt="" className="photo" />
      <img src={projects.project4} alt="" className="photo" />
      <img src={projects.project5} alt="" className="photo" />
      <img src={projects.project6} alt="" className="photo" />
    </div>
  );
};

export default CurrentProjects;
