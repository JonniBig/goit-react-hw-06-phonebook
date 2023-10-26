import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className="contactsList">
      {Array.isArray(contacts) &&
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))}
    </ul>
  );
};

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <li className="listItem">
      {name}: {number}
      <button
        className="contactsListBtn"
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};
