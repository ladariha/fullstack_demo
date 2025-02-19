import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import { waitMs } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyInput: React.FC<FieldProps> = ({ field, form, ...props }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <input {...field} {...props} />
    </div>
  );
};

export const FormikDemo: React.FC = () => {
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "Lada",
            lastName: "",
            email: "",
          }}
          validate={(values) => {
            const errors: Record<string, string> = {};

            if (values.firstName && values.firstName.length < 5) {
              errors.firstName = "Prilis kratke";
            }

            if (values.lastName && values.lastName.length < 3) {
              errors.lastName = "Prilis kratke lastName";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            await waitMs(500);
            alert(JSON.stringify(values, null, 2));
          }}
        >

          {({ isSubmitting, errors, isValid }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  placeholder="Jane"
                />
                {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field component={MyInput} name="lastName" placeholder="Doe" />
                {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
              </div>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@email.com" type="email" />

              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </>
  );
};
