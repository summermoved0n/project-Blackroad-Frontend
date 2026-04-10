import { cva } from "class-variance-authority";

export const button = cva("text-base transition", {
  variants: {
    variant: {
      primary:
        "h-[50px] text-white bg-transparent border-1 border-solid border-orange-500 hover:bg-orange-500",
      secondary: "h-[40px] text-black",
      tertiary: "h-[74px] w-[74px] rounded-full bg-[#ea9c3f]",
    },
    size: {
      sm: "w-[200px]",
      md: "w-[466px]",
      lg: "w-[514px]",
      xl: "w-[614px]",
    },
  },
});
