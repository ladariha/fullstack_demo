import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { getEvents } from "./utils";
import { PollingEvent } from "../../types";

export const useFetchEvents = () => {
  const {
    error,
    isLoading,
    data,
    execute: fetchEvents,
  } = useAsyncActionTracker<PollingEvent[]>({
    action: () => getEvents()
  });

  return { error, isLoading, data, fetchEvents };
};
