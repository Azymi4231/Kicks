import React from "react";
import DashboardDesktopNavigation from "@/shared/components/navigation/DashboardDesktopNavigation";
import BellIcon from "@/shared/svg/BellIIcon";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-Gray flex min-h-screen">
      <DashboardDesktopNavigation />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col">
          <div className="px-8 py-4 bg-WhiteMain border-b border-DarkGray border-opacity-25 flex justify-end">
            <div className="flex gap-6 items-center">
              <BellIcon />
              <button className="px-4 py-2 border-DarkGray border rounded-md text-sm font-semibold">
                ADMIN
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
