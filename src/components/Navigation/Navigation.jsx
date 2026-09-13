import { NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__links">
        <NavLink to="/" className="navigation__link">
          Home
        </NavLink>
        <NavLink to="/work-history" className="navigation__link">
          Timeline
        </NavLink>
        <NavLink to="/software-development" className="navigation__link">
          Software
        </NavLink>
        <NavLink to="/hobby-games" className="navigation__link">
          Games
        </NavLink>
        <NavLink to="/contact-me" className="navigation__link">
          Contact Me
        </NavLink>
      </div>
    </section>
  );
}

export default Navigation;
