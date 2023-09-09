import type { Metadata } from "next";

import "@/styles/main.scss";

import { HeaderPets } from "@/components";

export const metadata: Metadata = {
  title: "Pets | Shelter",
  description: "Pets | Shelter",
  keywords: ["Shelter", "Pets"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPets />
      {children}
    </>
  );
}
