"use client";

import { CircleIcon } from "@/lib/icons/CircleIcon";
import { Button } from "./Button";
import { useRouter } from "next/dist/client/components/navigation";
import { ArrowInCircle } from "@/lib/icons/ArrowInCircle";

type ButtonWithArrowProps = {
  children: React.ReactNode;
  className?: string;
  path?: string;
  whiteArrow?: boolean;
};

export default function ButtonWithArrow({
  children,
  className,
  path,
  whiteArrow,
  ...props
}: ButtonWithArrowProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path || "/");
  };

  return (
    <Button
      variant="secondary"
      className={`${className} relative flex items-center gap-0`}
      onClick={handleClick}
      {...props}
    >
      {children}
      <CircleIcon />
      <div className="absolute right-[10px]">
        <ArrowInCircle whiteArrow={whiteArrow} />
      </div>
    </Button>
  );
}
