import type { Metadata } from "next";
import "./globals.css";
import { fredoka } from "@/app/ui/fonts";
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/ui/navigation/navigation-bar";
import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/app/ui/education-section'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: "Vin's Portfolio",
  description: "A portfolio presented by me.",
  icons: {
    icon: "/Logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fredoka.className} antialiased text-gray-900`}
      >
        <DynamicComponentWithNoSSR />
        <NavigationBar />
        <NextUIProvider className="flex justify-center w-full">
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
