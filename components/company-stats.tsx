import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Company } from "@/types/spacex";
import { DollarSign, MapPin, Rocket, Users } from "lucide-react";

interface CompanyStatsProps {
  company: Company;
}

export function CompanyStats({ company }: CompanyStatsProps) {
  const stats = [
    {
      label: "Employees",
      value: company.employees.toLocaleString(),
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Vehicles",
      value: company.vehicles,
      icon: Rocket,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: "Launch Sites",
      value: company.launch_sites,
      icon: MapPin,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      label: "Valuation",
      value: `$${(company.valuation / 1000000000).toFixed(1)}B`,
      icon: DollarSign,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bg}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
