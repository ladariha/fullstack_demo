import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
    </nav>
  );
};
