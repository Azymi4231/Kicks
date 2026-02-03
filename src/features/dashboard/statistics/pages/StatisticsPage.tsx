import React from "react";
import StatisticsPageHeader from "@/features/dashboard/statistics/components/StatisticsPageHeader";
import StatisticsDataPills from "@/features/dashboard/statistics/components/StatisticsDataPills";
import StatisticsSaleGraphComponent from "@/features/dashboard/statistics/components/StatisticsSaleGraphComponent";
import StatisticsBestSellers from "@/features/dashboard/statistics/components/StatisticsBestSellers";

const StatisticsPage = () => {
  return (
    <div className="p-8 flex flex-col gap-4  w-full">
      <StatisticsPageHeader />
      <StatisticsDataPills />
      <div className="flex gap-4 w-full">
        <div className="flex-[2]">
          <StatisticsSaleGraphComponent />
        </div>
        <div className="flex-1">
          <StatisticsBestSellers />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
