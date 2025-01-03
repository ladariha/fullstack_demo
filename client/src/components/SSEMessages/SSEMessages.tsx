import React from "react";
import "./styles.css";
import { MainContainer, ChatContainer, MessageList, Message } from "@chatscope/chat-ui-kit-react";
import { useSSE } from "./useSSE";

export const SSEMessages: React.FC = () => {
  const { messages, isConnected } = useSSE();
  return (
    <div className="sse-window">
      <MainContainer>
        <ChatContainer>
          <MessageList loading={!isConnected}>
            {messages.map((message) => (
              <Message
                key={message.id}
                model={message}
              >
                <Message.Footer>{message.sender}</Message.Footer>
              </Message>
            ))}
          </MessageList>

        </ChatContainer>
      </MainContainer>
    </div>
  );
};
