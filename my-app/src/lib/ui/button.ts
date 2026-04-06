import { cva } from "class-variance-authority";

export const button = cva("h-[50px] text-base text-white transition", {
  variants: {
    variant: {
      primary:
        "bg-transparent border-1 border-solid border-orange-500 hover:bg-orange-500",
    },
    size: {
      sm: "w-[200px]",
      md: "w-[466px]",
      lg: "w-[514px]",
      xl: "w-[614px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
