'use server'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { dicreaseDays } from '../utils/convertData'

const API_KEY = process.env.REACT_APP_NEWS_API_KEY
const BASE_URL = "http://localhost:8000"

const baseUrl = BASE_URL

const cryptoApiHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

// const createRequest = (url) => ({url, headers: cryptoApiHeaders})

const today = new Date()
const formatedDate = dicreaseDays(today, 30)

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchNews: builder.query({
            query: (data) => ({
                url: `/external/api`,
                method: 'POST',
                headers: cryptoApiHeaders,
                body: {
                    api_url: `https://newsapi.org/v2/everything?q=${data.newsCategory}&from=${formatedDate}&pageSize=${data.count}&sortBy=publishedAt&apiKey=${API_KEY}`,
                }
            })
        })
    })
})

export const { useFetchNewsQuery } = newsApi