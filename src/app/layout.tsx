import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";

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
