import React, { useState, useEffect } from 'react';
import css from './App.module.scss';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/Contactlist';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-561' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-121' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-791' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-261' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
