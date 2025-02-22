import type { Metadata } from "next";

import { Quicksand } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bg-Gone",
  description: "remove backgound image and modify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sand font-normal antialiased",
          sand.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
