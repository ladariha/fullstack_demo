import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { SSEMessages } from "../../components/SSEMessages/SSEMessages";

export const SSE: React.FC = () => {
  return (
    <div>
      <Navigation />
      <SSEMessages />
    </div>
  );
};
