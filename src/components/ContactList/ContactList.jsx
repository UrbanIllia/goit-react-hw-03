import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = (contacts) => {
  return (
    <div className={css.div}>
      <Contact contacts={contacts} />
    </div>
  );
};

export default ContactList;
