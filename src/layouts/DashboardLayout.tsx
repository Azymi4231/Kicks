import React from "react";
import DashboardDesktopNavigation from "@/shared/components/navigation/DashboardDesktopNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-Gray flex min-h-screen">
      <DashboardDesktopNavigation />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
