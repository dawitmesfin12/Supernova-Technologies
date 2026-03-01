import { useEffect, useRef, useState } from "react";

const DURATION_MS = 3500;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
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
};

export default CountUp;
