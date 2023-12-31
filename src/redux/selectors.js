// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.array;
export const selectFilter = state => state.filter.query;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;



// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
