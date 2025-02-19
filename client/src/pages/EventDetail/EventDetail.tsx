import React from "react";
import { PollingEvent } from "../../types";
import "./styles.css";
import { getDataById } from "../../eventData";
import { useParams } from "react-router-dom";
import { Weather } from "../../components/Weather/Weather";

export const EventDetail: React.FC = () => {
  const [item, setItem] = React.useState<PollingEvent | undefined>();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      setItem(getDataById(id));
    }
  }, [id]);

  return (
    <div className="event">
      {!item && `Loading event ${id}...`}
      {item && (
        <>
          <h1>{item.title}</h1>
          {item.location && <Weather location={item.location} />}
        </>
      )}

    </div>
  );
};
