import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "View and share recipes with the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
