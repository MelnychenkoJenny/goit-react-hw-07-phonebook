import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648c200b8620b8bae7ec47e8.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
