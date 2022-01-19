import {startFetchMovieRating, succesFetchMovieRating, errorFetchMovieRating} from '../actions/movies'


const MoviesReducers=(state={}, action) => {
    console.log(state, action)
    switch(action.type) {
        case startFetchMovieRating.toString(): 
            return state
        case succesFetchMovieRating.toString():
            return state
        case errorFetchMovieRating.toString():
            return state
        default:
            return state
    }
}

export default MoviesReducers