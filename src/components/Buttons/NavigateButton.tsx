import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "../shadcnui/button";

type NavigateButtonProps = {
  children: ReactNode;
  className?: string;
  navigationLink: string;
  buttonVariant: "default" | "ghost" | "link" | "outline" | "secondary";
};

const NavigateButton = ({
  className,
  navigationLink,
  buttonVariant,
  children,
}: NavigateButtonProps) => {
  return (
    <Link
      href={navigationLink as Route}
      className={cn(
        buttonVariants({ variant: `${buttonVariant}` }),
        className,
      )}>
      {children}
    </Link>
  );
};

export default NavigateButton;
