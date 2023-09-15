import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Dave and Steph",
  description: "",
};

const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.className}>
      <head>
        <title>Dave and Steph</title>
      </head>
      <body className="bg-gradient-to-br from-neutral-200 from-10% to-neutral-300 to-90% px-2 text-neutral-800">
        <main className="flex min-h-screen flex-col ">
          <nav className="z-10 mt-6 flex justify-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Dave and Steph logo"
                width={200}
                height={100}
              />
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
