import React, { useState, FormEvent } from "react";
import { waitMs } from "../../utils";
import { Navigation } from "../../components/Navigation/Navigation";

export const UncontrolledForm: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getFormInput = <T, >(event: FormEvent, fieldName: string): T => {
    const el = event.currentTarget.querySelector<HTMLInputElement>(`[name='${fieldName}']`);
    return el as T;
  };

  const handle = async (event: FormEvent) => {
    const input = getFormInput<HTMLInputElement>(event, "myName");
    console.log(input.value);
    event.preventDefault();

    setDisabled(true);
    // fake submit async action
    await waitMs(3000);
    setDisabled(false);
    setSubmitted(true);
  };

  return (
    <div>
      <Navigation />
      <h1>Uncontrolled</h1>
      <form onSubmit={handle}>
        <input type="text" name="myName" placeholder="Name" required />
        <button type="submit" disabled={disabled}>Submit</button>
      </form>
      {submitted && <h3>Odeslano</h3>}
    </div>
  );
};
