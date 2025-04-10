import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
