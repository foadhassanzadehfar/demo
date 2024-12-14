import type { Metadata } from "next";
import "../globals.css";
import { NavLinks } from "../ui/nav-links";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('/assets/second_bg.png')] bg-cover bg-center h-[844px] w-screen font-dirooz">
      <NavLinks />
      {children}
    </div>
  );
}
