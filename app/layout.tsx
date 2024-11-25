import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description:
    "A sleek portfolio website for showcasing work and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className} bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
