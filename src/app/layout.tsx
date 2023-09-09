import type { Metadata } from "next";

import "@/styles/main.scss";
import "./globals.css";

export const metadata: Metadata = {
  title: "Main | Shelter",
  description: "Shelter",
  keywords: ["Shelter", "Home", "Main"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}
