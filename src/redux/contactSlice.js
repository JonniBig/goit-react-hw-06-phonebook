import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-561' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-121' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-791' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-261' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        key: nanoid(),
        contactName: action.payload.contactName,
        contactNumber: action.payload.contactNumber,
      });
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.key !== action.payload.key
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  changeFilter: setFilter,
} = contactSlice.actions;
export default contactSlice.reducer;
