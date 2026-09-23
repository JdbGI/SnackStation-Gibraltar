import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  tone?: "brand" | "ink";
  icon?: ReactNode;
  /** Swing the icon to point up-right on hover (for arrows). */
  swing?: boolean;
};

export function PrimaryButton({
  className,
  children,
  tone = "brand",
  icon = <ArrowRight className="h-5 w-5" />,
  swing = true,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex h-14 items-center gap-4 overflow-hidden rounded-full pl-7 pr-2 text-base font-bold transition-shadow duration-500",
        tone === "brand"
          ? "bg-brand text-ink shadow-[0_14px_40px_-14px_rgba(255,128,191,0.9)] hover:shadow-[0_20px_60px_-12px_rgba(255,128,191,1)]"
          : "bg-ink text-white shadow-[0_14px_40px_-14px_rgba(10,10,12,0.8)]",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 translate-y-[101%] rounded-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0",
          tone === "brand" ? "bg-white" : "bg-brand-800",
        )}
      />
      <span className="relative whitespace-nowrap">{children}</span>
      <span
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out-expo",
          swing && "group-hover:-rotate-45",
          tone === "brand" ? "bg-ink text-brand" : "bg-brand text-ink",
        )}
      >
        {icon}
      </span>
    </a>
  );
}

export function GhostButton({ className, children, tone = "brand", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-14 items-center gap-2 rounded-full border px-7 font-semibold transition-colors duration-300",
        tone === "brand"
          ? "border-white/15 text-white hover:border-brand hover:text-brand"
          : "border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-brand",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
