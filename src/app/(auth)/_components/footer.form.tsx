"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterForm = () => {
  const pathname = usePathname();

  return (
    <span className="text-center text-sm text-muted-foreground">
      {pathname === "/sign-up"
        ? "Do you have an account?"
        : "Don't have an account?"}
      <Link
        href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
        className="ml-2 text-palette-secondary underline"
      >
        {pathname === "/sign-up" ? "Login" : "Register"}
      </Link>
    </span>
  );
};

export default FooterForm;
