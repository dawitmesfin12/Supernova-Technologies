import type React from "react";

const Industries: React.FC = () => {
  return (
    <section id="industries" className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>Industries we serve</h2>
          <p>
            We specialize in a focused set of industries so we can move fast, speak your language,
            and ship what your team actually needs.
          </p>
        </div>

        <div className="nv-features-grid">
          <div className="nv-feature-card nv-glass-surface">
            <h3>Banking & Financial Services</h3>
            <p>
              Secure client portals, loan and KYC workflows, internal dashboards, and integrations
              with core banking and payment systems.
            </p>
          </div>

          <div className="nv-feature-card nv-glass-surface">
            <h3>Hotels & Hospitality</h3>
            <p>
              Booking engines, property management dashboards, guest experience apps, and channel
              manager integrations to keep occupancy and revenue high.
            </p>
          </div>

          <div className="nv-feature-card nv-glass-surface">
            <h3>Import, Export & Logistics</h3>
            <p>
              Shipment tracking portals, warehouse and inventory tools, and automation around
              customs, documentation, and supplier coordination.
            </p>
          </div>

          <div className="nv-feature-card nv-glass-surface">
            <h3>Hospitals & Clinics</h3>
            <p>
              Patient-facing portals, appointment and admission systems, internal workflow tools,
              and analytics that fit into existing healthcare processes.
            </p>
          </div>

          <div className="nv-feature-card nv-glass-surface">
            <h3>Pharmaceutical wholesalers</h3>
            <p>
              Ordering platforms, inventory and expiry tracking, and integrations with accounting and
              ERP systems to keep stock and compliance under control.
            </p>
          </div>

          <div className="nv-feature-card nv-glass-surface">
            <h3>Universities, Colleges & Schools</h3>
            <p>
              Student information systems, online portals, learning management tools, and automation
              around registration, grading, and communication with students and parents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

