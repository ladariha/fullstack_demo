export type UserSession = {
  name?: string;
  picture?: string;
  sessionId: string;
  // token...
};

const storage = new Map<string, UserSession>();

export const getUser = (sessionId: string) => storage.get(sessionId);
export const clearUser = (sessionId: string) => storage.delete(sessionId);
export const initUser = (sessionId: string) => {
  storage.set(sessionId, { sessionId });
};
export const setUser = (sessionId: string, updatedUser: Partial<UserSession>) => {
  const user = getUser(sessionId);
  if (!user) {
    throw new Error("User not found");
  }
  storage.set(sessionId, { ...user, ...updatedUser });
};
