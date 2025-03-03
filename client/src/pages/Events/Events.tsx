import React, { useEffect } from "react";
import { Link } from "react-router";
import { useFetchEvents } from "./useFetchEvents";

export const Events: React.FC = () => {
  const { fetchEvents, isLoading, error, data } = useFetchEvents();
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {error ? error : ""}
      {isLoading ? "Loading..." : ""}
      <ul>
        {data && data.map((item) => <li key={item.id}><Link to={`/events/${item.id}`}>{item.title}</Link></li>)}
      </ul>
    </div>
  );
};
