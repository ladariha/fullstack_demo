import { FC, useEffect } from "react";
import { useFetchDatabase } from "./useDatabase";
import { Formik, Form, Field } from "formik";
import "./styles.css";

export const Database: FC = () => {
  const { fetchData, isLoading, error, data, sendData, sendResponse } = useFetchDatabase();

  useEffect(() => {
    fetchData();
  }, [sendResponse]);

  return (
    <div className="db">
      <div className="db-form">
        <Formik
          initialValues={{
            text: ""
          }}
          onSubmit={async (values) => {
            sendData(values.text);
          }}
        >

          {({ isSubmitting, isValid }) => (
            <Form>
              <div>
                <label htmlFor="text">Zaznam</label>
                <Field
                  rows={10}
                  cols={40}
                  component="textarea"
                  name="text"
                />
              </div>

              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="db-out">
        {error ? error : ""}
        {isLoading ? "Loading..." : ""}
        {data && data.map((item) => <div key={`${Math.random()}`}><pre>{JSON.stringify(item)}</pre></div>)}
      </div>
    </div>
  );
};
