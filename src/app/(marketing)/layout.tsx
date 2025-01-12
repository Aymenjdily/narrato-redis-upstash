import React from "react";

import NavbarMarketing from "@/components/navbar-marketing";

type MarketingLayout = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayout) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-5">
        <NavbarMarketing />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default MarketingLayout;
