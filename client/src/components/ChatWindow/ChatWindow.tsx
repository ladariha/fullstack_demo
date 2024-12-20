import React, { useRef } from "react";
import "./styles.css";
import { MessageInput, Message, MessageList, MainContainer, ChatContainer } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useChat } from "./useChat";

const getColor = () => {
  return "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export const ChatWindow: React.FC<{ user: string }> = ({ user }) => {
  const backgroundColor = useRef(getColor());
  const { messages, sendMessage, isConnected } = useChat();

  return (
    <div className="chat-window" style={{ backgroundColor: backgroundColor.current }}>
      <div style={{ height: "500px", width: "25vw" }}>
        <h5>{user}</h5>
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
            <MessageInput
              disabled={!isConnected}
              onSend={(_innerHtml, _textContent, innerText) => {
                sendMessage(innerText, user);
              }}
              placeholder="Zpráva"
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};
