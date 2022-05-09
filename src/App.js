import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import NewsPage from "./components/news/NewsPage";
import Footer from "./components/footer/Footer";
import About from "./components/pages/About";
import Abilities from "./components/pages/Abilities";
import Priorities from "./components/pages/Priorities";
import Team from "./components/pages/Team";
import Partners from "./components/pages/Partners";
import Accreditations from "./components/pages/Accreditations";
import CapacityAssessment from "./components/pages/CapacityAssessment";
import CompletedProjects from "./components/pages/CompletedProjects";
import CurrentProjects from "./components/pages/CurrentProjects";
import PlannedProjects from "./components/pages/PlannedProjects";
import Beneficiaries from "./components/pages/Beneficiaries";
import ProgramsProcurement from "./components/pages/ProgramsProcurement";
import OfficeNeeds from "./components/pages/OfficeNeeds";
import Announcements from "./components/pages/Announcements";
import News from "./components/pages/News";
import PressAboutUs from "./components/pages/PressAboutUs";
import { VideoGallery } from "./components/pages/VideoGallery";
import Contacts from "./components/pages/Contacts";
import Main from "./components/main/Main";
// import Languages from "./components/header/Languages";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Router>
          {/* <Languages /> */}
          <Header />
          <Routes>
            {/* <Route path="/" element={<Slider />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/about/history" element={<About />} />
            <Route path="/about/our-capabilities" element={<Abilities />} />
            <Route path="/about/our-priorities" element={<Priorities />} />
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
            <Route path="/results/beneficiaries" element={<Beneficiaries />} />
            <Route
              path="/custom/procurement-under-the-programs"
              element={<ProgramsProcurement />}
            />
            <Route
              path="/custom/procurement-for-the-office-needs"
              element={<OfficeNeeds />}
            />
            <Route path="/custom/announcements" element={<Announcements />} />
            <Route path="/news/news" element={<News />} />
            <Route path="/news/the-press-about-us" element={<PressAboutUs />} />
            <Route path="/news/video-gallery" element={<VideoGallery />} />
            <Route path="/contact/contacts" element={<Contacts />} />
          </Routes>
          {/* <NewsPage /> */}
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
