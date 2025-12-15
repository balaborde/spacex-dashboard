import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Company } from "@/types/spacex";
import { DollarSign, Globe, Rocket, Users } from "lucide-react";

interface CompanyHeroProps {
  company: Company;
}

export function CompanyHero({ company }: CompanyHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-sidebar-primary text-sidebar-primary-foreground p-8 md:p-12 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              {company.name}
            </h1>
            <p className="text-xl text-sidebar-primary-foreground/80 max-w-2xl">
              {company.summary}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge
              variant="outline"
              className="text-lg py-1 px-4 border-sidebar-primary-foreground/20 text-white"
            >
              Founded {company.founded}
            </Badge>
            <span className="text-sm text-sidebar-primary-foreground/60">
              by {company.founder}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-sidebar-primary-foreground/10 border-none text-sidebar-primary-foreground backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm opacity-70">CEO</p>
                <p className="font-semibold">{company.ceo}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sidebar-primary-foreground/10 border-none text-sidebar-primary-foreground backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm opacity-70">CTO</p>
                <p className="font-semibold">{company.cto}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sidebar-primary-foreground/10 border-none text-sidebar-primary-foreground backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <DollarSign className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm opacity-70">COO</p>
                <p className="font-semibold">{company.coo}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sidebar-primary-foreground/10 border-none text-sidebar-primary-foreground backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm opacity-70">CTO Propulsion</p>
                <p className="font-semibold">{company.cto_propulsion}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
