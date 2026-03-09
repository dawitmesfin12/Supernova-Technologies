import type React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import supernovaLogo from "../assets/Component 1.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="nv-navbar">
      <div className="nv-container nv-navbar-inner">
        <div className="nv-brand">
          <Link to="/" className="nv-logo-placeholder" aria-label="Supernova Technologies home">
            <img src={supernovaLogo} alt="Supernova Technologies logo" className="nv-logo-image" />
          </Link>
        </div>
        <nav className="nv-nav-links">
          <NavLink
            to="/services"
            className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/industries"
            className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
          >
            Industries
          </NavLink>
          <NavLink
            to="/how-we-work"
            className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
          >
            How we work
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
          >
            Developers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
          >
            Contact
          </NavLink>
        </nav>
        <button className="nv-btn nv-btn-outline" onClick={() => navigate("/talk-to-us")}>
          Talk to us
        </button>
      </div>
    </header>
  );
};

export default Navbar;

