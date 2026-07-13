"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../shadcnui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../shadcnui/sheet";

const HeaderMenuButton = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open navigation menu">
        <MenuIcon />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="border-b-2">
          <Link
            href={"/"}
            aria-label="PixSlash-Web-Logo"
            onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt="PixSlash-Logo"
              priority
              className="h-8 w-auto"
            />
          </Link>

          <SheetDescription />
        </SheetHeader>

        <nav
          className="grid grid-cols-1 gap-3 px-6 pt-3 text-center"
          aria-label="Mobile navigation">
          <Link
            href="/wallpapers"
            className="hover:text-muted-foreground"
            onClick={() => setOpen(false)}>
            Wallpapers
          </Link>

          <Link
            href="/categories"
            className="hover:text-muted-foreground"
            onClick={() => setOpen(false)}>
            categories
          </Link>

          <Link
            href="/login"
            className={buttonVariants({ variant: "ghost", className: "px-3" })}
            onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link
            href="/register"
            className={buttonVariants({ variant: "default" })}
            onClick={() => setOpen(false)}>
            Register
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenuButton;
