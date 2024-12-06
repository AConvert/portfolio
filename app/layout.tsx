import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";

const matter = localFont({
  src: [
    {
      path: "./fonts/Matter-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Matter-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Matter-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Matter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Matter-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Matter-Heavy.ttf",
      weight: "800",
    },
  ],
  variable: "--matter",
});

export const metadata: Metadata = {
  title: "Angelo Convertini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${matter.className} font-normal`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
