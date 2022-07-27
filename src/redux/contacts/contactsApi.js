import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({
  url,
  method,
  data,
  params,
}) => {
  try {
    const result = await axios({ url: baseUrl + url, method, data, params });
    return { data: result.data };
  } catch (error) {}
};

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    FetchContacts: builder.query({
      query: () => ({ url: `contacts`, method: 'GET' }),
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: ({name, number}) => ({ url: 'contacts', method: 'POST', data: {name, number} }),
      invalidatesTags: ['Contacts'],
    }),

    removeContact: builder.mutation({
      query: contactId => ({ url: `contacts/${contactId}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;