import { useReducer, useMemo } from "react";

enum ActionType {
  Increment = "inc",
  Decrement = "dec",
}

type State = { count: number };
type Action = { type: string; payload?: unknown };

const myReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.Increment:
      return { count: state.count + 1 };
    case ActionType.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const ReducerDemo = () => {
  const [state, dispatch] = useReducer<typeof myReducer>(myReducer, { count: 0 });

  const value = useMemo(() => "value " + Date.now(), []);

  return (
    <div>
      <button onClick={() => dispatch({ type: ActionType.Increment })}>+</button>
      <button onClick={() => dispatch({ type: ActionType.Decrement })}>-</button>
      <div>value {state.count}</div>
      <div>Memo value: {value}</div>
    </div>
  );
};
