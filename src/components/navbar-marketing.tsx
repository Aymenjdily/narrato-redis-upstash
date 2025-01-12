"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MarketingLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import { ModeToggle } from "./mode-toggle";

const NavbarMarketing = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between gap-5 border-b border-primary/20 py-5">
      <Link
        href={"/"}
        className="flex items-center gap-x-2 text-xl font-bold text-palette-primary dark:text-palette-secondary"
      >
        <Image
          src="/icon-cat-light.svg"
          alt="logo"
          width={50}
          height={50}
          className="block dark:hidden"
        />
        <Image
          src="/icon-cat-dark.svg"
          alt="logo"
          width={50}
          height={50}
          className="hidden dark:block"
        />
        Narrato
      </Link>
      <ul className="flex flex-row items-center gap-8">
        {MarketingLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "text-base text-sm capitalize",
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
