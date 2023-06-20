import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { contactsApi } from './RTK-query/contactsApi';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
