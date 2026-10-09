import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 border-t border-border py-6 first:border-t-0 transition-colors hover:bg-surface md:border-t-0 md:border md:rounded-2xl md:p-6 md:hover:border-brand"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <ArrowRight
          className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
          aria-hidden
        />
      </div>
      <p className="text-[15px] leading-relaxed text-muted">{description}</p>
    </Link>
  );
}
