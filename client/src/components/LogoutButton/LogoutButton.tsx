import React from "react";

export const LogoutButton: React.FC = () => {
  const login = async () => {
    const response = await fetch("http://localhost:4000/auth/logout", { credentials: "include" });
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <button type="button" onClick={login}>Logout</button>
  );
};
