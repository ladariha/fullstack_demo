import React from "react";
import { Formik, Form, Field } from "formik";
import { useForm } from "./useForm";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const MyInput: React.FC<FieldProps> = ({ field, form, ...props }) => {
//   return (
//     <div style={{ border: "1px solid black" }}>
//       <input {...field} {...props} />
//     </div>
//   );
// };

export const FormikDemo: React.FC = () => {
  const { submitForm } = useForm();
  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            title: "New event",
            location: "",
          }}
          validate={(values) => {
            const errors: Record<string, string> = {};

            if (values.title && values.title.length < 1) {
              errors.firstName = "Prilis kratke";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            submitForm(values);
          }}
        >

          {({ isSubmitting, errors, isValid }) => (
            <Form>
              <div>
                <label htmlFor="title">Název</label>
                <Field
                  name="title"
                  placeholder="Jane"
                />
                {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
              </div>
              <div>
                <label htmlFor="location">Místo</label>
                <Field
                  name="location"
                  placeholder="Praha"
                />
                {errors.location && <div style={{ color: "red" }}>{errors.location}</div>}
              </div>

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
