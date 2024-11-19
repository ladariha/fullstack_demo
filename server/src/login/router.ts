import { Router, NextFunction, Request, Response } from "express";
import { google } from "googleapis";
import { UserSession, getUser, initUser, setUser, clearUser } from "./storage";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID || "",
  process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
  process.env.GOOGLE_OAUTH_REDIRECT_URI,
);

declare module "express-session" {
  interface SessionData {
    user: UserSession;
    id: string;
    state: string;
  }
}

const router = Router();
const assertLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const user = getUser(req.session.id);
  if (user) {
    req.session.user = user;
    next();
  } else {
    res.status(401).send("Not logged in");
  }
};

router.get("/login", (req, res) => {
  const state = req.session.id;
  req.session.user = {
    sessionId: state
  };
  req.session.state = state;
  initUser(state);

  const authorizationUrl = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",
    /** Pass in the scopes array defined above.
     * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
    scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
    // Enable incremental authorization. Recommended as a best practice.
    include_granted_scopes: true,
    prompt: "consent",
    // Include the state parameter to reduce the risk of CSRF attacks.
    state: state
  });
  res.redirect(authorizationUrl);
});

router.get("/google/google-callback/oauth/login", async (req: Request, res: Response) => {
  if (req.query.error) {
    res.status(500).send(`Something went wrong: ${req.query.error}`);
    return;
  }
  const code: string = req.query.code as string;
  const sessionId = req.query.state as string;

  const { tokens } = await oauth2Client.getToken(code);
  // store safely!
  oauth2Client.setCredentials(tokens);
  const info = await oauth2Client.verifyIdToken({ idToken: tokens.id_token || "" });
  setUser(sessionId, {
    picture: info.getPayload()?.picture || "",
    name: info.getPayload()?.name || "Name missing",
  });

  res.redirect("http://localhost:3000?loggedIn");
});

router.get("/whoami", assertLoggedIn, (req, res) => {
  res.json(req.session.user);
});

router.get("/logout", (req, res) => {
  const sessionId = req.session.id;
  clearUser(sessionId);

  res.status(200).send();
});

export default router;
