import React from "react";

import Banner from "@/components/banner";
import FooterMarketing from "@/components/footer-marketing";
import NavbarMarketing from "@/components/navbar-marketing";

type MarketingLayout = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayout) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-200 dark:from-neutral-900 dark:to-black">
      <Banner />
      <div className="mx-auto max-w-5xl px-5">
        <NavbarMarketing />
        <div className="">{children}</div>
        <FooterMarketing />
      </div>
    </main>
  );
};

export default MarketingLayout;
