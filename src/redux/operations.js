import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('', async () => {
  const contacts = await fetch;
  return contacts;
});

// const BASE_URL = 'https://654e2195cbc325355742678f.mockapi.io/contacts';
