import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY_NEWS,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST_NEWS
};

const baseUrl = 'https://real-time-news-data.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/search?query=${newsCategory}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;