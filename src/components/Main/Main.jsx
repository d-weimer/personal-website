import { Routes, Route } from "react-router-dom";

import "./Main.css";
import About from "../About/About";
import Timeline from "../Timeline/Timeline";
import WorkHistory from "../WorkHistory/WorkHistory";
import SEProjects from "../SEProjects/SEProjects";
import HobbyGameDev from "../HobbyGameDev/HobbyGameDev";
import ContactMe from "../ContactMe/ContactMe";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="about-page">
                <About />
              </div>
            }
          />
          <Route
            path="/work-history"
            element={
              <div className="timeline-page">
                <Timeline />
              </div>
            }
          />
          <Route
            path="/work-history/:year"
            element={
              <div className="work-history-page">
                <Timeline />
                <WorkHistory />
              </div>
            }
          />
          <Route
            path="/software-development"
            element={
              <div className="software-projects-page">
                <SEProjects />
              </div>
            }
          />
          <Route
            path="/hobby-games"
            element={
              <div className="game-development-page">
                <HobbyGameDev />
              </div>
            }
          />
          <Route
            path="/contact-me"
            element={
              <div className="contact-me-page">
                <ContactMe />
              </div>
            }
          />
        </Routes>
      </div>
    </section>
  );
}

export default Main;
