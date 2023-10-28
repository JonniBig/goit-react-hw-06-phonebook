import css from './ContactForm.module.scss';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleAddContact = userContacts => {
    const hasDuplicateContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === userContacts.name.toLowerCase() ||
        contact.number === userContacts.number
    );

    if (hasDuplicateContacts) {
      alert(
        `${userContacts.name} or ${userContacts.number} is already in contacts`
      );
      return;
    }
    dispatch(addContact(userContacts));
  };

  const [data, setData] = useState({ name: '', number: '' });
  const { name, number } = data;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const userContacts = {
      id: nanoid(),
      name: name,
      number: number,
    };

    handleAddContact(userContacts);
    setData({ name: '', number: '' });
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
        />
      </label>
      <label>
        <input
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
        />
      </label>
      <button className={css.formButton}>Add contact</button>
    </form>
  );
};
