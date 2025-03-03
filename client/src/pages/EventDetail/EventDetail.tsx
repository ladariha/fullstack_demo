import React, { useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router";
import { Weather } from "../../components/Weather/Weather";
import { useFetchEvent } from "./useFetchEvent";

export const EventDetail: React.FC = () => {
  const { id } = useParams();

  const { fetchEvents, isLoading, error, data: item } = useFetchEvent(id as string);
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="event">
      {error ? error : ""}
      {isLoading ? "Loading..." : ""}
      {item && (
        <>
          <h1>{item.title}</h1>
          {item.location && <Weather location={item.location} />}
        </>
      )}

    </div>
  );
};
