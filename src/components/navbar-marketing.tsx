"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BookIcon } from "lucide-react";

import { MarketingLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import { ModeToggle } from "./mode-toggle";

const NavbarMarketing = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link
        href={"/"}
        className="flex items-center gap-x-2 text-xl font-bold text-palette-primary dark:text-palette-secondary"
      >
        <BookIcon />
        Narrato
      </Link>
      <ul className="flex flex-row items-center gap-8">
        {MarketingLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "text-base capitalize",
                pathname === href
                  ? "text-palette-primary"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </header>
  );
};

export default NavbarMarketing;
