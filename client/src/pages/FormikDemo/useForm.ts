import { useNavigate } from "react-router-dom";

export const useForm = () => {
  const nav = useNavigate();

  const submitForm = async (values: Record<string, string | number>) => {
    const response = await fetch("http://localhost:4000/eventsapi/events", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      nav("/events");
    }
  };

  return { submitForm };
};
