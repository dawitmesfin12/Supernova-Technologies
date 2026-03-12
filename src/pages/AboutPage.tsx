import type React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>About Supernova Technologies</h2>
          <p>
            Supernova Technologies exists to give Ethiopian institutions and growing businesses
            modern, reliable software built locally instead of relying only on expensive imported
            systems.
          </p>
        </div>

        <section className="nv-section">
          <div className="nv-about-grid">
            <article>
              <h3>Our mission</h3>
              <p>
                Supernova Technologies is a company to primarily give solution for indigenous
                companies in Ethiopia. Because we have made a research and our institutions, banks,
                universities and other organizations often rely on imported softwares with expensive
                deals. We exist to offer modern, reliable systems that fit the local context and can
                be supported by engineers who understand the environment.
              </p>
            </article>

            <article>
              <h3>Our vision</h3>
              <p>
                Our mission and vision are around empowering Ethiopian institutions with affordable,
                high‑quality software made by local experts. We want banks, universities, hospitals,
                hotels, and growing businesses to run on solutions crafted close to their needs
                instead of generic, imported tools – and to show that world‑class software can be
                built from Addis.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;

