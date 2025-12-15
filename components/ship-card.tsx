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
import { Ship } from "@/types/spacex";
import Image from "next/image";

interface ShipCardProps {
  ship: Ship;
}

export function ShipCard({ ship }: ShipCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={ship.image || "/placeholder.svg"}
              alt={ship.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <p className="font-semibold">{ship.type}</p>
              <p className="text-sm text-gray-200">{ship.home_port}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold leading-none tracking-tight">
                {ship.name}
              </h3>
              <Badge variant={ship.active ? "default" : "secondary"}>
                {ship.active ? "Active" : "Inactive"}
              </Badge>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {ship.roles.map((role) => (
                <Badge key={role} variant="outline" className="text-xs">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{ship.name}</DialogTitle>
          <DialogDescription>
            {ship.type} • {ship.home_port}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid gap-4 py-4">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={ship.image || "/placeholder.svg"}
                alt={ship.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Year Built
                </span>
                <span className="font-medium">{ship.year_built || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Mass</span>
                <span className="font-medium">
                  {ship.mass_kg ? `${ship.mass_kg.toLocaleString()} kg` : "N/A"}
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Speed</span>
                <span className="font-medium">
                  {ship.speed_kn ? `${ship.speed_kn} kn` : "N/A"}
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">IMO</span>
                <span className="font-medium">{ship.imo || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">MMSI</span>
                <span className="font-medium">{ship.mmsi || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">ABS</span>
                <span className="font-medium">{ship.abs || "N/A"}</span>
              </div>
            </div>

            {ship.link && (
              <a
                href={ship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Read more on MarineTraffic
              </a>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
