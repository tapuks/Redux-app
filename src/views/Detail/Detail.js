import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMovieRatings } from "../../redux/actions/movies"
import { useParams } from "react-router-dom"

export default function Detail() {
    const dispatch= useDispatch()
    const {id} = useParams()

    useEffect(()=> {
        dispatch(fetchMovieRatings(id))

    },[dispatch, id])
    return (
        <h1>Detail</h1>
    )
}