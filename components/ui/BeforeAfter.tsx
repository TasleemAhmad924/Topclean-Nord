"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";

export function BeforeAfter({
  before,
  after,
  label,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 60vw, 100vw",
  position = "center",
}: {
  before: string;
  after: string;
  label: string;
  aspect?: string;
  sizes?: string;
  position?: string;
}) {
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchedRef = useRef(false);

  // One gentle hint when the comparison first scrolls into view.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timers.push(
          window.setTimeout(() => !touchedRef.current && setValue(66), 350),
          window.setTimeout(() => !touchedRef.current && setValue(50), 1250),
        );
      },
      { threshold: 0.6 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);

  function update(clientX: number) {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    touchedRef.current = true;
    setValue(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    update(event.clientX);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 15 : 5;
    const next =
      event.key === "ArrowLeft" ? value - step
      : event.key === "ArrowRight" ? value + step
      : event.key === "Home" ? 0
      : event.key === "End" ? 100
      : null;
    if (next === null) return;
    event.preventDefault();
    touchedRef.current = true;
    setValue(Math.min(100, Math.max(0, next)));
  }

  return (
    <div
      ref={rootRef}
      className={`compare ${aspect}${dragging ? " is-dragging" : ""}`}
      style={{ "--pos": `${value}%` } as CSSProperties}
      onPointerDown={onPointerDown}
      onPointerMove={(event) => dragging && update(event.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <Image
        src={after}
        alt={`${label} – nachher`}
        fill
        sizes={sizes}
        className="compare-image"
        style={{ objectPosition: position }}
      />
      <Image
        src={before}
        alt={`${label} – vorher`}
        fill
        sizes={sizes}
        className="compare-image compare-before"
        style={{ objectPosition: position }}
      />

      <span className="compare-tag compare-tag-before">Vorher</span>
      <span className="compare-tag compare-tag-after">Nachher</span>

      <div className="compare-divider">
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Vorher-Nachher-Vergleich: ${label}`}
          aria-orientation="horizontal"
          aria-valuenow={Math.round(value)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={`${Math.round(value)} Prozent Vorher-Ansicht`}
          onKeyDown={onKeyDown}
          className="compare-handle"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
