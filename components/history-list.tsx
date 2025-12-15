"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useHistory } from "@/hooks/use-spacex";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function HistoryList() {
  const { data: history, isLoading } = useHistory();

  if (isLoading || !history) {
    return (
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
          <CardDescription>List of historical milestones</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }

  // Sort by date descending
  const sortedHistory = [...history].sort(
    (a, b) => b.event_date_unix - a.event_date_unix
  );

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Historical Events</CardTitle>
        <CardDescription>
          {history.length} significant milestones in SpaceX history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-8">
            {sortedHistory.map((event) => (
              <div key={event.id} className="flex gap-4">
                <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {event.title}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {new Date(event.event_date_utc).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                  {event.links.article && (
                    <Link
                      href={event.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-primary hover:underline"
                    >
                      Read Article <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
