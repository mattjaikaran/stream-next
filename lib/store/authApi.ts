import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api/auth/` }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Define a logout mutation
    logout: builder.mutation({
      query: () => ({
        url: '/logout', // Adjust the endpoint as necessary
        method: 'POST',
      }),
    }),
    // Define a user query to fetch user data
    fetchUser: builder.query({
      query: userId => `/users/${userId}`, // Adjust the endpoint as necessary
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchUserQuery,
} = authApi;
