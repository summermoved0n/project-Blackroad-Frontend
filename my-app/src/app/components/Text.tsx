import { text } from "@/lib/ui/text";
import { cn } from "@/lib/ui/cn";

type TextProps = {
  children: React.ReactNode;
  color:
    | "white"
    | "white20"
    | "white60"
    | "white80"
    | "black"
    | "black50"
    | "black60"
    | "orange";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  spacing?: "sm";
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text({
  color,
  size,
  spacing,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(text({ color, size, spacing }), className)} {...props}>
      {children}
    </p>
  );
}
