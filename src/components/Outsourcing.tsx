import { platforms, outsourcingStats } from "../data/outsourcing";
import CountUp from "./CountUp";

const Outsourcing = () => {
  return (
    <section className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>International projects for Ethiopian developers</h2>
          <p>
            We source and deliver software projects from global freelancing platforms, giving
            Ethiopian engineers the opportunity to work on world-class products while earning
            competitive international rates.
          </p>
        </div>

        <div className="nv-outsource-stats">
          {outsourcingStats.map((item) => (
            <div key={item.label} className="nv-stat-item nv-stat-item--accent">
              <CountUp target={item.target} suffix={item.suffix} />
              <div className="nv-stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="nv-platform-grid">
          {platforms.map((p) => (
            <div key={p.name} className="nv-platform-card">
              <h3>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="nv-platform-link">
                  {p.name}
                </a>
              </h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outsourcing;
