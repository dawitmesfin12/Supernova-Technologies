const HowWeWorkPage = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>How we work</h2>
          <p>
            A simple, transparent delivery model designed for busy teams at banks, hotels,
            import/export companies, hospitals, schools, and growing digital businesses.
          </p>
        </div>

        <section className="nv-section nv-steps">
          <div className="nv-steps-row">
            <article className="nv-step-card">
              <div className="nv-step-number">1</div>
              <h3>Discovery & scoping</h3>
              <p>
                We start with a short discovery phase where we listen first. Together we map your
                current workflows, pain points, and goals, then translate them into a clear backlog,
                milestones, and budget. By the end of this step you know exactly what we will build,
                what it will solve, and when you can expect to see value.
              </p>
            </article>

            <div className="nv-step-arrow">→</div>

            <article className="nv-step-card">
              <div className="nv-step-number">2</div>
              <h3>Design & build</h3>
              <p>
                We design the UX and architecture, then build in short, visible iterations. You get
                regular demos, can try features early, and give feedback before we move on. Our team
                handles frontend, backend, integrations, and infrastructure so you always have one
                accountable partner.
              </p>
            </article>

            <div className="nv-step-arrow">→</div>

            <article className="nv-step-card">
              <div className="nv-step-number">3</div>
              <h3>Launch & support</h3>
              <p>
                When we go live, we take care of deployment, monitoring, and handover so your team
                is comfortable running the new system. After launch we stay available for
                maintenance, performance tuning, new features, and support – so the software keeps
                matching your business as it grows.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HowWeWorkPage;

