import chairs from "../../assets/img/chairs.png"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"


export default function Home() {
    const navigate = useNavigate()
    const [search, setSearch]= useState("")

    const handleChangeInput=({target: {value}})=> {
        setSearch(value)
    }
    const handleSearchClick=()=> {
        navigate(`/result/${search.trim()}`)
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="text-5xl font-bold w-2/5">
                <img src={chairs} className="object-cover w-full h-full"></img>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10">
                <h1 className="text-3xl font-bold font-lato">Busca tu pelicula...</h1>
                <input value={search} onChange={handleChangeInput} className="bg-special-gray font-lato w-full my-3 h-9 p-5 border focus:outline-none focus:ring-2 focus:ring-myred-500 rounded-md"></input>
                <div className="flex w-full justify-between">
                    <button onClick={handleSearchClick} className="bg-myred text-mywhite hover:bg-myred2 font-lato shadow-lg w-full mr-2">Buscar</button>
                    <button onClick={()=>setSearch("")} className="bg-myred text-mywhite hover:bg-myred2 font-lato shadow-lg w-full ml-2 h-9">Limpiar</button>
                </div>

            </div>

        </div>
    )
}