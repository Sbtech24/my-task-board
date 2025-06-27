import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "My task board",
  description: "Built by Lorey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
