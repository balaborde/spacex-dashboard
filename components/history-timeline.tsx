"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHistory } from "@/hooks/use-spacex";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function HistoryTimeline() {
  const { data: history, isLoading } = useHistory();

  if (isLoading || !history) {
    return (
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>History Timeline</CardTitle>
          <CardDescription>Events per year</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  const eventsPerYear = history.reduce((acc, event) => {
    const year = new Date(event.event_date_utc).getFullYear();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const chartData = Object.entries(eventsPerYear)
    .map(([year, count]) => ({
      year,
      Events: count,
    }))
    .sort((a, b) => Number(a.year) - Number(b.year));

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>History Timeline</CardTitle>
        <CardDescription>
          Frequency of historical events over the years
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="year"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="Events"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
