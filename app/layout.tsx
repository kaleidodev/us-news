import type { Metadata } from "next";
import {
  Merriweather,
  Montserrat,
  Open_Sans,
  Roboto,
} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "US News Money AI Article Module",
  description: "Pixel-perfect recreation of the US News Money article layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${roboto.variable} ${merriweather.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
