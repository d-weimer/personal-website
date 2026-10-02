import { NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const getLinkClass = ({ isActive }) =>
    `navigation__link ${isActive ? "navigation__link_active" : ""}`;

  return (
    <section className="navigation">
      <div className="navigation__links">
        <NavLink to="/" className={getLinkClass}>
          About
        </NavLink>
        <NavLink to="/work-history" className={getLinkClass}>
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
