import React, { useEffect, useState } from "react";
import { LoginButton } from "./components/LoginButton/LoginButton";
import { Profile } from "./components/Profile/Profile";
import { LogoutButton } from "./components/LogoutButton/LogoutButton";

enum LoginState {
  Loading,
  LoggedIn,
  LoggedOut
}

type ProfileType = {
  name: string;
  picture: string;
};

const App: React.FC = () => {
  const [loginState, setLoginState] = useState<LoginState>(LoginState.Loading);
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/auth/whoami", { credentials: "include" });
        if (response.ok) {
          setProfile(await response.json());
          setLoginState(LoginState.LoggedIn);
          return;
        }
      } catch (e) {
        console.log(e.message);
      }
      setLoginState(LoginState.LoggedOut);
    };

    checkUser();
  }, []);
  return (
    <div className="app">
      {loginState === LoginState.Loading && <span>Loading...</span>}
      {loginState === LoginState.LoggedOut && <LoginButton />}
      {loginState === LoginState.LoggedIn && profile && (
        <div>
          <Profile name={profile.name} picture={profile.picture} />
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default App;
