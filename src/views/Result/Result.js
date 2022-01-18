import { useParams } from "react-router-dom"
import MovieImg from "../../assets/img/movie-theater.png"
import { useFetchMoviesQuery } from "../../redux/apiFetch/movies";
import ListResult from "./components/ListResult";
import Loading from "./components/Loading";


export default function Result() {
    const {title} = useParams()
    const {data: movies, isLoading, isSuccess, isFetching, error} = useFetchMoviesQuery(title)
    console.log(movies)

    return (
        <div className="flex">
            <div className="w-3/5 h-screen overflow-y-auto">
                {isLoading && isFetching ? <Loading/> : <ListResult data={movies.results} />}

            </div>
            <div className="w-2/5">
                <img src={MovieImg} alt='movies' className="w-full h-screen overflow-hidden"></img>
            </div>
        </div>
    )
}