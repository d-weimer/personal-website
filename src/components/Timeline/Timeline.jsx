import { NavLink } from "react-router-dom";

import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__content">
        <NavLink to="/work-history/2014" className="timeline__link">
          2014
        </NavLink>
        <NavLink to="/work-history/2015" className="timeline__link">
          2015
        </NavLink>
        <NavLink to="/work-history/2016" className="timeline__link">
          2016
        </NavLink>
        <NavLink to="/work-history/2017" className="timeline__link">
          2017
        </NavLink>
        <NavLink to="/work-history/2018" className="timeline__link">
          2018
        </NavLink>
        <NavLink to="/work-history/2019" className="timeline__link">
          2019
        </NavLink>
        <NavLink to="/work-history/2020" className="timeline__link">
          2020
        </NavLink>
        <NavLink to="/work-history/2021" className="timeline__link">
          2021
        </NavLink>
        <NavLink to="/work-history/2022" className="timeline__link">
          2022
        </NavLink>
        <NavLink to="/work-history/2023" className="timeline__link">
          2023
        </NavLink>
        <NavLink to="/work-history/2024" className="timeline__link">
          2024
        </NavLink>
        <NavLink to="/work-history/2025" className="timeline__link">
          2025
        </NavLink>
        <NavLink to="/work-history/2026" className="timeline__link">
          2026
        </NavLink>
      </div>
    </section>
  );
}

export default Timeline;
