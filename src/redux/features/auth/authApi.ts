import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            })
        }),
        signup: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userInfo
            })
        }),

        getUser: builder.query({
            query: (id) => ({
                url: `/auth/${id}`,
                method: 'GET',
            }),
        }),
    }),
})

export const { useLoginMutation, useSignupMutation, useGetUserQuery } = authApi;