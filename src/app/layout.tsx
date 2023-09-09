import type { Metadata } from "next";

import "@/styles/main.scss";

import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Main | Shelter",
  description: "Main | Shelter",
  keywords: ["Shelter", "Home", "Main"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
