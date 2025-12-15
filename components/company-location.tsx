import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Company } from "@/types/spacex";
import { Globe, MapPin } from "lucide-react";

interface CompanyLocationProps {
  company: Company;
}

export function CompanyLocation({ company }: CompanyLocationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Headquarters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-lg font-semibold">
                {company.headquarters.address}
              </p>
              <p className="text-muted-foreground">
                {company.headquarters.city}, {company.headquarters.state}
              </p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted relative">
              {/* TODO Je sais pas faire de carte et j'ai pas le temps */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                <MapPin className="h-12 w-12 opacity-20" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Connect
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full justify-start h-12 text-lg"
              asChild
            >
              <a
                href={company.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-5 w-5" />
                Website
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-12 text-lg"
              asChild
            >
              <a
                href={company.links.flickr}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5.625 12C5.625 14.0711 3.94607 15.75 1.875 15.75C-0.196068 15.75 -1.875 14.0711 -1.875 12C-1.875 9.92893 -0.196068 8.25 1.875 8.25C3.94607 8.25 5.625 9.92893 5.625 12ZM13.125 12C13.125 14.0711 11.4461 15.75 9.375 15.75C7.30393 15.75 5.625 14.0711 5.625 12C5.625 9.92893 7.30393 8.25 9.375 8.25C11.4461 8.25 13.125 9.92893 13.125 12Z" />
                </svg>
                Flickr
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-12 text-lg"
              asChild
            >
              <a
                href={company.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-12 text-lg"
              asChild
            >
              <a
                href={company.links.elon_twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Elon Musk
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
