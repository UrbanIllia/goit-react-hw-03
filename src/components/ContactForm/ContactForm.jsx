import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameFieldId}
          />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            type="number"
            name="phonenumber"
            id={numberFieldId}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
