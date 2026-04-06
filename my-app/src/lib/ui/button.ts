import { cva } from "class-variance-authority";

export const button = cva("px-4 py-2 rounded font-small transition", {
  variants: {
    variant: {
      primary:
        "bg-transparent border-2 border-solid border-orange-500 text-white hover:bg-orange-500",
      secondary: "bg-gray-200 hover:bg-gray-300",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
