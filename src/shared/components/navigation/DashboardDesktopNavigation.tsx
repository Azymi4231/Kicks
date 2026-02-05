"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import ChartBarIcon from "@/shared/svg/Statistics-logo-svg";
import AllProductsLogo from "@/shared/svg/All-products-logo-svg";
import OrderListLogo from "@/shared/svg/Order-list-logo-svg";
import LogOutIcon from "@/shared/svg/Log-out-icon-svg";
import KicksLogoDashboard from "@/shared/svg/kicks-logo-dashboard";

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  path?: string;
  onClick?: () => void;
}

const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Statistics",
    icon: <ChartBarIcon />,
    path: "/dashboard/statistics",
  },
  {
    title: "All products",
    icon: <AllProductsLogo />,
    path: "/dashboard/all-products",
  },
  {
    title: "Order list",
    icon: <OrderListLogo />,
    path: "/dashboard/order-list",
  },
];

function MenuItem({ item }: { item: MenuItemProps }) {
  const pathname = usePathname();
  const isActive = item.path ? pathname === item.path : false;

  const content = (
    <div className="flex items-center gap-3">
      <div
        className={clsx("transition-colors", {
          "text-White": isActive,
          "text-DarkGray": !isActive,
        })}
      >
        {item.icon}
      </div>
      <span
        className={clsx("font-medium transition-colors", {
          "text-White": isActive,
          "text-DarkGray": !isActive,
        })}
      >
        {item.title}
      </span>
    </div>
  );

  if (item.path) {
    return (
      <Link
        href={item.path}
        className={clsx("block rounded-lg px-4 py-3 transition-colors ", {
          "bg-Blue hover:bg-LightBlue": isActive,
          "hover:bg-Gray": !isActive,
        })}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={item.onClick}
      className="w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-Gray"
    >
      {content}
    </button>
  );
}

const DashboardDesktopNavigation = () => {
  const handleLogout = () => {
    console.log("Logging out");
  };

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-DarkGray border-opacity-25 bg-white p-4">
      <div>
        <div className="flex mb-8 px-4 items-center justify-center">
          <KicksLogoDashboard />
        </div>
        <nav className="space-y-2">
          {MENU_ITEMS.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <MenuItem
          item={{
            title: "Log out",
            icon: <LogOutIcon />,
            onClick: handleLogout,
          }}
        />
      </div>
    </div>
  );
};

export default DashboardDesktopNavigation;
