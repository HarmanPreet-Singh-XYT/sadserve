"use client";

import { useEffect, useRef, useState } from "react";

const INK = "#16140f";
const PAPER = "#f7f3ea";
const UNIT = "#ece5d4";

/**
 * The mascot: SAD-01, a server rack having a bad day.
 * - eyes follow the cursor
 * - click to "reboot": it cheers up for a few seconds
 * - `mood="happy"` renders the recovered version (static)
 */
export function SadServer({
  className = "",
  interactive = false,
  mood = "sad",
}: {
  className?: string;
  interactive?: boolean;
  mood?: "sad" | "happy";
}) {
  const [poked, setPoked] = useState(false);
  const svg = useRef<SVGSVGElement>(null);
  const eyeL = useRef<SVGGElement>(null);
  const eyeR = useRef<SVGGElement>(null);
  const happy = mood === "happy" || poked;

  useEffect(() => {
    if (!interactive) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = svg.current?.getBoundingClientRect();
        if (!r) return;
        const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2.2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * 0.3)) / (window.innerHeight / 2.2)));
        const t = `translate(${(dx * 6).toFixed(1)}px, ${(dy * 4.5).toFixed(1)}px)`;
        if (eyeL.current) eyeL.current.style.transform = t;
        if (eyeR.current) eyeR.current.style.transform = t;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive]);

  useEffect(() => {
    if (!poked) return;
    const id = setTimeout(() => setPoked(false), 3600);
    return () => clearTimeout(id);
  }, [poked]);

  const art = (
    <svg
      ref={svg}
      viewBox="0 0 540 570"
      className={`${className} ${poked ? "ss-poked" : ""}`}
      role={interactive ? undefined : "img"}
      aria-hidden={interactive ? true : undefined}
      aria-label={interactive ? undefined : happy ? "Illustration of a recovered, smiling server rack" : "Illustration of a server rack looking sad, with smoke rising and a tear rolling down"}
    >
      <ellipse cx="262" cy="530" rx="200" ry="13" fill="rgba(22,20,15,.13)" />

      {!happy &&
        [0, 1, 2].map((i) => (
          <path
            key={i}
            className="ss-smoke"
            style={{ animationDelay: `${i * 1.3}s` }}
            d={`M${190 + i * 62} 84 c-11 -14 11 -24 0 -38 c-9 -12 9 -21 2 -32`}
            fill="none"
            stroke={INK}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}

      <g className={happy ? "ss-hop" : "ss-shiver"}>
        <rect x="132" y="106" width="270" height="388" rx="22" fill={INK} />
        <rect x="118" y="92" width="270" height="388" rx="22" fill={PAPER} stroke={INK} strokeWidth="5" />
        <rect x="150" y="480" width="44" height="18" rx="4" fill={INK} />
        <rect x="312" y="480" width="44" height="18" rx="4" fill={INK} />

        {/* face */}
        <rect x="140" y="114" width="226" height="134" rx="12" fill={UNIT} stroke={INK} strokeWidth="4" />
        {happy ? (
          <>
            <path d="M190 182 Q208 160 226 182" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />
            <path d="M280 182 Q298 160 316 182" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />
            <circle cx="186" cy="204" r="9" fill="#e8401c" opacity=".28" />
            <circle cx="320" cy="204" r="9" fill="#e8401c" opacity=".28" />
            <path d="M222 206 Q253 234 284 206" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <g ref={eyeL} style={{ transition: "transform 90ms linear" }}>
              <g className="ss-blink">
                <circle cx="208" cy="176" r="14" fill={INK} />
                <circle cx="212" cy="172" r="4.5" fill={PAPER} />
              </g>
            </g>
            <g ref={eyeR} style={{ transition: "transform 90ms linear" }}>
              <g className="ss-blink">
                <circle cx="298" cy="176" r="14" fill={INK} />
                <circle cx="302" cy="172" r="4.5" fill={PAPER} />
              </g>
            </g>
            <path d="M184 154 L228 140" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <path d="M278 140 L322 154" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <path d="M222 224 Q253 200 284 224" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <g className="ss-tear" style={{ transformOrigin: "196px 200px" }}>
              <path d="M196 196 C189 207 189 215 196 215 C203 215 203 207 196 196Z" fill="#8ec5f5" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            </g>
          </>
        )}

        {/* drive bays */}
        <rect x="140" y="264" width="226" height="86" rx="10" fill={UNIT} stroke={INK} strokeWidth="4" />
        {[0, 1, 2, 3].map((i) => {
          const x = 156 + i * 52;
          const bad = i === 2 && !happy;
          return (
            <g key={i}>
              <rect x={x} y="278" width="42" height="58" rx="5" fill={PAPER} stroke={INK} strokeWidth="3" />
              <line x1={x + 9} y1="318" x2={x + 33} y2="318" stroke={INK} strokeWidth="3" strokeLinecap="round" />
              <circle cx={x + 10} cy="290" r="4.5" fill={bad ? "#e8401c" : "#3fae5a"} stroke={INK} strokeWidth="2" className={bad ? "ss-led" : undefined} />
            </g>
          );
        })}

        {/* vents */}
        <rect x="140" y="366" width="226" height="90" rx="10" fill={UNIT} stroke={INK} strokeWidth="4" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1="160" y1={384 + i * 12} x2="296" y2={384 + i * 12} stroke={INK} strokeWidth="3" strokeLinecap="round" />
        ))}
        <rect x="312" y="382" width="42" height="26" rx="4" fill={happy ? "#3fae5a" : INK} />
        <text x="333" y="400" textAnchor="middle" fontSize="12" fontFamily="var(--font-geist-mono), monospace" fill={happy ? INK : "#efeadf"} fontWeight="600">
          {happy ? "200" : "5xx"}
        </text>
        <circle cx="333" cy="434" r="9" fill={PAPER} stroke={INK} strokeWidth="3" />
        <line x1="333" y1="428" x2="333" y2="434" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* cable: plugged back in when happy */}
      {happy ? (
        <>
          <path d="M388 300 C428 300 432 330 402 352" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
          <rect x="384" y="286" width="14" height="28" rx="3" fill={INK} />
        </>
      ) : (
        <>
          <path d="M388 300 C446 300 452 366 418 404 C390 436 444 474 470 508" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
          <g transform="translate(466 508) rotate(-24)">
            <rect x="-4" y="-13" width="36" height="26" rx="5" fill={INK} />
            <rect x="32" y="-9" width="16" height="5" rx="1" fill={INK} />
            <rect x="32" y="4" width="16" height="5" rx="1" fill={INK} />
          </g>
          <path className="ss-spark" d="M512 498 l7 -11 l4 8 l8 -13" fill="none" stroke="#e8401c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );

  if (!interactive) return art;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setPoked(true)}
        aria-pressed={poked}
        aria-label="Reboot SAD-01, the sad server"
        className="block w-full cursor-pointer rounded-2xl outline-offset-4 transition-transform duration-150 active:scale-[0.985]"
      >
        {art}
      </button>
      <span
        aria-live="polite"
        className={`font-hand pointer-events-none absolute left-1/2 top-[3%] -translate-x-1/2 -rotate-2 whitespace-nowrap rounded-xl bg-paper px-4 py-1.5 text-[1.5rem] leading-none text-ink ring-1 ring-ink transition-[opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${poked ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        {poked ? "turned it off and on again. fixed." : ""}
      </span>
    </div>
  );
}

/** Small ink mark for the nav. */
export function MarkInk({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="4" width="22" height="24" rx="5" fill="#16140f" />
      <circle cx="12" cy="14" r="2.2" fill="#efeadf" />
      <circle cx="20" cy="14" r="2.2" fill="#efeadf" />
      <path d="M11.5 22c1.6-2 7.4-2 9 0" stroke="#efeadf" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="24.5" cy="6.5" r="3" fill="#e8401c" stroke="#efeadf" strokeWidth="1.5" />
    </svg>
  );
}
