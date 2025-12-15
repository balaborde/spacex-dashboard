import { fetcher } from "@/lib/fetcher";
import { Company, Dragon, History, Landpad, Launch, Rocket, Ship } from "@/types/spacex";
import useSWR from "swr";

const BASE_URL = "https://api.spacexdata.com/v4";

export function useSpaceX<T>(path: string, baseUrl: string = BASE_URL) {
  const { data, error, isLoading } = useSWR<T>(`${baseUrl}${path}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useRockets() {
  return useSpaceX<Rocket[]>("/rockets");
}

export function useDragons() {
  return useSpaceX<Dragon[]>("/dragons");
}

export function useLandpads() {
  return useSpaceX<Landpad[]>("/landpads");
}

export function useShips() {
  return useSpaceX<Ship[]>("/ships");
}

export function useCompany() {
  return useSpaceX<Company>("/company");
}

export function useHistory() {
  return useSpaceX<History[]>("/history");
}

export function useLaunches() {
  return useSpaceX<Launch[]>("/launches");
}
