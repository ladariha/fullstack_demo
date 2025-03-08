import { useEffect, FC, useState, useRef } from "react";
import "./styles.css";
import { useExternalData } from "./hooks/useExternalData";

export type Props = {
  name: string;
};

const asyncCounterCall = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};

export const Demo: FC<Props> = ({ name }) => {
  const [counter, setCounter] = useState<number>(0);
  const [upperCasedResponse, setUpperCasedResponse] = useState<string>();
  const [asyncCounter, setAsyncCounter] = useState<number>(0);
  const { error, response, isLoading } = useExternalData();

  const divRef = useRef<HTMLDivElement>(null);

  const onAsyncClick = async () => {
    const result = await asyncCounterCall();
    setAsyncCounter(result);
  };

  useEffect(() => {
    console.log("RENDER");
  }, []);

  useEffect(() => {
    setUpperCasedResponse(response?.toLocaleUpperCase() || "");
  }, [response]);

  return (
    <div className="moje-trida" ref={divRef}>
      <div className="name">Prop: {name}</div>
      <button onClick={() => {
        console.log(divRef?.current?.getAttribute("class"));
      }}
      >Ref test
      </button>
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
      <button onClick={onAsyncClick}>Async Counter: {asyncCounter}</button>
      <button onClick={() => {
        setTimeout(() => {
          // CAREFULL !!!
          window.alert(counter);
        }, 3000);
      }}
      >Start timeout
      </button>
      <h1>External data</h1>
      <ul>
        <li>Loading: {isLoading ? "Yes..." : "False"}</li>
        <li>Error?: {error || "no error"}</li>
        <li>Response: {upperCasedResponse || "..."}</li>
      </ul>

    </div>
  );
};
