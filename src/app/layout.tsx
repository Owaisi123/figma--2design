import type { Metadata } from "next";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Figma Hackathon",
  description: " Figma Design generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
