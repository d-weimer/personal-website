import { NavLink, useParams } from "react-router-dom";

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
  const { year } = useParams();
  const selectedYear = year || "2026";

  const activeIndex = years.indexOf(selectedYear);
  const selectedIndex = activeIndex >= 0 ? activeIndex : 0;
  const currentY = selectedIndex * 48;

  return (
    <section className="timeline">
      <div className="timeline__content">
        <div className="timeline__layer timeline__layer--base">
          {years.map((yearItem) => (
            <NavLink
              key={yearItem}
              to={`/work-history/${yearItem}`}
              className="timeline__link"
            >
              {yearItem}
            </NavLink>
          ))}
        </div>

        <div
          className="timeline__layer timeline__layer--bold"
          style={{
            clipPath: `inset(${currentY}px 0px calc(100% - ${currentY + 48}px) 0px)`,
          }}
        >
          {years.map((yearItem) => (
            <NavLink
              key={yearItem}
              to={`/work-history/${yearItem}`}
              className="timeline__link"
              tabIndex={-1}
              aria-hidden="true"
            >
              {yearItem}
            </NavLink>
          ))}
        </div>

        <div
          className="timeline__active-box"
          style={{ transform: `translateY(${currentY}px)` }}
        />
      </div>
    </section>
  );
}

export default Timeline;
