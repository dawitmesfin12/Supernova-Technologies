import type React from "react";

const developers = [
  { name: "Henok Tesfaye", role: "Full‑Stack Developer" },
  { name: "Mezigebu Zeworq", role: "Backend Developer" },
  { name: "Dawit Mesfin", role: "Frontend Developer" },
  { name: "Ermiyas Mesfin", role: "Mobile Developer" },
  { name: "Yibela D", role: "QA & Automation Engineer" },
  { name: "Diana M", role: "Product Designer" },
  { name: "Ana Woldu", role: "Project Manager" },
  { name: "Yilkal G", role: "DevOps Engineer" },
];

const DevelopersPage: React.FC = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>Meet our developers</h2>
          <p>
            A compact, senior team that designs, builds, and ships software for banks, hotels,
            import/export, healthcare, and education.
          </p>
        </div>

        <div className="nv-dev-grid">
          {developers.map((dev, index) => (
            <article key={dev.name + index} className="nv-dev-card">
              <div className="nv-dev-avatar">
                <span className="nv-dev-avatar-initials">SN</span>
              </div>
              <h3 className="nv-dev-name">{dev.name}</h3>
              <p className="nv-dev-focus">{dev.role}</p>
              <div className="nv-dev-tags">
                <span className="nv-dev-tag">Web</span>
                <span className="nv-dev-tag">Apps</span>
                <span className="nv-dev-tag">Integrations</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DevelopersPage;

