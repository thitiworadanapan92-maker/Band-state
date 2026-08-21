import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Course Hub",
  description: "เว็บไซต์รวบรวมข้อมูลรายวิชา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <header className="siteHeader">
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}