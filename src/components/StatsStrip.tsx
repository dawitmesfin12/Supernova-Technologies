import type React from "react";

const stats = [
  { label: "Years of experience", value: "6+" },
  { label: "Projects delivered", value: "40+" },
  { label: "Industries served", value: "6+" },
  { label: "Engineers on the team", value: "8" },
];

const StatsStrip: React.FC = () => {
  return (
    <section className="nv-section nv-stats-strip">
      <div className="nv-container nv-stats-inner">
        {stats.map((item) => (
          <div key={item.label} className="nv-stat-item">
            <div className="nv-stat-value">{item.value}</div>
            <div className="nv-stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;

