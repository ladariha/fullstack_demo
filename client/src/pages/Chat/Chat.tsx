import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { ChatWindow } from "../../components/ChatWindow/ChatWindow";
import "./styles.css";

export const Chat: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="chat">
        <ChatWindow user="User 1" />
        <ChatWindow user="User 2" />
        <ChatWindow user="User 3" />
        <ChatWindow user="User 4" />
      </div>
    </div>
  );
};
