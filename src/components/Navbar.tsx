import { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, NavLink, useNavigate } from "react-router-dom";
import supernovaLogo from "../assets/supernova-logo.svg";
import { navLinks } from "../data/navigation";
import TopBar from "./TopBar";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="nv-navbar">
      <TopBar />
      <div className="nv-container nv-navbar-inner">
        <div className="nv-brand">
          <Link to="/" className="nv-logo-placeholder" aria-label="Supernova Technologies home">
            <img src={supernovaLogo} alt="Supernova Technologies logo" className="nv-logo-image" />
          </Link>
        </div>
        <nav className="nv-nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nv-nav-link${isActive ? " nv-nav-link-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nv-nav-actions">
          <button className="nv-btn nv-btn-outline nv-nav-cta" onClick={() => navigate("/talk-to-us")}>
            Talk to us
          </button>
          <IconButton
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
            className="nv-nav-toggle"
            size="small"
          >
            <MenuRoundedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 240 } }}
      >
        <List className="nv-nav-mobile">
          {navLinks.map((link) => (
            <ListItemButton
              key={link.to}
              component={NavLink}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;

