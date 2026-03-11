import type React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>About Supernova Technologies</h2>
          <p>
            Supernova Technologies is focused on building software solutions for indigenous
            companies in Ethiopia and beyond.
          </p>
        </div>

        <div className="nv-features-grid">
          <article className="nv-feature-card">
            <h3>Our mission</h3>
            <p>
              Supernova Technologies is a company to primarily give solution for indigenous
              companies in Ethiopia. Because we have made a research and our institutions, banks,
              universities and other organizations often rely on imported softwares with expensive
              deals. We exist to offer modern, reliable systems that fit the local context.
            </p>
          </article>

          <article className="nv-feature-card">
            <h3>Our vision</h3>
            <p>
              Our mission and vision are around empowering Ethiopian institutions with affordable,
              high‑quality software made by local experts. We want banks, universities, hospitals,
              hotels, and growing businesses to run on solutions crafted close to their needs
              instead of generic, imported tools.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

