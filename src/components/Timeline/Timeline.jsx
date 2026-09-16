import { NavLink } from "react-router-dom";

import "./Timeline.css";

const years = [
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];

function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__content">
        {years.map((year) => (
          <NavLink
            key={year}
            to={`/work-history/${year}`}
            className={({ isActive }) =>
              `timeline__link ${isActive ? "timeline__link--active" : ""}`
            }
          >
            {year}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
