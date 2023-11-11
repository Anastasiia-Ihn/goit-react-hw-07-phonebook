import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    delContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { delContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
