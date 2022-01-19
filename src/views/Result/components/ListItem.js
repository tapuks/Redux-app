import { useNavigate } from "react-router-dom"

const ListItem =(movie)=> {
    const navigate = useNavigate()

    const handleListItemClick=(id)=> {
        let name = "/title/"
        if (id.includes('name')) name = '/name/'
        id = id.replace(name, '').replace('/', '')
        console.log(id)
        
        navigate(`/detail/${id}`)
    }
    return (
            <div key={movie.id} className="flex w-full mt-16" style={{minWidth:'650'}}>
                <div className="w-1/6">
                    <img src={movie.image?.url} alt={movie.title} className="w-32"></img>
                </div>
                <div className="w-5/6 flex flex-col items-start py-1 px-4">
                    <p className="font-lato text-3xl">{movie.title ?? 'Sin titulo'}</p>
                    <div className="flex h-full items-end">
                        <button onClick={()=>handleListItemClick(movie.id)} style={{border:'2px solid red'}} className=" btnVerMas rounded w-48 h-10 text-xl">Ver mas</button>
                    </div>
                </div>
            </div>
        )
}

export default ListItem