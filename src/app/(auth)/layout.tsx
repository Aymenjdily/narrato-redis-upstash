import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ModeToggle } from "@/components/mode-toggle";

import FooterForm from "./_components/footer.form";
import HeaderForm from "./_components/header-form";

type AuthLayout = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <main className="grid min-h-screen items-center md:grid-cols-2">
      <div className="p-10">
        <div className="mx-auto flex max-w-xl flex-col items-start gap-y-5 rounded-xl bg-neutral-900 p-5">
          <div className="flex w-full items-center justify-between gap-5">
            <Link
              href={"/"}
              className="flex items-center gap-x-2 text-xl font-bold text-palette-secondary"
            >
              <Image
                src="/icon-cat-dark.svg"
                alt="logo"
                width={50}
                height={50}
              />
              Narrato
            </Link>
            <ModeToggle />
          </div>
          <HeaderForm />
          {children}
          <FooterForm />
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="picture-login"
          fill
          className="object-cover"
        />
        <div className="absolute h-full w-full bg-black/30" />
      </div>
    </main>
  );
};

export default AuthLayout;
