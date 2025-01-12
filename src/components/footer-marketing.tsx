import Link from "next/link";

import { Button } from "./ui/button";

const FooterMarketing = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between border-t border-primary/20 py-5">
      <p className="text-sm text-muted-foreground">
        &copy; {getYear}, All Rights Reserved
      </p>
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Button variant={"link"}>Privacy policies</Button>
        </Link>
        <Link href={"/"}>
          <Button variant={"link"}>Terms of use</Button>
        </Link>
      </div>
    </footer>
  );
};

export default FooterMarketing;
