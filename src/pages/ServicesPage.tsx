import Features from "../components/Features";

const ServicesPage = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>Services</h2>
          <p>
            We combine product thinking, engineering, and long‑term support to ship software that
            actually runs your business – not just a demo.
          </p>
        </div>

        <section className="nv-section">
          <Features />
        </section>

        <section className="nv-section">
          <div className="nv-about-grid">
            <article>
              <h3>End‑to‑end product delivery</h3>
              <p>
                We can take you from idea to launch: discovery, UX/UI design, architecture, frontend
                and backend development, integrations, infrastructure, and monitoring. For each
                project we assign a compact team that stays with you from start to finish so context
                is never lost.
              </p>
            </article>

            <article>
              <h3>Flexible engagement models</h3>
              <p>
                You can engage us for a fixed‑scope project, augment your team with a few senior
                engineers, or ask us to own an entire product line. We work with banks, hotels,
                import/export companies, hospitals, universities, and public figures, adapting the
                process and communication style to each client.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;

