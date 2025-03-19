import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";

export const useFetchDatabase = () => {
  const {
    error,
    isLoading,
    data,
    execute: fetchData,
  } = useAsyncActionTracker<Record<string, string>[]>({
    action: async () => {
      const response = await fetch("http://localhost:4000/db/injects");
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      return response.json();
    }
  });

  const {
    execute: sendData,
    data: sendResponse,
  } = useAsyncActionTracker<void, string>({
    action: async (payload: string) => {
      const response = await fetch("http://localhost:4000/db/inject", {
        method: "POST",
        body: JSON.stringify({ text: payload }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Could not send data");
      }
      return response.json();
    }
  });

  return { error, isLoading, data, fetchData, sendData, sendResponse };
};
