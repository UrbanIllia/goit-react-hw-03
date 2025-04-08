import css from "./SearchBox.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const SearchBox = () => {
  const searchFieldId = useId();
  return (
    <Formik>
      <Form className={css.form}>
        <label htmlFor={searchFieldId}>Find contacts by name</label>
        <Field
          className={css.inputSearch}
          type="text"
          name="search"
          id={searchFieldId}
        />
      </Form>
    </Formik>
  );
};

export default SearchBox;
{
  /* <div className={css.div}>SearchBox</div>; */
}
