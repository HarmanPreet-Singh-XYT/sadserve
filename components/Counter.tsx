"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  plain = false,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  plain?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    if (reduce) {
      raf = requestAnimationFrame(() => setVal(to));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setVal(Math.round(to * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {plain ? val : val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
