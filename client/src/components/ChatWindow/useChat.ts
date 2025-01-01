import { useState, useEffect, useCallback, useRef } from "react";
import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message";
import { getWebSocketClient, WebSocketClient } from "./wsClient";

type MessageWithId = MessageModel & { id: string };

export const useChat = () => {
  const [messages, setMessages] = useState<MessageWithId[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketClient = useRef<WebSocketClient>();

  useEffect(() => {
    socketClient.current = getWebSocketClient("ws://localhost:4000", setIsConnected, (newMessage) => {
      const message = JSON.parse(newMessage);
      if (message.type === "message") {
        setMessages((oldMessages) => [...oldMessages, { ...message.payload, type: "text" }]);
      }
    });
    return () => {
      socketClient.current?.close();
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
    socketClient.current?.send(JSON.stringify({ type: "message", payload: outgoingMessage }));
  }, []);

  return { messages, sendMessage, isConnected };
};
