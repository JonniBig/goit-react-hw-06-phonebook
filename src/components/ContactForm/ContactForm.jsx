import React, { useState } from 'react';
import css from './ContactForm.module.scss';

export function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    onAddContact(name, number);

    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
        required
        className={css.formInput}
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Number"
        required
        className={css.formInput}
      />
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
