import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, {payload}) => {
  state.isLoading = false;
  state.error = null;
  state.array = payload;
}

const handleFulfilledAddProduct = (state, {payload}) => {
  state.isLoading = false;
state.error = null;
state.array.push(payload);

}
const handleFulfilledDeleteProduct = (state, {payload}) => {
  state.isLoading = false;
  state.error = null;
  const index = state.array.findIndex(
            contact => contact.id === payload.id
          );
  
          state.array.splice(index, 1);

}

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsInitialState = {
  array: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContacts.fulfilled, handleFulfilledAddProduct)
      .addCase(deleteContacts.fulfilled, handleFulfilledDeleteProduct)
      .addMatcher((action)=> {action.type.endsWith('/pending')}, handlePending)
      .addMatcher((action)=> {action.type.endsWith('/rejected')}, handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;

// {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
// state.error = null;
// state.array = action.payload;
//   },
//   [fetchContacts.rejected]: handleRejected,
// [addContacts.pending]:handlePending,
// [addContacts.fulfilled](state, action) {
// state.isLoading = false;
// state.error = null;
// state.array.push(action.payload);
// },
// [deleteContacts.rejected]: handleRejected,
// [deleteContacts.pending]:handlePending,
// [deleteContacts.fulfilled](state, action) {
// state.isLoading = false;
// state.error = null;
// const index = state.array.findIndex(
//           contact => contact.id === action.payload.id
//         );

//         state.array.splice(index, 1);
// },
// [deleteContacts.rejected]: handleRejected,
// }

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.array.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       const index = state.array.findIndex(
//         contact => contact.id === action.payload
//       );

//       state.array.splice(index, 1);
//     },
//   },
// });

// export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
