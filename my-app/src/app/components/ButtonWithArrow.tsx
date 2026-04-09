"use client";

import { CircleIcon } from "@/lib/icons/CircleIcon";
import { Button } from "./Button";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import { useRouter } from "next/dist/client/components/navigation";

type ButtonWithArrowProps = {
  children: React.ReactNode;
  className?: string;
  path?: string;
};

export default function ButtonWithArrow({
  children,
  className,
  path,
  ...props
}: ButtonWithArrowProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path || "/");
  };

  return (
    <Button
      variant="secondary"
      className={`${className} relative flex items-center`}
      onClick={handleClick}
      {...props}
    >
      {children}
      <CircleIcon />
      <div className="absolute right-2.5">
        <ArrowRightIcon />
      </div>
    </Button>
  );
}
