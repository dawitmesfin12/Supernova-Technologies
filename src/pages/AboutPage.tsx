import { developers } from "../data/developers";

const AboutPage = () => {
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

        <section className="nv-section">
          <div className="nv-section-header">
            <h2>Our team</h2>
            <p>
              A compact team of senior engineers, designers, and project leaders who stay close to
              your product instead of rotating every few weeks.
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
        </section>
      </div>
    </main>
  );
};

export default AboutPage;

