"use client";

import {
  Box,
  Building2,
  History,
  MapPin,
  Rocket,
  Send,
  Ship,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Rockets",
      url: "/rockets",
      icon: Rocket,
    },
    {
      title: "Launches",
      url: "/launches",
      icon: Send,
    },
    {
      title: "Dragons",
      url: "/dragons",
      icon: Box,
    },
    {
      title: "Landpads",
      url: "/landpads",
      icon: MapPin,
    },
    {
      title: "Ships",
      url: "/ships",
      icon: Ship,
    },
    {
      title: "History",
      url: "/history",
      icon: History,
    },
    {
      title: "Company",
      url: "/dashboard",
      icon: Building2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pl-4 pt-4">
        <div className="flex items-center gap-2">
          <Rocket className="size-5" />
          <span className="text-base font-semibold">SpaceX</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
