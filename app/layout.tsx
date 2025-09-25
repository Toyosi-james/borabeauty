import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "borabeauty ✨ - Luxury Lash Extensions & Microblading",
  description:
    "Transform your beauty with our premium lash extensions and microblading services. Luxury beauty treatments that enhance your natural confidence. ✨💕",
  generator: "v0.app",
  //  icons: {
  //   icon: "/favicon.png", // put your file name here
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
