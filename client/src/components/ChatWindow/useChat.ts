import { useState, useEffect, useRef, useCallback } from "react";
import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message";

type MessageWithId = MessageModel & { id: string };

export const useChat = () => {
  const [messages, setMessages] = useState<MessageWithId[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const wsSocket = useRef<WebSocket>();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");

    socket.onopen = () => setIsConnected(true);
    socket.onclose = () => setIsConnected(false);
    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((oldMessages) => [...oldMessages, { ...newMessage, type: "text" }]);
    };
    wsSocket.current = socket;
    return () => {
      if (socket.readyState === 1) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = useCallback((message: string, sender: string) => {
    const outgoingMessage: MessageWithId = {
      message,
      position: "normal",
      sender,
      type: "text",
      id: `${Math.random().toString(36).substr(2, 4)}`,
      direction: "incoming",
    };
    setMessages((oldMessages) => [...oldMessages, { ...outgoingMessage, direction: "outgoing", sender: "me" }]);
    wsSocket.current?.send(JSON.stringify(outgoingMessage));
  }, []);

  return { messages, sendMessage, isConnected };
};
