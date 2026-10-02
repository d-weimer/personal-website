import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const lastYearRef = useRef("2026");

  const match = location.pathname.match(/\/work-history\/(\d{4})/);
  if (match) {
    lastYearRef.current = match[1];
  }

  const getLinkClass = ({ isActive }) =>
    `navigation__link ${isActive ? "navigation__link_active" : ""}`;

  return (
    <section className="navigation">
      <div className="navigation__links">
        <NavLink to="/" className={getLinkClass}>
          About
        </NavLink>
        <NavLink
          to={`/work-history/${lastYearRef.current}`}
          className={() =>
            `navigation__link ${
              location.pathname.startsWith("/work-history")
                ? "navigation__link_active"
                : ""
            }`
          }
        >
          Timeline
        </NavLink>
        <NavLink to="/software-development" className={getLinkClass}>
          Software
        </NavLink>
        <NavLink to="/game-development" className={getLinkClass}>
          Games
        </NavLink>
        <NavLink to="/contact-me" className={getLinkClass}>
          Contact Me
        </NavLink>
      </div>
    </section>
  );
}

export default Navigation;
