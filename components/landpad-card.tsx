import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Landpad } from "@/types/spacex";
import Image from "next/image";

interface LandpadCardProps {
  landpad: Landpad;
}

export function LandpadCard({ landpad }: LandpadCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={landpad.images.large[0] || "/placeholder.svg"}
              alt={landpad.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <p className="font-semibold">{landpad.full_name}</p>
              <p className="text-sm text-gray-200">
                {landpad.locality}, {landpad.region}
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold leading-none tracking-tight">
                {landpad.name}
              </h3>
              <Badge
                variant={landpad.status === "active" ? "default" : "secondary"}
              >
                {landpad.status}
              </Badge>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {landpad.details}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{landpad.full_name}</DialogTitle>
          <DialogDescription>
            {landpad.type} • {landpad.locality}, {landpad.region}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid gap-4 py-4">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={landpad.images.large[0] || "/placeholder.svg"}
                alt={landpad.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-muted-foreground">{landpad.details}</p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Status</span>
                <span className="font-medium capitalize">{landpad.status}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Type</span>
                <span className="font-medium">{landpad.type}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Attempts</span>
                <span className="font-medium">{landpad.landing_attempts}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Successes</span>
                <span className="font-medium">{landpad.landing_successes}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Success Rate
                </span>
                <span className="font-medium">
                  {landpad.landing_attempts > 0
                    ? Math.round(
                        (landpad.landing_successes / landpad.landing_attempts) *
                          100
                      )
                    : 0}
                  %
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Coordinates
                </span>
                <span className="font-medium text-xs">
                  {landpad.latitude.toFixed(4)}, {landpad.longitude.toFixed(4)}
                </span>
              </div>
            </div>

            {landpad.wikipedia && (
              <a
                href={landpad.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Read more on Wikipedia
              </a>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
