import { stats } from "../data/stats";
import CountUp from "./CountUp";

const StatsStrip = () => {
  return (
    <section className="nv-section nv-stats-strip">
      <div className="nv-container nv-stats-inner">
        {stats.map((item) => (
          <div key={item.label} className="nv-stat-item">
            <CountUp target={item.target} suffix={item.suffix} />
            <div className="nv-stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
