import type { Metadata } from "next";
import { Jost, Knewave } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/providers/theme-provider";

import { auth } from "../../auth";
import "./globals.css";

const barriecito = Knewave({
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: "Narrato - Your Ultimate eBook Library",
  description:
    "Discover a world of stories with Narrato, your ultimate eBook library. Explore, read, and organize books effortlessly. Dive into knowledge anytime, anywhere!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barriecito.className} ${jost.className} antialiased`}
        suppressHydrationWarning
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
