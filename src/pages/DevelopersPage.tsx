import type React from "react";
import henokPhoto from "../assets/DevPhotos/Henok Tesfaye.png";
import mezigebuPhoto from "../assets/DevPhotos/Mezigebu Zeworq.jpg";
import dawitPhoto from "../assets/DevPhotos/Dawit Mesfin.jpg";
import ermiyasPhoto from "../assets/DevPhotos/Ermiyas Mesfin.jpg";
import dianaPhoto from "../assets/DevPhotos/Diana M.jpg";
import anaPhoto from "../assets/DevPhotos/Ana Woldu.jpg";

const developers = [
  { name: "Mezigebu Zeworq", role: "CEO & Owner", photo: mezigebuPhoto },
  { name: "Dawit Mesfin", role: "CTO & Core Developer", photo: dawitPhoto },
  { name: "Henok Tesfaye", role: "Full‑Stack Developer", photo: henokPhoto },
  { name: "Ermiyas Mesfin", role: "Mobile Developer", photo: ermiyasPhoto },
  { name: "Yibela D", role: "QA & Automation Engineer", photo: undefined },
  { name: "Diana M", role: "Product Designer", photo: dianaPhoto },
  { name: "Ana Woldu", role: "Project Manager", photo: anaPhoto },
  { name: "Yilkal G", role: "DevOps Engineer", photo: undefined },
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
                {dev.photo ? (
                  <img src={dev.photo} alt={dev.name} />
                ) : (
                  <span className="nv-dev-avatar-initials">SN</span>
                )}
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

