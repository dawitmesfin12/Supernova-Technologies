import SignupWidget from "../components/SignupWidget";

const ContactPage = () => {
  return (
    <main className="nv-section">
      <div className="nv-container nv-hero-grid">
        <div className="nv-hero-copy">
          <h1>
            Talk to{" "}
            <span className="nv-accent">
              Supernova<span> Technologies</span>
            </span>
          </h1>
          <p className="nv-hero-subtitle">
            Tell us about your bank, hotel, or import/export business and we&apos;ll propose a
            concrete way software can move the needle for you.
          </p>
          <ul className="nv-hero-points">
            <li>Senior engineering team, no juniors learning on your time</li>
            <li>Clear fixed-scope projects or ongoing retainers</li>
            <li>We reply to all inquiries within one business day</li>
          </ul>
        </div>
        <div className="nv-hero-signup">
          <SignupWidget variant="card" />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

