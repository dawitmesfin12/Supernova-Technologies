import type React from "react";
import SignupWidget from "./SignupWidget";

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="nv-hero">
      <div className="nv-container nv-hero-grid">
        <div className="nv-hero-copy">
          <h1>
            Enterprise-grade software,
            <span className="nv-accent"> delivered like a startup.</span>
          </h1>
          <p className="nv-hero-subtitle">
            Supernova Technologies designs, builds, and ships custom software for banks, hotels,
            import/export businesses, and global clients from platforms like Upwork and Toptal.
          </p>
          <ul className="nv-hero-points">
            <li>Custom web apps, portals, and integrations</li>
            <li>Specialized teams for finance, hospitality, and logistics</li>
            <li>On-time delivery, clear communication, and long-term support</li>
          </ul>
        </div>

        <div className="nv-hero-signup">
          <SignupWidget variant="card" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

