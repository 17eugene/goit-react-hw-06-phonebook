import { connect } from "react-redux";

import contactsActions from "../redux/contacts/contacts-actions";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            type="button"
            className={styles.delete_btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getFiltredContacts = (allContacts, filter) => {
  const normalized = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalized)
  );
};

const mapStateToProps = (state) => {
  const visibleContacts = getFiltredContacts(
    state.contacts.items,
    state.contacts.filter
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
