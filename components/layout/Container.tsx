import { clsx } from "clsx";
import type { ElementType, ReactNode } from "react";

export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-12 xl:px-14", className)}>
      {children}
    </Tag>
  );
}
