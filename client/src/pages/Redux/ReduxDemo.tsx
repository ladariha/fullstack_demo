import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { increment, decrement } from "./counterSlice";
import { useParams } from "react-router-dom";

export const ReduxDemo: FC = () => {
  const { parameter } = useParams();
  console.log(parameter);
  const count = useSelector((state: RootState) => state.counterState.counter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {parameter !== undefined && <h1>{parameter}</h1>}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <div>value {count}</div>
    </div>
  );
};
