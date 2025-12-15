import { Launch } from "@/types/spacex";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface LaunchCardProps {
  launch: Launch;
}

export function LaunchCard({ launch }: LaunchCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statusColor = launch.success
    ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
    : launch.upcoming
    ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
    : "bg-red-500/10 text-red-500 hover:bg-red-500/20";

  const statusText = launch.success
    ? "Success"
    : launch.upcoming
    ? "Upcoming"
    : "Failed";

  return (
    <Card className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md p-0 pb-4 gap-4">
      <div className="aspect-video relative overflow-hidden bg-muted">
        {launch.links.patch.small ? (
          <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={launch.links.patch.small}
              alt={launch.name}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <Rocket className="size-12" />
          </div>
        )}
        <div className="absolute right-2 top-2">
          <Badge variant="secondary" className={statusColor}>
            {statusText}
          </Badge>
        </div>
      </div>
      <CardHeader className="px-4">
        <CardTitle className="line-clamp-1">{launch.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="size-3" />
          {mounted
            ? format(new Date(launch.date_utc), "PPP")
            : "Loading date..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {launch.details || "No details available for this launch."}
        </p>
      </CardContent>
      <CardFooter className="gap-2 px-4">
        {launch.links.webcast && (
          <Link
            href={launch.links.webcast}
            target="_blank"
            className="text-xs text-primary hover:underline"
          >
            Watch Webcast
          </Link>
        )}
        {launch.links.article && (
          <Link
            href={launch.links.article}
            target="_blank"
            className="text-xs text-primary hover:underline"
          >
            Read Article
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
