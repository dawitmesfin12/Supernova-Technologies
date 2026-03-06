import type React from "react";

const HowWeWorkPage: React.FC = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>How we work</h2>
          <p>
            A simple, transparent delivery model designed for busy teams at banks, hotels, and
            logistics companies.
          </p>
        </div>

        <div className="nv-features-grid">
          <div className="nv-feature-card nv-glass-surface">
            <h3>1. Discovery & scoping</h3>
            <p>
              We run a focused discovery call, map your workflows, and turn them into a clear
              technical scope and timeline.
            </p>
          </div>
          <div className="nv-feature-card nv-glass-surface">
            <h3>2. Design & build</h3>
            <p>
              We design the UX, iterate with you in short sprints, and keep you in the loop through
              demos and progress updates.
            </p>
          </div>
          <div className="nv-feature-card nv-glass-surface">
            <h3>3. Launch & support</h3>
            <p>
              We handle deployment, handover, and training, then stay on to maintain and grow your
              product as your needs evolve.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowWeWorkPage;

