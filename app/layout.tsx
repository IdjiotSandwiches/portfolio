import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { fredoka } from "@/app/ui/fonts";
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/ui/navigation/navigation-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vin's Portfolio",
  description: "A portfolio presented by me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fredoka.className} antialiased`}
      >
        <NavigationBar />
        <NextUIProvider className="flex justify-center w-full">
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
