import React from "react";
import { PollingEvent } from "../../types";
import { Link } from "react-router";

export const Events: React.FC<{ data: PollingEvent[] }> = ({ data }) => {
  return (
    <div>
      <h1>Events</h1>
      {data.map((item) => <Link key={item.id} to={`/events/${item.id}`}>{item.title}</Link>)}
    </div>
  );
};
