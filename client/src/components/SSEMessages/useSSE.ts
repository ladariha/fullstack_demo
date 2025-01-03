import { useEffect, useState, useRef } from "react";
import { MessageWithId } from "../../types";

export const useSSE = () => {
  const [messages, setMessages] = useState<MessageWithId[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const client = useRef<EventSource>();

  const handleIncomingMessage = (evt: MessageEvent, isPing = false) => {
    const incomingMessage = JSON.parse(evt.data);
    setMessages((oldMessages) => [...oldMessages, {
      type: "text",
      id: evt.lastEventId,
      sender: isPing ? "ping" : "server",
      direction: "incoming",
      position: "normal",
      message: incomingMessage.message,
    }]);
  };

  useEffect(() => {
    client.current = new EventSource("http://localhost:4000/sse", { withCredentials: true });

    client.current.addEventListener("message", (evt) => {
      handleIncomingMessage(evt);
    });

    client.current.addEventListener("ping", (evt) => {
      handleIncomingMessage(evt, true);
    });

    client.current.onopen = () => {
      setIsConnected(true);
    };

    return () => {
      setIsConnected(false);
      client.current?.close();
    };
  }, []);

  return { messages, isConnected };
};
