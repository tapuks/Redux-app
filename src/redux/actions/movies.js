import { createAction } from '@reduxjs/toolkit'

export const startFetchMovieRating = createAction('START_FETCH_MOVIE_RATINGS')
export const succesFetchMovieRating = createAction('SUCCES_FETCH_MOVIE_RATINGS')
export const errorFetchMovieRating = createAction('ERROR_FETCH_MOVIE_RATINGS')

const BASE_URL = "https://imdb8.p.rapidapi.com"
const headers ={
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "c635041099msh604e80b87599778p1e4290jsn794463e088b9"
}

export const fetchMovieRatings =(movieId)=> async (dispatch)=> {
    try {
        dispatch(startFetchMovieRating())
        const response = await fetch(`${BASE_URL}/title/get-ratings?tconst=tt0944947/${movieId}`, {headers})
        const data = await response.json()
        console.log("data", data)
        dispatch(succesFetchMovieRating({data}))
	}
     catch (error) {
        dispatch(errorFetchMovieRating({error}))

    }
}