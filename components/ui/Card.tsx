import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-line bg-surface-raised p-6 shadow-xs transition-all duration-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
