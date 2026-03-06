import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="nv-footer">
      <div className="nv-container nv-footer-inner">
        <div>
          <h4>Supernova Technologies</h4>
          <p>Custom software development studio.</p>
        </div>
        <div className="nv-footer-meta">
          <span>© {new Date().getFullYear()} Supernova Technologies</span>
          <span>Let&apos;s build something stellar together.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

