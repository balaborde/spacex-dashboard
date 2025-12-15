"use client";

import { CompanyHero } from "@/components/company-hero";
import { CompanyLocation } from "@/components/company-location";
import { CompanyStats } from "@/components/company-stats";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useCompany } from "@/hooks/use-spacex";
import { Loader2 } from "lucide-react";

export default function CompanyPage() {
  const { data: company, isLoading, isError } = useCompany();

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {isLoading ? (
          <div className="flex h-[50vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : isError || !company ? (
          <div className="flex h-[50vh] items-center justify-center text-destructive">
            Failed to load company data
          </div>
        ) : (
          <div className="container mx-auto max-w-7xl animate-in fade-in duration-500">
            <CompanyHero company={company} />
            <CompanyStats company={company} />
            <CompanyLocation company={company} />
          </div>
        )}
      </div>
    </SidebarInset>
  );
}
