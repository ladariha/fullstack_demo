import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { UserSession } from "./storage";
import { Router, Request, Response, NextFunction } from "express";

const router = Router();

declare module "express-session" {
  interface SessionData {
    passport?: {
      user: UserSession;
    };
    id: string;
    state: string;
  }
}

const assertLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const user = req.session.passport?.user;
  if (user) {
    next();
  } else {
    res.status(401).send("Not logged in");
  }
};

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
  callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI,
  scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
  // scope: [ 'profile' ],
  state: true
}, (_accessToken, _refreshToken, profile, done) => {
  // napr. test zda uzivatel existuje v databazi uzivatelu nase aplikace
  done(null, profile);
}));

// type GoogleUser = {
//   id: string;
//   picture: string;
//   name: string;
// };

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userData: UserSession = { name: user.displayName, sessionId: user.id, picture: user.photos[0]?.value };
    cb(null, userData);
  });
});

passport.deserializeUser((user, cb) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.nextTick(() => cb(null, user));
});

router.get("/login", passport.authenticate("google"));
router.get("/google/google-callback/oauth/login",
  passport.authenticate("google", { failureRedirect: "/login", failureMessage: true }),
  (_req, res) => {
    res.redirect("http://localhost:3000?loggedIn");
  });

router.get("/whoami", assertLoggedIn, (req, res) => {
  res.json(req.session.passport?.user as UserSession);
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.status(200).send();
  });
});

export default router;
