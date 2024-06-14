import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import Header from "@/shared/header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen overflow-hidden flex bg-Gray px-6 py-3 flex-col gap-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}