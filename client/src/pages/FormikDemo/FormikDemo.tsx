import React from "react";
import { Formik, Form, Field, FieldProps, ErrorMessage } from "formik";
import { waitMs } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyInput: React.FC<FieldProps> = ({ field, form, ...props }) => {
  return <div style={{ border: "1px solid black" }}><input {...field} {...props} /></div>;
};

export const FormikDemo: React.FC = () => {
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validate={(values) => {
            console.log(values);
            if (values.firstName && values.firstName.length < 5) {
              return { firstName: "Prilis kratke" };
            }
          }}
          onSubmit={async (values) => {
            await waitMs(500);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" placeholder="Jane" />
                {/* {errors.firstName && touched.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>} */}
                {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
                <ErrorMessage name="firstName" />
              </div>

              <label htmlFor="lastName">Last Name</label>
              <Field component={MyInput} name="lastName" placeholder="Doe" />

              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@acme.com" type="email" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </>
  );
};
