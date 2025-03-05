import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";

export const useFileUpload = () => {
  const {
    error,
    data,
    isLoading,
    execute,
  } = useAsyncActionTracker<string, File>({
    action: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      const result = await fetch("http://localhost:4000/fileupload/upload", {
        method: "POST",
        body: formData,
      });

      if (!result.ok) {
        throw new Error(result.statusText);
      }

      return result.json();
    }
  });

  return { error, isLoading, execute, data };
};
