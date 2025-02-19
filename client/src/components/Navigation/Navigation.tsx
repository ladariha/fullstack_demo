import { Link } from "react-router";
import React from "react";
import "./styles.css";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/sse">SSE</Link>
      <Link to="/lekce">Lekce</Link>
      <Link to="/reducer">useReducer</Link>
      <Link to="/context">context</Link>
      <Link to="/redux">redux</Link>
      <Link to="/controlled">controlled form</Link>
      <Link to="/uncontrolled">uncontrolled form</Link>
      <Link to="/formik">Formik</Link>
      <Link to="/events">Events</Link>
    </nav>
  );
};
