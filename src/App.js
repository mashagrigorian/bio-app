import React, { createContext, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/pages/contacts/main.scss";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/pages/About";
import Abilities from "./components/pages/Abilities";
import Priorities from "./components/pages/Priorities";
import Team from "./components/pages/team/Team";
import Partners from "./components/pages/partners/Partners";
import Accreditations from "./components/pages/ourAchievements/Accreditations";
import CapacityAssessment from "./components/pages/CapacityAssessment";
import CompletedProjects from "./components/pages/projects/CompletedProjects";
import CurrentProjects from "./components/pages/projects/CurrentProjects";
import PlannedProjects from "./components/pages/projects/PlannedProjects";
import Beneficiaries from "./components/pages/Beneficiaries";
import ProgramsProcurement from "./components/pages/ProgramsProcurement";
import OfficeNeeds from "./components/pages/OfficeNeeds";
import Announcements from "./components/pages/Announcements";
import News from "./components/pages/News";
import PressAboutUs from "./components/pages/PressAboutUs";
import { VideoGallery } from "./components/pages/VideoGallery";
import Contacts from "./components/pages/contacts/Contacts";
import Main from "./components/main/Main";
import RingLoader from "react-spinners/RingLoader";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <>
        <div className="App">
          {loading ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <RingLoader size={60} color={"#123abc"} loading={loading} />
            </div>
          ) : (
            <Suspense fallback={null}>
              <Router>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Header />
                  </div>

                  <div style={{ marginTop: "5%" }}>
                    <Routes>
                      <Route path="/" element={<Main />} />
                      <Route path="/about/history" element={<About />} />
                      <Route
                        path="/about/our-capabilities"
                        element={<Abilities />}
                      />
                      <Route
                        path="/about/our-priorities"
                        element={<Priorities />}
                      />
                      <Route path="/about/our-team" element={<Team />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route
                        path="/achievements/accreditations"
                        element={<Accreditations />}
                      />
                      <Route
                        path="/achievements/capacity-assessment"
                        element={<CapacityAssessment />}
                      />
                      <Route
                        path="/projects/completed-projects"
                        element={<CompletedProjects />}
                      />
                      <Route
                        path="/projects/current-projects"
                        element={<CurrentProjects />}
                      />
                      <Route
                        path="/projects/planned-projects"
                        element={<PlannedProjects />}
                      />
                      <Route
                        path="/results/beneficiaries"
                        element={<Beneficiaries />}
                      />
                      <Route
                        path="/procurement/procurement-under-the-programs"
                        element={<ProgramsProcurement />}
                      />
                      <Route
                        path="/procurement/procurement-for-the-office-needs"
                        element={<OfficeNeeds />}
                      />
                      <Route
                        path="/procurement/announcements"
                        element={<Announcements />}
                      />
                      <Route path="/news/news" element={<News />} />
                      <Route
                        path="/news/the-press-about-us"
                        element={<PressAboutUs />}
                      />
                      <Route
                        path="/news/media-gallery"
                        element={<VideoGallery />}
                      />
                      <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <Footer />
                  </div>
                </div>
              </Router>
            </Suspense>
          )}
        </div>
      </>
    </>
  );
}

export default App;
