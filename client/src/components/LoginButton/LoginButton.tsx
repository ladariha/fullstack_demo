import React from "react";

export const LoginButton: React.FC = () => {
  const login = React.useCallback(() => {
    window.location.href = "http://localhost:4000/auth/login";
  }, []);

  return (
    <button type="button" onClick={login}>Login with Google</button>
  );
};
