import React from "react";
import ShoppingBagIcon from "@/features/dashboard/statistics/components/Icons/ShoppingBagIcon";
import ArrowIcon from "@/features/dashboard/statistics/components/Icons/ArrowIcon";

const StatisticsDataPills = () => {
  const statsData = [
    {
      title: "Total Orders",
      value: "$126.500",
      percentage: "34.7%",
      comparisonText: "Compared to Jan 2022",
    },
    {
      title: "Total Revenue",
      value: "$458.200",
      percentage: "12.3%",
      comparisonText: "Compared to Feb 2022",
    },
    {
      title: "New Customers",
      value: "1,847",
      percentage: "8.5%",
      comparisonText: "Compared to Mar 2022",
    },
  ];

  return (
    <div className="flex w-full gap-4 justify-between ">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="px-4 py-6 bg-WhiteMain rounded-2xl flex flex-col  w-full"
        >
          <p className="text-sm font-bold">{stat.title}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <ShoppingBagIcon />
              <p className="font-bold">{stat.value}</p>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowIcon />
              <p className="text-sm font-medium">{stat.percentage}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="opacity-70 text-xs">{stat.comparisonText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsDataPills;
