"use client";
import React from "react";
import "../theme/globals.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer/footer";

export default function ShopAndAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex justify-center bg-Gray w-full h-screen overflow-x-hidden">
      <div className="flex px-6 py-3 flex-col gap-6 w-full max-w-7xl">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
