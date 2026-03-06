import type React from "react";

const Features: React.FC = () => {
  return (
    <section id="services" className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>What we build</h2>
          <p>
            From greenfield products to modernizing legacy systems, we become your remote product
            team.
          </p>
        </div>
        <div className="nv-features-grid">
          <div className="nv-feature-card nv-glass-surface">
            <h3>Custom web platforms</h3>
            <p>
              Secure portals, dashboards, and internal tools tailored for banks, hotels, and
              logistics companies.
            </p>
          </div>
          <div className="nv-feature-card nv-glass-surface">
            <h3>Staff augmentation</h3>
            <p>
              Senior engineers and product teams that plug into your existing workflow via Upwork,
              Toptal, or direct contract.
            </p>
          </div>
          <div className="nv-feature-card nv-glass-surface">
            <h3>Ongoing support</h3>
            <p>
              Long-term maintenance, performance upgrades, and new feature development as your
              business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

