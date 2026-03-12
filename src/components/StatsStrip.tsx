import { stats } from "../data/stats";

const StatsStrip = () => {
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

