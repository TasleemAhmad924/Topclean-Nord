import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[15px] font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark hover:-translate-y-px",
  secondary: "bg-transparent text-ink border border-border hover:border-brand hover:text-brand hover:-translate-y-px",
  ghost: "bg-transparent text-brand hover:text-brand-dark px-0 py-0",
};

export function Button({ href, variant = "primary", className, children, onClick, type = "button", disabled }: ButtonProps) {
  const classes = clsx(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
