"use client";

import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/components/hooks/useIsMobile";

type Range = "weekly" | "monthly" | "yearly";
type ChartPoint = { label: string; sales: number };

const weekly: ChartPoint[] = [
  { label: "Mon", sales: 120 },
  { label: "Tue", sales: 180 },
  { label: "Wed", sales: 90 },
  { label: "Thu", sales: 210 },
  { label: "Fri", sales: 160 },
  { label: "Sat", sales: 240 },
  { label: "Sun", sales: 200 },
];

const monthly: ChartPoint[] = [
  { label: "JAN", sales: 900 },
  { label: "FEB", sales: 1100 },
  { label: "MAR", sales: 1250 },
  { label: "APR", sales: 1400 },
  { label: "MAY", sales: 1550 },
  { label: "JUN", sales: 1700 },
  { label: "JUL", sales: 1900 },
  { label: "AUG", sales: 2100 },
  { label: "SEP", sales: 1950 },
  { label: "OCT", sales: 2300 },
  { label: "NOV", sales: 2800 },
  { label: "DEC", sales: 3200 },
];

const yearly: ChartPoint[] = [
  { label: "2020", sales: 12000 },
  { label: "2021", sales: 15600 },
  { label: "2022", sales: 14900 },
  { label: "2023", sales: 18200 },
  { label: "2024", sales: 23100 },
];

function formatValue(v: number | string): string {
  return typeof v === "number" ? v.toLocaleString("pl-PL") : v;
}

const StatisticsSaleGraphComponent: React.FC = () => {
  const [range, setRange] = React.useState<Range>("monthly");
  const isMobile = useIsMobile();

  const data: ChartPoint[] = React.useMemo(() => {
    if (range === "weekly") return weekly;
    if (range === "yearly") return yearly;
    return isMobile ? monthly.slice(-6) : monthly;
  }, [range, isMobile]);

  return (
    <div className="h-full rounded-2xl bg-WhiteMain flex flex-col gap-4  py-6 px-4  mr-[-4px]">
      <div className="flex items-center justify-between pb-2 border-b border-DarkGray">
        <p className="text-xl font-bold">Sale Graph</p>

        <Tabs value={range} onValueChange={(v) => setRange(v as Range)}>
          <TabsList>
            <TabsTrigger value="weekly">WEEKLY</TabsTrigger>
            <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
            <TabsTrigger value="yearly">YEARLY</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ left: 8, right: 8, top: 8, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <Tooltip
              cursor={{ opacity: 0.1 }}
              formatter={(value) => [
                formatValue(value as number | string),
                "Sales",
              ]}
              labelStyle={{ fontWeight: 600 }}
            />
            <Bar dataKey="sales" fill="#4A69E2" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsSaleGraphComponent;
