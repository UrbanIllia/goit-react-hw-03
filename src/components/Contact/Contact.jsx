import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.div}>
      {name} {number}
    </div>
  );
};

export default Contact;
