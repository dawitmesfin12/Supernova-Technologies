import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="nv-footer">
      <div className="nv-container nv-footer-inner">
        <div className="nv-footer-col">
          <h4>Supernova Technologies</h4>
          <p>Custom software development studio.</p>
        </div>
        <div className="nv-footer-col">
          <div className="nv-footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="nv-footer-col nv-footer-meta">
          <span>
            Copyright © {new Date().getFullYear()} Supernova Technologies. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

