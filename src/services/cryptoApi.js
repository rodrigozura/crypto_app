import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ACCESS_TOKEN = process.env.REACT_APP_X_ACCESS_TOKEN
const BASE_URL = process.env.REACT_APP_BASE_URL

const cryptoApiHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
 'x-access-token': ACCESS_TOKEN,
}

const baseUrl = BASE_URL

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(count ? `/coins?limit=${count}` : '/coins'),
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi
