import { useFetchWeather } from "./useFetchWeather";
import React, { useEffect } from "react";

export type Props = { location: string };
export const Weather: React.FC<Props> = ({ location }) => {
  const { error, fetchWeather, isLoading, data } = useFetchWeather();

  useEffect(() => {
    fetchWeather(location);
  }, []);

  return (
    <div>
      {error ? location : ""}
      {isLoading ? "Loading weather..." : ""}
      {!isLoading && !error && data && <h3>{location} {data}</h3>}
    </div>
  );
};
