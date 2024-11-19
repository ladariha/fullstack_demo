import React from "react";

type Props = {
  name: string;
  picture: string;
};
export const Profile: React.FC<Props> = ({ name, picture }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={picture} alt="Profile picture" />
    </div>
  );
};
