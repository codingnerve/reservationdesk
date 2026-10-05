import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "onBrand" | "accent" | "outline";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold tracking-wide transition-[background-color,border-color,transform,box-shadow,color] duration-150 focus-visible:outline-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-on-brand hover:bg-brand-strong active:scale-[0.98] shadow-sm shadow-brand/30",
  accent:
    "bg-accent text-ink hover:bg-accent-strong hover:text-white active:scale-[0.98] shadow-sm shadow-accent/25",
  secondary:
    "border border-line bg-surface-raised text-ink hover:border-brand/40 hover:bg-ice active:scale-[0.98]",
  outline:
    "border border-line bg-transparent text-ink hover:border-brand hover:text-brand active:scale-[0.98]",
  ghost:
    "text-ink hover:bg-ice hover:text-brand-strong active:scale-[0.98]",
  onBrand:
    "bg-surface-raised text-brand-strong hover:bg-ice active:scale-[0.98] shadow-sm",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm min-h-11",
  lg: "px-7 py-3.5 text-base min-h-12",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
