"use client";

import type { MouseEvent, ReactNode } from "react";

export function Card({
  children,
  className = "",
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
}) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div onMouseMove={onMove} className={`card ${lift ? "lift" : ""} ${className}`}>
      {children}
    </div>
  );
}
