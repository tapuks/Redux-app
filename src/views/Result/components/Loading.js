const Loading=()=> {

    return (
        <div className="flex flex-col justify-center items-center h-full ">
            <div className="w-16 h-16 rounded-full animate-spin" style={{border: '6px solid red', borderTopColor:'transparent'}}></div>
            <p className="mt-3">Buscando peliculas</p>
        </div>
        )
}

export default Loading