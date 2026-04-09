"use client";

import { button } from "@/lib/ui/button";
import { cn } from "@/lib/ui/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
