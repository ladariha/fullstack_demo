import { useNavigate } from "react-router";

export const useForm = () => {
  const navigate = useNavigate();

  const submitForm = async (values: Record<string, string | number>) => {
    const response = await fetch("http://localhost:4000/eventsapi/events", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      navigate("/events");
    }
  };

  return { submitForm };
};
