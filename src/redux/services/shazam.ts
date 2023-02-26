import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

declare var process: {
  env: {
    REACT_APP_SHAZAM_API_KEY: string
  }
}

export const shazamApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_SHAZAM_API_KEY)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&limit=5`,
    }),
    getHint: builder.query({
      query: (searchTerm) => `/auto-complete?term=${searchTerm}`,
    }),
  }),
})
export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
  useGetHintQuery,
} = shazamApi
