
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CandidateProfileApi = createApi({
  reducerPath: 'CandidateProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
  saveProfile: builder.mutation({
      query: (candidate) => {
        return{
            url:'resume/',
            method:'POST',
            body:candidate
        }
      }
    }),
  }),
})


export const { useSaveProfileMutation } = CandidateProfileApi