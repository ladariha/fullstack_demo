import { useState, useEffect } from "react";

export const useExternalData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [response, setResponse] = useState<string>();

  const trigger = async () => {
    console.log("trigger called");
    setIsLoading(true);

    setTimeout(() => {
      setResponse("Data fetched");
      setIsLoading(false);
      setError(undefined);
    }, 5000);
  };

  useEffect(() => {
    trigger();
  }, []);

  return { isLoading, response, error };
};
