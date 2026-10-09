import { clsx } from "clsx";

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "text-xs font-semibold uppercase tracking-[0.14em] text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
