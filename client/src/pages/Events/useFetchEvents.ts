import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { PollingEvent } from "../../types";
import { loadEventsGenerated, SimplePollingEvent } from "../../apiClient";

export const useFetchEvents = () => {
  const {
    error,
    isLoading,
    data,
    execute: fetchEvents,
  } = useAsyncActionTracker<PollingEvent[] | SimplePollingEvent[]>({
    // action: () => getEvents()
    action: () => loadEventsGenerated()
  });

  return { error, isLoading, data, fetchEvents };
};
