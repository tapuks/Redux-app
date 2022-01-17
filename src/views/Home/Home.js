import chairs from "../../assets/img/chairs.png"

export default function Home() {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="text-5xl font-bold w-2/5">
                <img src={chairs} className="object-cover w-full h-full"></img>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10">
                <h1 className="text-3xl font-bold font-lato">Busca tu pelicula...</h1>
                <input className="bg-special-gray font-lato w-full my-3 h-9 p-5"></input>
                <div className="flex">
                    <button>Buscar</button>
                    <button>Limpiar</button>
                </div>
                

            </div>

        </div>
    )
}