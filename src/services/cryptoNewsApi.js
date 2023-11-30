import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://newsapi.org/v2';

const createRequest = (url) => ({ url });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/everything?q=${newsCategory}&sortBy=popularity&pageSize=${count}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;