import { FC, useContext } from "react";
import { MyContext } from "../../pages/ContextDemo/types";

const GrandChildComponent: FC = () => {
  const { ancestor, setAncestor } = useContext(MyContext);
  return (
    <div style={{ margin: "2em", border: "1px solid black", padding: "1em" }}>
      <div>My distant ancestor {ancestor}</div>
      <button onClick={() => setAncestor("???")}>Set distant ancestor to ???</button>
    </div>
  );
};

export const ChildComponent: FC = () => {
  const { ancestor, setAncestor } = useContext(MyContext);
  return (
    <div style={{ margin: "2em", border: "1px solid black", padding: "1em" }}>
      <div>My ancestor {ancestor}</div>
      <button onClick={() => setAncestor("Riha")}>Set ancestor to Riha</button>
      <GrandChildComponent />
    </div>
  );
};
