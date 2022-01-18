import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers = {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "c635041099msh604e80b87599778p1e4290jsn794463e088b9"
	}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://imdb8.p.rapidapi.com'}),
    endpoints: (builder)=> ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/title/find?q=${title}`,
                method: 'GET',
                headers
            }),
        }),
    }),
})

export const {useFetchMoviesQuery} = moviesApi;