import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./components/nav";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Yaman Nayal | Portfolio",
  description: "Yaman's Porfolio Site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-slate-950 `}>
        <ReactLenis options={{ duration: 2 }} root>
          <Nav />
          {children}
          <footer className="flex justify-center p-4 bg-slate-900 text-slate-400 text-sm w-full mt-16">
            &copy; {new Date().getFullYear()} Yaman Nayal - All rights reserved
          </footer>
        </ReactLenis>
      </body>
    </html>
  );
}
