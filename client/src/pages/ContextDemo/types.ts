import { createContext } from "react";

export type MyContextType = {
  ancestor: string;
  setAncestor: (ancestor: string) => void;
};

export const MyContext = createContext<MyContextType>({
  ancestor: "",
  setAncestor: () => {
  }
});
