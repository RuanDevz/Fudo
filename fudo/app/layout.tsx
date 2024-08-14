import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FODU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico" 
          type="image/x-icon"
        />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
