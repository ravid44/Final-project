// src/services/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // <-- your backend URL
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/register", // <-- backend register endpoint
        method: "POST",
        body,
      }),
    }),
    // You can add loginUser, getProfile, etc.
  }),
});

export const { useRegisterUserMutation } = authApi;
