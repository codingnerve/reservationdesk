import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-ice px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-strong border border-brand/20 ${className}`}>
      {children}
    </span>
  );
}
