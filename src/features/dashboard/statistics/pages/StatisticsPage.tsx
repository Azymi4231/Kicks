import StatisticsPageHeader from "@/features/dashboard/statistics/components/StatisticsPageHeader";
import StatisticsDataPills from "@/features/dashboard/statistics/components/StatisticsDataPills";

const StatisticsPage = () => {
  return (
    <div className="p-8 flex flex-col gap-6 w-full ">
      <StatisticsPageHeader />
      <StatisticsDataPills />
    </div>
  );
};

export default StatisticsPage;
