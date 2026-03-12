import { useEffect, useRef, useState } from "react";
import { stats } from "../data/stats";

const DURATION_MS = 2000;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(progress);

      setDisplay(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <div ref={ref} className="nv-stat-value">
      {display}
      {suffix}
    </div>
  );
}

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
