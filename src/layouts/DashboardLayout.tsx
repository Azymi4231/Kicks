import React from "react";
import DashboardDesktopNavigation from "@/shared/components/navigation/DashboardDesktopNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-Gray flex">
      <DashboardDesktopNavigation />
      <div>{children}</div>
    </div>
  );
}
