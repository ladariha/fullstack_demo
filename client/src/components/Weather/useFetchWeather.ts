import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { getWeather } from "./utils";

export const useFetchWeather = () => {
  const {
    error,
    isLoading,
    data,
    execute
  } = useAsyncActionTracker<string, string>({ action: (cityName: string) => getWeather(cityName) });

  const fetchWeather = (cityName: string) => execute(cityName);

  return { error, isLoading, data, fetchWeather };
};
