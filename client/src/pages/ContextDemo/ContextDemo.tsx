import { FC, useState } from "react";
import { ChildComponent } from "../../components/ChildComponent/ChildComponent";
import { MyContext } from "./types";

export const ContextDemo: FC = () => {
  const [name, setName] = useState("Lada");

  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={() => setName("Lada")}>Set my name to Lada</button>

      <MyContext.Provider value={{ ancestor: name, setAncestor: setName }}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};
