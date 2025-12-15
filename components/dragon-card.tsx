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
import { Dragon } from "@/types/spacex";
import Image from "next/image";

interface DragonCardProps {
  dragon: Dragon;
}

export function DragonCard({ dragon }: DragonCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={dragon.flickr_images[0] || "/placeholder.svg"}
              alt={dragon.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <p className="font-semibold capitalize">{dragon.type}</p>
              <p className="text-sm text-gray-200">
                First Flight:{" "}
                {new Date(dragon.first_flight).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold leading-none tracking-tight">
                {dragon.name}
              </h3>
              <Badge variant={dragon.active ? "default" : "secondary"}>
                {dragon.active ? "Active" : "Inactive"}
              </Badge>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {dragon.description}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{dragon.name}</DialogTitle>
          <DialogDescription>
            {dragon.type} • Crew Capacity: {dragon.crew_capacity}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid gap-4 py-4">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image
                src={dragon.flickr_images[0] || "/placeholder.svg"}
                alt={dragon.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-muted-foreground">{dragon.description}</p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Height w/ Trunk
                </span>
                <span className="font-medium">
                  {dragon.height_w_trunk.meters} m
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Diameter</span>
                <span className="font-medium">{dragon.diameter.meters} m</span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">Dry Mass</span>
                <span className="font-medium">
                  {dragon.dry_mass_kg.toLocaleString()} kg
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Launch Payload Mass
                </span>
                <span className="font-medium">
                  {dragon.launch_payload_mass.kg.toLocaleString()} kg
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  Return Payload Mass
                </span>
                <span className="font-medium">
                  {dragon.return_payload_mass.kg.toLocaleString()} kg
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg border p-3">
                <span className="text-xs text-muted-foreground">
                  First Flight
                </span>
                <span className="font-medium">
                  {new Date(dragon.first_flight).toLocaleDateString()}
                </span>
              </div>
            </div>

            {dragon.wikipedia && (
              <a
                href={dragon.wikipedia}
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
