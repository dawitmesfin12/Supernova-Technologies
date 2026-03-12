import SignupWidget from "./SignupWidget";

const Hero = () => {
  return (
    <section className="nv-hero">
      <div className="nv-container nv-hero-grid">
        <div className="nv-hero-copy">
          <h1>
            We build software
            <span className="nv-accent"> that runs your business.</span>
          </h1>
          <p className="nv-hero-subtitle">
            Supernova Technologies is a small, senior team that designs, develops, and maintains
            digital products for banks, hotels, import/export companies, hospitals, schools, and
            international clients.
          </p>
          <ul className="nv-hero-points">
            <li>Custom web platforms, portals, dashboards, and public websites</li>
            <li>End‑to‑end project delivery: discovery, UX/UI design, development, and DevOps</li>
            <li>Ongoing support so your systems stay secure, fast, and up to date</li>
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

