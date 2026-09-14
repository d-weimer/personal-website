import { Routes, Route } from "react-router-dom";

import "./Main.css";
import About from "../About/About";
import WorkHistory from "../WorkHistory/WorkHistory";
import SEProjects from "../SEProjects/SEProjects";
import HobbyGameDev from "../HobbyGameDev/HobbyGameDev";
import ContactMe from "../ContactMe/ContactMe";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/software-development" element={<SEProjects />} />
          <Route path="/hobby-games" element={<HobbyGameDev />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </section>
  );
}

export default Main;
