import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";

export type Props = {
  name: string;
};

export const Demo: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Navigation />
      Ahoj {name}
    </div>
  );
};
