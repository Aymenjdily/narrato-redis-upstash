"use client";

import { usePathname } from "next/navigation";

const HeaderForm = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-xl text-white">
        {pathname === "/sign-up"
          ? "Create Your Library Account"
          : "Welcome Back To The Narrato"}
      </h1>
      <p className="text-sm text-muted-foreground">
        {pathname === "/sign-up"
          ? "Please complete all fields and upload a valid university ID to gain access to the library"
          : "Access the vast collection of resources, and stay updated"}
      </p>
    </div>
  );
};

export default HeaderForm;
